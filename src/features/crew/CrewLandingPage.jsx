import styled from "styled-components";
import useWindowWidth from "../../hooks/useWindowWidth";
import Title from "../../ui/Title";

import DouglasHurleyInfo from "./DouglasHurley/DouglasHurleyInfo";
import { useSearchParams } from "react-router-dom";
import CrewNavigation from "./CrewNavigation";
import CrewSelectedImg from "./CrewSelectedImg";
import CrewSelectedInfo from "./CrewSelectedInfo";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`;

const StyledCrew = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  gap: 10%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    justify-content: baseline;
    gap: 5%;
    padding-top: var(--space-800);
  }

  @media only screen and (max-width: 450px) {
    padding-top: 0;
  }
`;

const StyledCrewInfoAndNav = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  @media only screen and (max-width: 768px) {
    gap: 3rem;
    height: auto;
  }
  @media only screen and (max-width: 450px) {
    gap: 6rem;
    height: auto;
  }
`;

function CrewLandingPage() {
  const windowWidth = useWindowWidth();

  const [searchParams] = useSearchParams();

  const isRole = searchParams.get("crew") || "commander";

  const size =
    windowWidth <= 450 ? "small" : windowWidth <= 768 ? "medium" : "big";

  return (
    <>
      <Title number="02" title="Meet your crew" size={size} />

      <StyledContainer>
        <StyledCrew>
          <StyledCrewInfoAndNav>
            <CrewSelectedInfo size={`${size}Crew`} isRole={isRole} />
            <CrewNavigation />
          </StyledCrewInfoAndNav>

          <CrewSelectedImg isRole={isRole} />
        </StyledCrew>
      </StyledContainer>
    </>
  );
}

export default CrewLandingPage;
