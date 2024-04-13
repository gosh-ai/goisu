import React, { useRef, useEffect, useState } from "react";
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
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const renderContext = canvasRef.current.getContext("2d");
      if (!renderContext) {
        console.error("Failed to get 2D rendering context.");
        return;
      }
      setContext(renderContext);
    }
  }, [canvasRef]);

  useEffect(() => {
    if (context) {
      // clear context
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    }
    if (context && simple) {
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
  }, [context, size, radius, simple]);

  return <canvas ref={canvasRef} />;
};
