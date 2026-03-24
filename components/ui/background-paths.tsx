"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
  const count = 24;
  const paths = Array.from({ length: count }, (_, i) => {
    const t = i / (count - 1); // 0 → 1
    const dir = position > 0 ? 1 : -1;

    // Start and end points spread across the full height
    const yStart = -40 + t * 396;
    const yEnd   = yStart + dir * (30 + i * 4);

    // Control points create a single gentle S-arc with no kinks
    const cp1x = 160 + i * 6;
    const cp1y = yStart - dir * (20 + i * 3);
    const cp2x = 530 - i * 4;
    const cp2y = yEnd   + dir * (20 + i * 3);

    return {
      id: i,
      d: `M -80 ${yStart} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} 780 ${yEnd}`,
      width: 0.4 + i * 0.04,
      opacity: 0.04 + i * 0.016,
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 700 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="#B22234"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [path.opacity * 0.5, path.opacity, path.opacity * 0.5],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 18 + path.id * 0.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              opacity: { duration: 6 + path.id * 0.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}
