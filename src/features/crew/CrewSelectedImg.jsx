import styled from "styled-components";

import Img from "../../ui/Img";
import douglasImg from "../../assets/crew/image-douglas-hurley.png";

import markImg from "../../assets/crew/image-mark-shuttleworth.png";

import victorImg from "../../assets/crew/image-victor-glover.png";

import anoushehImg from "../../assets/crew/image-anousheh-ansari.png";

const StyledContainer = styled.div`
  min-width: 350px;
  max-width: 450px;
  position: relative;

  &:before {
    content: "";
    height: 100%;
    width: 100%;
    z-index: 1;
    bottom: 0;
    position: absolute;
    background: linear-gradient(0deg, #0b0e17 0%, rgba(255, 255, 255, 0) 20%);
  }

  img {
    filter: saturate(90%) hue-rotate(-5deg);
  }

  @media only screen and (max-width: 768px) {
    min-width: 240px;
    max-width: 350px;
  }

  @media only screen and (max-width: 450px) {
    min-width: 150px;
    max-width: 250px;
  }
`;

function CrewSelectedImg({ isRole }) {
  return (
    <StyledContainer>
      {isRole === "commander" && (
        <Img
          src={douglasImg}
          alt="Douglas Hurley image, your commander for the mission!"
        />
      )}
      {isRole === "mission-specialist" && (
        <Img
          src={markImg}
          alt="Mark Shuttleworth image, your mission specialist for the mission!"
        />
      )}
      {isRole === "pilot" && (
        <Img
          src={victorImg}
          alt="Victor Glover image, your pilot for the mission!"
        />
      )}
      {isRole === "flight-engineer" && (
        <Img
          src={anoushehImg}
          alt="Anousheh Ansari image, your flight engineer for the mission!"
        />
      )}
    </StyledContainer>
  );
}

export default CrewSelectedImg;
