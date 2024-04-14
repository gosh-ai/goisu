export const drawLightReflexion = (
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  colorIn: string,
  colorOut: string,
  radiusIn: number,
  radiusOut: number,
) => {
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
};
