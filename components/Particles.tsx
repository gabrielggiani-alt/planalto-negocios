"use client";

import { useEffect, useState } from "react";

interface Shimmer {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

export default function Particles({ count = 16 }: { count?: number }) {
  const [particles, setParticles] = useState<Shimmer[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        duration: 12 + Math.random() * 16,
        delay: Math.random() * 6,
      }))
    );
  }, [count]);

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="shimmer"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s, 3s`,
            animationDelay: `${p.delay}s, 0s`,
          }}
        />
      ))}
    </>
  );
}
