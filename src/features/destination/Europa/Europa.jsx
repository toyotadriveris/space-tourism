import Img from "../../../ui/Img";

import EuropaImg from "../../../assets/destination/image-europa.png";
import styled from "styled-components";

const StyledContainer = styled.div`
  min-width: 300px;
  width: 500px;
  @media only screen and (max-width: 768px) {
    min-width: 0px;
    width: 200px;
  }
`;

function Europa() {
  return (
    <StyledContainer>
      <Img src={EuropaImg} alt="Europa" />
    </StyledContainer>
  );
}

export default Europa;
