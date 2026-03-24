"use client";

import { useEffect, useRef } from "react";

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

    // Two groups of diagonal lines at opposite angles — PS XMB style
    // Left group sweeps right (+angle), right group sweeps left (−angle)
    const ANGLE = 22; // degrees from horizontal
    const RAD = (ANGLE * Math.PI) / 180;

    const groups = [
      { angle: RAD,  direction:  1, count: 7, speed: 22, alpha: 0.20, lw: 1.1 },
      { angle: -RAD, direction: -1, count: 6, speed: 16, alpha: 0.16, lw: 0.85 },
    ];

    const draw = () => {
      const W = canvas.clientWidth;
      const H = canvas.clientHeight;
      ctx.clearRect(0, 0, W, H);

      const diag = Math.hypot(W, H);

      for (const g of groups) {
        ctx.save();
        ctx.translate(W / 2, H / 2);
        ctx.rotate(g.angle);

        const spacing = diag / g.count;
        // Continuous scrolling offset — wraps seamlessly
        const scroll = ((t * g.speed * g.direction) % spacing + spacing) % spacing;

        for (let i = -Math.ceil(g.count / 2) - 1; i <= Math.ceil(g.count / 2) + 1; i++) {
          const y = i * spacing + scroll;

          // Along-line gradient: bright in the middle 60%, fade at both ends
          const half = diag * 0.55;
          const grad = ctx.createLinearGradient(-half, 0, half, 0);
          grad.addColorStop(0,    `rgba(178,34,52,0)`);
          grad.addColorStop(0.12, `rgba(178,34,52,${g.alpha * 0.45})`);
          grad.addColorStop(0.38, `rgba(178,34,52,${g.alpha})`);
          grad.addColorStop(0.62, `rgba(178,34,52,${g.alpha})`);
          grad.addColorStop(0.88, `rgba(178,34,52,${g.alpha * 0.45})`);
          grad.addColorStop(1,    `rgba(178,34,52,0)`);

          ctx.save();
          ctx.shadowColor = `rgba(178,34,52,0.12)`;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.moveTo(-half, y);
          ctx.lineTo( half, y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = g.lw;
          ctx.lineCap = "round";
          ctx.stroke();
          ctx.restore();
        }

        ctx.restore();
      }

      t += 0.016;
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
