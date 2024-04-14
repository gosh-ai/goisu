import { useRef, useEffect, useState } from "react";

export const useCanvasAndContext = () => {
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

  return { canvasRef, context };
};
