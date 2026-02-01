/**
 * Top-level component for the 3D scene
 */

import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import { getRadius } from "../../helpers/math";
import { useUserData } from "../../hooks/useUserData";
import { Carousel } from "./Carousel";
import {
  CARD_SIZE,
  CAMERA_OFFSET_MIN,
  CAMERA_OFFSET_MAX,
} from "../../helpers/globals";

const controlsDampingFactor = 0.05;

const initialCameraPosition: [number, number, number] = [0, 15, 40];

const shadowConfig = {
  scale: 200,
  blur: 1,
  far: 200,
};

const shadowFloorY = -7;

export function Scene() {
  const { data } = useUserData();

  const carouselRadius = data ? getRadius(CARD_SIZE.width, data.length) : 0;
  const minDistance = carouselRadius + CAMERA_OFFSET_MIN;
  const maxDistance = carouselRadius + CAMERA_OFFSET_MAX;

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: initialCameraPosition }}>
        <OrbitControls
          enableZoom={true}
          minDistance={minDistance}
          maxDistance={maxDistance}
          dampingFactor={controlsDampingFactor}
        />
        <ContactShadows position={[0, shadowFloorY, 0]} {...shadowConfig} />
        {data && <Carousel data={data} />}
      </Canvas>
    </div>
  );
}
