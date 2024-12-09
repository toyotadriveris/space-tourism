import styled from "styled-components";
import useWindowWidth from "../../hooks/useWindowWidth";

import Title from "../../ui/Title";
import PlanetNavigation from "./PlanetNavigation";
import Planet from "./Planet";
import PlanetInfo from "./PlanetInfo";
import PlanetMissionInfo from "./PlanetMissionInfo";

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

  const size =
    windowWidth <= 450 ? "small" : windowWidth <= 768 ? "medium" : "big";

  return (
    <>
      <Title number="01" title="pick you destination" size={size} />

      <StyledContainer>
        <Planet />
        <PlanetInfoAndNav>
          <PlanetNavigation />
          <PlanetInfo size={size} />
          <MissionInfo>
            <PlanetMissionInfo />
          </MissionInfo>
        </PlanetInfoAndNav>
      </StyledContainer>
    </>
  );
}

export default LandingPage;
