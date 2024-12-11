import styled from "styled-components";
import TechnologyLanding from "./TechnologyLanding";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

function TechnologyLayout() {
  return (
    <StyledContainer>
      <TechnologyLanding />
    </StyledContainer>
  );
}

export default TechnologyLayout;
