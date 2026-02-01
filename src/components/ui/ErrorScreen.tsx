import styled from "styled-components";

interface ErrorScreenProps {
  message: string;
}

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: var(--var-color-text-light);
`;

const StyledHeading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

const StyledMessage = styled.p`
  font-size: 1rem;
  margin: 0;
`;

export const ErrorScreen = ({ message }: ErrorScreenProps) => {
  return (
    <StyledDiv>
      <StyledHeading>Error</StyledHeading>
      <StyledMessage>{message}</StyledMessage>
    </StyledDiv>
  );
};
