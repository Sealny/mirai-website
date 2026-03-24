"use client";

import { useEffect, useRef } from "react";

interface Thread {
  fromLeft: boolean;
  yBase: number;
  amp: number;
  freq: number;
  phase: number;
  speed: number;
  lineWidth: number;
  alpha: number;
}

export function SilkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Fixed seed — no re-randomization on re-render
    const N = 20;
    const threads: Thread[] = Array.from({ length: N * 2 }, (_, i) => ({
      fromLeft: i < N,
      yBase: ((i % N) + 0.5) / N,
      amp: 28 + (i % 7) * 14,
      freq: 0.22 + (i % 5) * 0.07,
      phase: (i * 1.9021) % (Math.PI * 2),
      speed: 0.14 + (i % 6) * 0.035,
      lineWidth: 0.5 + (i % 5) * 0.4,
      alpha: 0.08 + (i % 6) * 0.05,
    }));

    const draw = () => {
      const W = canvas.clientWidth;
      const H = canvas.clientHeight;
      ctx.clearRect(0, 0, W, H);

      for (const th of threads) {
        const y = th.yBase * H;
        const w1 = Math.sin(t * th.speed + th.phase) * th.amp;
        const w2 = Math.sin(t * th.speed * 0.65 + th.phase + 1.8) * th.amp * 0.55;

        // Left threads: from x=-5% to x=68%; right threads: from x=105% to x=32%
        const x0 = th.fromLeft ? -W * 0.05 : W * 1.05;
        const x3 = th.fromLeft ? W * 0.68  : W * 0.32;
        const x1 = x0 + (x3 - x0) * 0.3;
        const x2 = x0 + (x3 - x0) * 0.7;

        // Gradient fades to 0 at both ends — peaks in the middle of each thread
        const grad = ctx.createLinearGradient(x0, 0, x3, 0);
        if (th.fromLeft) {
          grad.addColorStop(0,    `rgba(178,34,52,0)`);
          grad.addColorStop(0.12, `rgba(178,34,52,${th.alpha * 0.5})`);
          grad.addColorStop(0.40, `rgba(178,34,52,${th.alpha})`);
          grad.addColorStop(0.72, `rgba(178,34,52,${th.alpha * 0.55})`);
          grad.addColorStop(1,    `rgba(178,34,52,0)`);
        } else {
          grad.addColorStop(0,    `rgba(178,34,52,0)`);
          grad.addColorStop(0.28, `rgba(178,34,52,${th.alpha * 0.55})`);
          grad.addColorStop(0.60, `rgba(178,34,52,${th.alpha})`);
          grad.addColorStop(0.88, `rgba(178,34,52,${th.alpha * 0.5})`);
          grad.addColorStop(1,    `rgba(178,34,52,0)`);
        }

        ctx.save();
        ctx.shadowColor = `rgba(178,34,52,${th.alpha * 0.35})`;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.moveTo(x0, y);
        ctx.bezierCurveTo(x1, y + w1, x2, y + w2, x3, y + w1 * 0.15);
        ctx.strokeStyle = grad;
        ctx.lineWidth = th.lineWidth;
        ctx.lineCap = "round";
        ctx.stroke();
        ctx.restore();
      }

      t += 0.011;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
