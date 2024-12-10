import Img from "../../../ui/Img";
import douglasImg from "../../../assets/crew/image-douglas-hurley.png";
import styled from "styled-components";

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
    min-width: 250px;
    max-width: 400px;
  }

  @media only screen and (max-width: 450px) {
    min-width: 150px;
    max-width: 280px;
  }
`;

function DouglasHurleyImg() {
  return (
    <StyledContainer>
      <Img src={douglasImg} alt="douglas hurley image" />
    </StyledContainer>
  );
}

export default DouglasHurleyImg;
