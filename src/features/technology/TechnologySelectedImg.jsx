import styled from "styled-components";
import Img from "../../ui/Img";

import imgTechA from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import imgTechALand from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import imgTechB from "../../assets/technology/image-spaceport-portrait.jpg";
import imgTechBLand from "../../assets/technology/image-spaceport-landscape.jpg";
import imgTechC from "../../assets/technology/image-space-capsule-portrait.jpg";
import imgTechCLand from "../../assets/technology/image-space-capsule-landscape.jpg";

const ImgContainer = styled.div`
  min-width: 400px;
  max-width: 650px;
  margin-left: auto;
  @media only screen and (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
    margin-left: 0;
  }
  @media only screen and (max-width: 450px) {
    margin-bottom: auto;
  }
`;

function TechnologySelectedImg({ isTech, size }) {
  return (
    <>
      <ImgContainer>
        {isTech === "A" && (
          <Img
            src={size === "big" ? imgTechA : imgTechALand}
            alt="rocket launching"
          />
        )}
        {isTech === "B" && (
          <Img
            src={size === "big" ? imgTechB : imgTechBLand}
            alt="rocket launching"
          />
        )}
        {isTech === "C" && (
          <Img
            src={size === "big" ? imgTechC : imgTechCLand}
            alt="rocket launching"
          />
        )}
      </ImgContainer>
    </>
  );
}

export default TechnologySelectedImg;
