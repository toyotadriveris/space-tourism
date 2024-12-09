import DestinationLayout from "../features/destination/DestinationLayout";
import bg_desk from "../assets/destination/background-destination-desktop.jpg";
import bg_tablet from "../assets/destination/background-destination-tablet.jpg";
import bg_mobile from "../assets/destination/background-destination-mobile.jpg";
import styled from "styled-components";

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

function Destination() {
  return (
    <StyledSection>
      <DestinationLayout />
    </StyledSection>
  );
}

export default Destination;
