import React, { useEffect } from "react";
import { drawLightReflexion } from "./stoneUtils";
import { useCanvasAndContext } from "../utils";

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
  const { canvasRef, context } = useCanvasAndContext();

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
