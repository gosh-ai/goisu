import React, { useRef, useEffect } from "react";
import { drawLightReflexion } from "./stoneUtils";

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

        drawLightReflexion(
          context,
          x,
          y,
          radius,
          colorIn,
          colorOut,
          radiusIn,
          radiusOut,
        );
      }
    }
  });
  return <canvas ref={canvasRef} />;
};
