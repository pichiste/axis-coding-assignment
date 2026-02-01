/**
 * Component for a single user card in the 3D scene
 */

import { Html } from "@react-three/drei";
import styled from "styled-components";
import type { User } from "../../helpers/api";

const defaultDistanceFactor = 10;

interface CardProps {
  user: User;
  position: [number, number, number];
  rotation: [number, number, number];
  size: [number, number];
  color: string;
}

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  user-select: none;
  -webkit-user-select: none;
  background: transparent;
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem;
`;

const StyledName = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

const StyledCompanyName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const StyledDetails = styled.div`
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  opacity: 0.75;
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export function Card({ user, position, rotation, size, color }: CardProps) {
  // Calculat world size -> pixel size
  const factor = 400 / defaultDistanceFactor;
  const widthPx = size[0] * factor;
  const heightPx = size[1] * factor;

  return (
    <group position={position} rotation={rotation}>
      {/* background box */}
      <mesh position={[0, 0, -0.15]}>
        <boxGeometry args={[size[0], size[1], 0.25]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <Html
        center
        transform
        distanceFactor={defaultDistanceFactor}
        occlude="blending"
        style={{
          backgroundColor: color,
          width: `${widthPx}px`,
          height: `${heightPx}px`,
        }}
      >
        <StyledWrapper>
          <StyledSection>
            <StyledName>{user.name}</StyledName>
            <StyledDetails>
              <StyledLink href={`mailto:${user.email}`}>
                {user.email}
              </StyledLink>
              <div>{user.phone}</div>
            </StyledDetails>
            <StyledDetails>
              <div>
                {user.address.street}, {user.address.suite}
              </div>
              <div>
                {user.address.zipcode} {user.address.city}
              </div>
            </StyledDetails>
            <StyledDetails>
              <StyledLink href={`https://${user.website}`} target="_blank">
                {user.website}
              </StyledLink>
            </StyledDetails>
          </StyledSection>
          <StyledSection>
            <StyledCompanyName>{user.company.name}</StyledCompanyName>
            <StyledDetails>
              <div>{user.company.catchPhrase}</div>
            </StyledDetails>
          </StyledSection>
        </StyledWrapper>
      </Html>
    </group>
  );
}
