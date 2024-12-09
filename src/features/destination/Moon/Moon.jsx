import Img from "../../../ui/Img";

import moonImg from "../../../assets/destination/image-moon.png";
import styled from "styled-components";

const StyledContainer = styled.div`
  min-width: 300px;
  width: 500px;
  @media only screen and (max-width: 768px) {
    min-width: 0px;
    width: 200px;
  }
`;

function Moon() {
  return (
    <StyledContainer>
      <Img src={moonImg} alt="the moon" />
    </StyledContainer>
  );
}

export default Moon;
