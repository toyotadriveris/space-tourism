import { useLocation } from "react-router-dom";
import Title from "../../ui/Title";
import Moon from "./Moon";
import PlanetNavigation from "./PlanetNavigation";
import styled from "styled-components";
import TitleAndParagraph from "../../ui/Title&Paragraph";
import LabelAndInfo from "../../ui/Label&Info";
import useWindowWidth from "../../hooks/useWindowWidth";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8%;
  flex-grow: 1;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const PlanetInfoAndNav = styled.div`
  display: flex;
  flex-direction: column;
  height: 65%;
  gap: 2.2rem;
  @media only screen and (max-width: 768px) {
    height: auto;
    width: 80%;
  }
`;

const MissionInfo = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid hsla(from white h s l / 0.25);
  padding-top: 2.5rem;
  gap: 5rem;
  @media only screen and (max-width: 768px) {
    justify-content: space-around;
    gap: 1rem;
  }
  @media only screen and (max-width: 450px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

function LandingPage() {
  const windowWidth = useWindowWidth();
  const location = useLocation();
  const url = location.pathname;

  const size =
    windowWidth <= 450 ? "small" : windowWidth <= 768 ? "medium" : "big";

  console.log(size);

  return (
    <>
      <Title number="01" title="pick you destination" size={size} />

      <StyledContainer>
        <Moon />
        <PlanetInfoAndNav>
          <PlanetNavigation />
          <TitleAndParagraph
            title="MOON"
            para="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
            size={size}
          />
          <MissionInfo>
            <LabelAndInfo label="AVG. Distance" info="384,400 km" />
            <LabelAndInfo label="EST. travel time" info="3 days" />
          </MissionInfo>
        </PlanetInfoAndNav>
      </StyledContainer>
    </>
  );
}

export default LandingPage;
