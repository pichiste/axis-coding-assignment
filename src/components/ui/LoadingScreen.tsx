import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid var(--var-color-brand-02);
  border-top: 3px solid var(--var-color-brand-01);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--var-color-text);
`;

export const LoadingScreen = () => {
  return (
    <StyledDiv>
      <Spinner />
    </StyledDiv>
  );
};
