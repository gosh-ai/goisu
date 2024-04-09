import React, { useRef, useEffect } from "react";

interface SlateStoneProps {
  size: number;
  radius: number;
  simple?: boolean;
}

export const SlateStone = ({
  size,
  radius,
  simple = true,
}: SlateStoneProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (!context) return;
      if (simple) {
        const center = size / 2;
        const x = center;
        const y = center;
        const colorIn = "#666";
        const colorOut = "#000";
        const radiusIn = 0.01;
        const radiusOut = 0.75;
        const d = radius / 5;
        const radgrad = context.createRadialGradient(
          x - 2 * d,
          y - 2 * d,
          radiusIn * radius,
          x - d,
          y - d,
          radiusOut * radius,
        );
        radgrad.addColorStop(0, colorIn);
        radgrad.addColorStop(1, colorOut);

        context.beginPath();
        context.fillStyle = radgrad;
        context.arc(x, y, radius * 0.95, 0, 2 * Math.PI, true);
        context.fill();
      }
    }
  });
  return <canvas ref={canvasRef} />;
};
