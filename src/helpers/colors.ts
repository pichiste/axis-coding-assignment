/**
 * Helper methods for generating colors for user cards
 */

import seedrandom from "seedrandom";
import { RANDOM_COLOR_SEED } from "./globals";

// Get colors using seeded randomn number generator
export function getColors(count: number): string[] {
  const rand = seedrandom(RANDOM_COLOR_SEED);

  const colors = new Array<string>(count);
  for (let i = 0; i < count; i++) {
    const h = rand();
    const s = 0.35;
    const l = 0.6;
    colors[i] = `hsla(${h * 360}, ${s * 100}%, ${l * 100}%, 1.0)`;
  }
  return colors;
}
