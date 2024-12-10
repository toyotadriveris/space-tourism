import styled from "styled-components";
import CrewLandingPage from "./CrewLandingPage";

const StyledContainer = styled.div`
  width: calc(100% - 165px);
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    width: calc(100% - 40px);
  }

  @media only screen and (max-width: 400px) {
    width: calc(100% - 24px);
  }
`;

function CrewLayout() {
  return (
    <StyledContainer>
      <CrewLandingPage />
    </StyledContainer>
  );
}

export default CrewLayout;
