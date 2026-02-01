/**
 * Component for the user carousel in the 3D scene
 */

import type { User } from "../../helpers/api";
import { getCircleTransforms, getRadius } from "../../helpers/math";
import { getColors } from "../../helpers/colors";
import { Card } from "./Card";
import { CARD_SIZE, CARD_SPACING } from "../../helpers/globals";

interface CarouselProps {
  data: User[];
}

export function Carousel({ data }: CarouselProps) {
  const radius = getRadius(CARD_SIZE.width + CARD_SPACING, data.length);
  const transforms = getCircleTransforms(data.length, radius);
  const colors = getColors(data.length);

  return (
    <>
      {data.map((user, index) => (
        <Card
          user={user}
          position={transforms[index].position}
          rotation={transforms[index].rotation}
          size={[CARD_SIZE.width, CARD_SIZE.height]}
          color={colors[index]}
          key={index}
        />
      ))}
    </>
  );
}
