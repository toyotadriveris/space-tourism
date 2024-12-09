import Img from "../../../ui/Img";

import marsImg from "../../../assets/destination/image-mars.png";
import styled from "styled-components";

const StyledContainer = styled.div`
  min-width: 300px;
  width: 500px;
  @media only screen and (max-width: 768px) {
    min-width: 0px;
    width: 200px;
  }
`;

function Mars() {
  return (
    <StyledContainer>
      <Img src={marsImg} alt="Mars" />
    </StyledContainer>
  );
}

export default Mars;
