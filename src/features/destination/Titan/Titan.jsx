import Img from "../../../ui/Img";

import TitanImg from "../../../assets/destination/image-titan.png";
import styled from "styled-components";

const StyledContainer = styled.div`
  min-width: 300px;
  width: 500px;
  @media only screen and (max-width: 768px) {
    min-width: 0px;
    width: 200px;
  }
`;

function Titan() {
  return (
    <StyledContainer>
      <Img src={TitanImg} alt="Titan" />
    </StyledContainer>
  );
}

export default Titan;
