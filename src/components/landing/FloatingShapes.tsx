"use client";

import { useEffect, useState } from "react";

interface Shape {
  id: number;
  type: "triangle" | "hexagon" | "diamond" | "circle" | "dot";
  x: number;
  y: number;
  size: number;
  rotation: number;
  delay: number;
  duration: number;
  opacity: number;
}

function generateShapes(count: number): Shape[] {
  const types: Shape["type"][] = [
    "triangle",
    "hexagon",
    "diamond",
    "circle",
    "dot",
  ];
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    type: types[i % types.length],
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 8 + Math.random() * 24,
    rotation: Math.random() * 360,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 15,
    opacity: 0.04 + Math.random() * 0.06,
  }));
}

function ShapeSVG({ type, size }: { type: Shape["type"]; size: number }) {
  const s = size;
  const half = s / 2;

  switch (type) {
    case "triangle":
      return (
        <polygon
          points={`${half},0 ${s},${s} 0,${s}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
        />
      );
    case "hexagon": {
      const r = half;
      const pts = Array.from({ length: 6 }, (_, i) => {
        const angle = (Math.PI / 3) * i - Math.PI / 2;
        return `${half + r * Math.cos(angle)},${half + r * Math.sin(angle)}`;
      }).join(" ");
      return (
        <polygon
          points={pts}
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
        />
      );
    }
    case "diamond":
      return (
        <polygon
          points={`${half},0 ${s},${half} ${half},${s} 0,${half}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
        />
      );
    case "circle":
      return (
        <circle
          cx={half}
          cy={half}
          r={half - 1}
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
        />
      );
    case "dot":
      return <circle cx={half} cy={half} r={3} fill="currentColor" />;
  }
}

export default function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    setShapes(generateShapes(18));
  }, []);

  if (shapes.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute animate-drift"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            animationDelay: `${shape.delay}s`,
            animationDuration: `${shape.duration}s`,
          }}
        >
          <svg
            width={shape.size}
            height={shape.size}
            viewBox={`0 0 ${shape.size} ${shape.size}`}
            className="text-foreground"
            style={{
              opacity: shape.opacity,
              transform: `rotate(${shape.rotation}deg)`,
            }}
          >
            <ShapeSVG type={shape.type} size={shape.size} />
          </svg>
        </div>
      ))}
    </div>
  );
}
