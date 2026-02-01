/**
 * Helper methods for 3D scene calculations
 */

interface CardTransform {
  position: [number, number, number];
  rotation: [number, number, number];
}

// Get positions around perimiter of a circle
export function getCircleTransforms(
  count: number,
  radius: number,
): CardTransform[] {
  const transforms = new Array<CardTransform>(count);
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * 2 * Math.PI;
    const position: [number, number, number] = [
      Math.cos(angle) * radius,
      0,
      Math.sin(angle) * radius,
    ];
    const rotation: [number, number, number] = [0, -angle + Math.PI / 2, 0];
    transforms[i] = { position, rotation };
  }
  return transforms;
}

// Calculate ideal circle radius based on segment size and count
export function getRadius(segmentWidth: number, count: number): number {
  return segmentWidth / (2 * Math.sin(Math.PI / count));
}
