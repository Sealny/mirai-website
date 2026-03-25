"use client";

import { useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";

// ─── Canvas helpers ──────────────────────────────────────────────────────────

/** Cubic bezier at parameter t, 1-dimensional */
function b(t: number, p0: number, p1: number, p2: number, p3: number) {
  const u = 1 - t;
  return u*u*u*p0 + 3*u*u*t*p1 + 3*u*t*t*p2 + t*t*t*p3;
}

const RED = "rgb(178,34,52)";

// ─── Thread data ─────────────────────────────────────────────────────────────

interface Thread {
  // all coords normalised 0-1 relative to canvas dimensions
  x0: number; y0: number;  // start
  x3: number; y3: number;  // end
  cx1: number; cy1: number;  // cp1 (base, before mouse warp)
  cx2: number; cy2: number;  // cp2 (base)
  // spring offsets (mouse attraction, normalised)
  ox1: number; oy1: number;
  ox2: number; oy2: number;
  // animation state
  progress: number;   // 0 → 1  (draw-in phase)
  alpha: number;      // current displayed opacity
  maxAlpha: number;   // target opacity once fully drawn
  lineWidth: number;
  phase: "in" | "hold" | "out";
  holdTimer: number;  // ms to hold before fading
  destNode: number;   // which node lights up on arrival (-1 = none)
}

interface Node {
  x: number; y: number;   // 0-1 normalised
  pulse: number;          // 0-1  bright flash
  wobble: number;         // phase for idle oscillation
}

// ─── Factories ───────────────────────────────────────────────────────────────

function rnd() { return Math.random(); }
function rndBetween(a: number, z: number) { return a + rnd() * (z - a); }

/** True if point is in the centre "clear zone" where the text lives */
function inTextZone(nx: number, ny: number) {
  return nx > 0.18 && nx < 0.82 && ny > 0.28 && ny < 0.72;
}

function makeNodes(count: number): Node[] {
  const nodes: Node[] = [];
  let attempts = 0;
  while (nodes.length < count && attempts++ < 600) {
    const x = rndBetween(0.03, 0.97);
    const y = rndBetween(0.03, 0.97);
    if (!inTextZone(x, y)) {
      nodes.push({ x, y, pulse: 0, wobble: rnd() * Math.PI * 2 });
    }
  }
  return nodes;
}

function makeThread(nodes: Node[], preDrawn = false): Thread {
  const fromEdge = rnd() < 0.25;
  let x0: number, y0: number, x3: number, y3: number, destNode = -1;

  if (fromEdge || nodes.length < 2) {
    const side = Math.floor(rnd() * 4);
    if (side === 0)      { x0 = rnd();   y0 = -0.04; }
    else if (side === 1) { x0 = 1.04;   y0 = rnd();  }
    else if (side === 2) { x0 = rnd();   y0 = 1.04;  }
    else                 { x0 = -0.04;  y0 = rnd();  }
    destNode = Math.floor(rnd() * nodes.length);
    x3 = nodes[destNode].x;
    y3 = nodes[destNode].y;
  } else {
    const a = Math.floor(rnd() * nodes.length);
    let c = a; while (c === a) c = Math.floor(rnd() * nodes.length);
    x0 = nodes[a].x; y0 = nodes[a].y;
    x3 = nodes[c].x; y3 = nodes[c].y;
    destNode = c;
  }

  const vx = x3 - x0, vy = y3 - y0;
  const px = -vy, py = vx;
  const curv = rndBetween(-0.45, 0.45);
  const cx1 = x0 + vx * rndBetween(0.28, 0.38) + px * curv;
  const cy1 = y0 + vy * rndBetween(0.28, 0.38) + py * curv;
  const cx2 = x0 + vx * rndBetween(0.62, 0.72) + px * curv * 0.6;
  const cy2 = y0 + vy * rndBetween(0.62, 0.72) + py * curv * 0.6;

  const maxAlpha = rndBetween(0.12, 0.85);
  const holdTimer = rndBetween(4000, 10000);

  if (preDrawn) {
    return { x0, y0, x3, y3, cx1, cy1, cx2, cy2, ox1: 0, oy1: 0, ox2: 0, oy2: 0,
      progress: 1, alpha: maxAlpha * rndBetween(0.6, 1), maxAlpha, lineWidth: rndBetween(0.4, 1.8),
      phase: "hold", holdTimer: rndBetween(0, holdTimer), destNode };
  }
  return { x0, y0, x3, y3, cx1, cy1, cx2, cy2, ox1: 0, oy1: 0, ox2: 0, oy2: 0,
    progress: 0, alpha: 0, maxAlpha, lineWidth: rndBetween(0.4, 1.8),
    phase: "in", holdTimer, destNode };
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(0);

  const t = useTranslations("home");
  const locale = useLocale();

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d")!;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile  = window.innerWidth < 768;
    const MAX_TH  = mobile ? 7 : 12;
    const NUM_ND  = mobile ? 10 : 18;

    // ── Size canvas to match CSS size (DPR-aware) ─────────────────────────
    const fit = () => {
      const dpr = window.devicePixelRatio || 1;
      const w   = canvas.clientWidth;
      const h   = canvas.clientHeight;
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width  = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(canvas);

    // ── Build world ───────────────────────────────────────────────────────
    const nodes = makeNodes(NUM_ND);
    const threads: Thread[] = [];

    if (reduced) {
      // static composition
      for (let i = 0; i < MAX_TH; i++) threads.push(makeThread(nodes, true));
    } else {
      // half pre-drawn, half drawing in, staggered
      for (let i = 0; i < MAX_TH; i++) {
        const th = makeThread(nodes, i < Math.floor(MAX_TH * 0.5));
        if (!th.progress) {
          // stagger new threads so they don't all start at once
          (th as any)._delay = i * 600; // ms before this thread starts
        }
        threads.push(th);
      }
    }

    // ── Render loop ───────────────────────────────────────────────────────
    let lastTs = performance.now();
    let worldAge = 0; // total ms elapsed

    const frame = (ts: number) => {
      const dt = Math.min(ts - lastTs, 50);
      lastTs = ts;
      worldAge += dt;

      const W = canvas.clientWidth;
      const H = canvas.clientHeight;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      ctx.clearRect(0, 0, W, H);

      // ── update & draw threads ──────────────────────────────────────────
      for (let i = 0; i < threads.length; i++) {
        const th = threads[i];
        const delay = (th as any)._delay ?? 0;
        if (worldAge < delay) continue;

        if (!reduced) {
          if (th.phase === "in") {
            // draw in ~3 seconds
            th.progress = Math.min(1, th.progress + dt / 3000);
            th.alpha    = Math.min(th.maxAlpha, th.alpha + th.maxAlpha * dt / 800);
            if (th.progress >= 1) {
              th.phase = "hold";
              th.holdTimer -= 0; // start counting
              if (th.destNode >= 0) nodes[th.destNode].pulse = 1;
            }
          } else if (th.phase === "hold") {
            th.holdTimer -= dt;
            if (th.holdTimer <= 0) th.phase = "out";
          } else {
            // fade out over 2s
            th.alpha -= th.maxAlpha * dt / 2000;
            if (th.alpha <= 0) {
              // replace with a fresh thread
              const nt = makeThread(nodes, false);
              (nt as any)._delay = 0;
              threads[i] = nt;
              continue;
            }
          }
        }

        if (th.alpha < 0.005) continue;

        // ── mouse spring ───────────────────────────────────────────────
        const cx_mid = ((th.cx1 + th.cx2) / 2) * W;
        const cy_mid = ((th.cy1 + th.cy2) / 2) * H;
        const dist   = Math.hypot(mx - cx_mid, my - cy_mid);
        const inf    = Math.max(0, 1 - dist / 220) * 0.12;
        const targetOx = (mx / W - (th.cx1 + th.cx2) / 2) * inf;
        const targetOy = (my / H - (th.cy1 + th.cy2) / 2) * inf;
        const spring   = 0.05;
        th.ox1 += (targetOx - th.ox1) * spring;
        th.oy1 += (targetOy - th.oy1) * spring;
        th.ox2 += (targetOx * 0.6 - th.ox2) * spring;
        th.oy2 += (targetOy * 0.6 - th.oy2) * spring;

        // ── compute pixel coords ───────────────────────────────────────
        const ax = th.x0 * W,  ay = th.y0 * H;
        const dx = th.x3 * W,  dy = th.y3 * H;
        const bx = (th.cx1 + th.ox1) * W, by = (th.cy1 + th.oy1) * H;
        const cx = (th.cx2 + th.ox2) * W, cy = (th.cy2 + th.oy2) * H;

        // ── draw ───────────────────────────────────────────────────────
        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, th.alpha));
        ctx.strokeStyle = RED;
        ctx.lineWidth   = th.lineWidth;
        ctx.lineCap     = "round";
        ctx.lineJoin    = "round";
        ctx.beginPath();

        if (th.progress >= 1) {
          ctx.moveTo(ax, ay);
          ctx.bezierCurveTo(bx, by, cx, cy, dx, dy);
        } else {
          // progressive draw — sample the bezier up to th.progress
          const STEPS = 48;
          let firstPoint = true;
          for (let s = 0; s <= STEPS; s++) {
            const tv = (s / STEPS) * th.progress;
            const px = b(tv, ax, bx, cx, dx);
            const py = b(tv, ay, by, cy, dy);
            if (firstPoint) { ctx.moveTo(px, py); firstPoint = false; }
            else              ctx.lineTo(px, py);
          }
        }

        ctx.stroke();
        ctx.restore();
      }

      // ── draw nodes ─────────────────────────────────────────────────────
      for (const nd of nodes) {
        nd.wobble += 0.0007 * dt;
        if (nd.pulse > 0) nd.pulse = Math.max(0, nd.pulse - 0.0018 * dt);

        const nx = nd.x * W;
        const ny = nd.y * H;
        const idle   = (Math.sin(nd.wobble) + 1) / 2; // 0-1
        const energy = Math.max(idle * 0.25, nd.pulse);
        const r      = 1.0 + energy * 3.2;
        const a      = 0.18 + energy * 0.62;

        if (nd.pulse > 0.05) {
          // ring
          ctx.save();
          ctx.globalAlpha = nd.pulse * 0.22;
          ctx.strokeStyle = RED;
          ctx.lineWidth   = 0.6;
          ctx.beginPath();
          ctx.arc(nx, ny, r + nd.pulse * 10, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        ctx.save();
        ctx.globalAlpha = a;
        ctx.fillStyle   = RED;
        ctx.beginPath();
        ctx.arc(nx, ny, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(frame);
    };

    rafRef.current = requestAnimationFrame(frame);

    // ── scroll fade ───────────────────────────────────────────────────────
    const onScroll = () => {
      const pct = Math.min(1, window.scrollY / (section.clientHeight * 0.5));
      canvas.style.opacity = String(1 - pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // ── pointer ───────────────────────────────────────────────────────────
    const onMove  = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };
    const onTouch = (e: TouchEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.touches[0].clientX - r.left, y: e.touches[0].clientY - r.top };
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("touchmove", onTouch, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[600px] bg-white overflow-hidden flex items-center justify-center"
    >
      {/* Animation canvas — stays behind text */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      />

      {/* ── Centered text overlay ───────────────────────────────────────── */}
      <div
        className="relative flex flex-col items-center text-center px-8 max-w-xl mx-auto"
        style={{ zIndex: 1 }}
      >
        {/* Logo */}
        <div className="hero-fade-in mb-7">
          <Image
            src="/assets/logo/mirai-logo-transparent.png"
            alt="Mirai Consulting"
            width={1381}
            height={302}
            className="w-52 md:w-64 lg:w-72 h-auto"
            priority
          />
        </div>

        {/* Tagline */}
        <p
          className="hero-fade-in hero-delay-2 font-display text-base md:text-lg font-normal leading-relaxed tracking-wide mb-4"
          style={{ color: "rgba(178,34,52,0.65)" }}
        >
          {t("heroHeadline")}
        </p>

        {/* Chinese */}
        <p
          className="hero-fade-in hero-delay-3 font-sans text-xs tracking-[0.3em] mb-10"
          style={{ color: "rgba(178,34,52,0.36)" }}
        >
          未来咨询
        </p>

        {/* CTAs */}
        <div className="hero-fade-in hero-delay-4 flex flex-col sm:flex-row gap-3">
          <Link href={`/${locale}/contact`} className="hero-cta-solid">
            {t("ctaBook")}
          </Link>
          <Link href={`/${locale}/for-european-firms`} className="hero-cta-outline">
            {t("ctaExplore")}
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hero-fade-in hero-delay-5"
        style={{ zIndex: 1 }}
      >
        <div className="scroll-hint-line" />
      </div>
    </section>
  );
}
