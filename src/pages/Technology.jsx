import bg_desk from "../assets/technology/background-technology-desktop.jpg";
import bg_tablet from "../assets/technology/background-technology-tablet.jpg";
import bg_mobile from "../assets/technology/background-technology-mobile.jpg";

import styled from "styled-components";

import TechnologyLayout from "../features/technology/TechnologyLayout";

const StyledSection = styled.section`
  padding-top: var(--space-1600);
  /* background */
  height: 100%;

  background-image: url(${bg_desk});
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -131px;

  @media only screen and (max-width: 768px) {
    margin-top: -90px;
    justify-content: center;
    height: 101%;
    background-image: url(${bg_tablet});
  }

  @media only screen and (max-width: 400px) {
    background-image: url(${bg_mobile});
  }
`;

function Technology() {
  return (
    <StyledSection>
      <TechnologyLayout />
    </StyledSection>
  );
}

export default Technology;
