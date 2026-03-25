"use client";

import { useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";

const RED = "rgb(178,34,52)";

interface Thread {
  x0: number; y0: number;
  x3: number; y3: number;
  cx1: number; cy1: number;
  cx2: number; cy2: number;
  progress: number;
  alpha: number;
  maxAlpha: number;
  lineWidth: number;
  speed: number;
}

function rndBetween(a: number, z: number) { return a + Math.random() * (z - a); }

function inTextZone(nx: number, ny: number) {
  return nx > 0.22 && nx < 0.78 && ny > 0.32 && ny < 0.68;
}

function makeThread(): Thread {
  // Start from edges only, end in corners/edges (avoid center text zone)
  const side = Math.floor(Math.random() * 4);
  let x0: number, y0: number, x3: number, y3: number;
  
  // Start point (from edge)
  if (side === 0)      { x0 = Math.random(); y0 = -0.05; }
  else if (side === 1) { x0 = 1.05; y0 = Math.random(); }
  else if (side === 2) { x0 = Math.random(); y0 = 1.05; }
  else                 { x0 = -0.05; y0 = Math.random(); }
  
  // End point (to another edge or corner, avoiding text zone)
  do {
    const endSide = Math.floor(Math.random() * 4);
    if (endSide === 0)      { x3 = rndBetween(0.05, 0.95); y3 = -0.05; }
    else if (endSide === 1) { x3 = 1.05; y3 = rndBetween(0.05, 0.95); }
    else if (endSide === 2) { x3 = rndBetween(0.05, 0.95); y3 = 1.05; }
    else                    { x3 = -0.05; y3 = rndBetween(0.05, 0.95); }
  } while (inTextZone(x3, y3));
  
  const vx = x3 - x0, vy = y3 - y0;
  const px = -vy, py = vx;
  const curv = rndBetween(-0.3, 0.3);
  
  return {
    x0, y0, x3, y3,
    cx1: x0 + vx * 0.35 + px * curv,
    cy1: y0 + vy * 0.35 + py * curv,
    cx2: x0 + vx * 0.65 + px * curv * 0.5,
    cy2: y0 + vy * 0.65 + py * curv * 0.5,
    progress: 0,
    alpha: 0,
    maxAlpha: rndBetween(0.15, 0.55),
    lineWidth: rndBetween(0.5, 1.2),
    speed: rndBetween(0.0003, 0.0008),
  };
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef(0);
  const threadsRef = useRef<Thread[]>([]);

  const t = useTranslations("home");
  const locale = useLocale();

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d")!;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    const MAX_THREADS = isMobile ? 4 : 6; // Fewer lines

    // Size canvas
    const fit = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(canvas);

    // Init threads
    threadsRef.current = Array.from({ length: MAX_THREADS }, () => makeThread());
    // Stagger start times
    threadsRef.current.forEach((th, i) => {
      th.progress = reduced ? 1 : Math.random() * 0.3;
      th.alpha = reduced ? th.maxAlpha : 0;
    });

    // Animation loop
    let lastTs = performance.now();
    const frame = (ts: number) => {
      const dt = Math.min(ts - lastTs, 50);
      lastTs = ts;
      const W = canvas.clientWidth;
      const H = canvas.clientHeight;

      ctx.clearRect(0, 0, W, H);

      for (const th of threadsRef.current) {
        if (!reduced) {
          // Simple draw-in animation
          if (th.progress < 1) {
            th.progress = Math.min(1, th.progress + dt * th.speed);
            th.alpha = th.maxAlpha * th.progress;
          } else {
            // Hold with subtle breathing
            th.alpha = th.maxAlpha * (0.9 + Math.sin(ts * 0.001) * 0.1);
          }
        }

        if (th.alpha < 0.01) continue;

        // Draw bezier curve
        ctx.save();
        ctx.globalAlpha = th.alpha;
        ctx.strokeStyle = RED;
        ctx.lineWidth = th.lineWidth;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(th.x0 * W, th.y0 * H);
        ctx.bezierCurveTo(
          th.cx1 * W, th.cy1 * H,
          th.cx2 * W, th.cy2 * H,
          th.x3 * W, th.y3 * H
        );
        ctx.stroke();
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(frame);
    };

    rafRef.current = requestAnimationFrame(frame);

    // Scroll fade
    const onScroll = () => {
      const pct = Math.min(1, window.scrollY / (section.clientHeight * 0.5));
      canvas.style.opacity = String(1 - pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[600px] bg-white overflow-hidden flex items-center justify-center"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      />

      <div
        className="relative flex flex-col items-center text-center px-8 max-w-xl mx-auto"
        style={{ zIndex: 1 }}
      >
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

        <p
          className="hero-fade-in hero-delay-2 font-display text-base md:text-lg font-normal leading-relaxed tracking-wide mb-4"
          style={{ color: "rgba(178,34,52,0.65)" }}
        >
          {t("heroHeadline")}
        </p>

        <p
          className="hero-fade-in hero-delay-3 font-sans text-xs tracking-[0.3em] mb-10"
          style={{ color: "rgba(178,34,52,0.36)" }}
        >
          未来咨询
        </p>

        <div className="hero-fade-in hero-delay-4 flex flex-col sm:flex-row gap-3">
          <Link href={`/${locale}/contact`} className="hero-cta-solid">
            {t("ctaBook")}
          </Link>
          <Link href={`/${locale}/for-european-firms`} className="hero-cta-outline">
            {t("ctaExplore")}
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hero-fade-in hero-delay-5"
        style={{ zIndex: 1 }}
      >
        <div className="scroll-hint-line" />
      </div>
    </section>
  );
}
