import bg_desk from "../assets/crew/background-crew-desktop.jpg";
import bg_tablet from "../assets/crew/background-crew-tablet.jpg";
import bg_mobile from "../assets/crew/background-crew-mobile.jpg";
import styled from "styled-components";
import CrewLayout from "../features/crew/CrewLayout";

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
    height: 100%;
    background-image: url(${bg_tablet});
  }

  @media only screen and (max-width: 400px) {
    background-image: url(${bg_mobile});
  }
`;

function Crew() {
  return (
    <StyledSection>
      <CrewLayout />
    </StyledSection>
  );
}

export default Crew;
