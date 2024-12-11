import styled from "styled-components";
import useWindowWidth from "../../hooks/useWindowWidth";
import Title from "../../ui/Title";

import { useSearchParams } from "react-router-dom";
import TechnologySelectedImg from "./TechnologySelectedImg";
import TechnologySelectedInfo from "./TechnologySelectedInfo";
import TechnologyNavigation from "./TechnologyNavigation";

function TechnologyLanding() {
  const StyledTitle = styled.div`
    padding: 0 var(--space-1200);

    @media only screen and (max-width: 768px) {
      padding: 0 var(--space-800);
    }

    @media only screen and (max-width: 400px) {
      padding: 0;
    }
  `;

  const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    @media only screen and (min-width: 1500px) {
      justify-content: space-around;
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      gap: 2rem;
    }
  `;

  const StyledTechAndNav = styled.div`
    display: flex;
    align-items: center;

    gap: 2rem;

    @media only screen and (max-width: 1500px) {
      margin-left: auto;
    }

    @media only screen and (max-width: 768px) {
      order: 1;
      flex-direction: column;
      margin-left: 0;
      p {
        max-width: 450px;
      }
    }

    @media only screen and (max-width: 450px) {
      padding-top: var(--space-400);
      order: 1;
      flex-direction: column;
      margin-left: 0;
      flex-grow: 1;
      gap: 3rem;
      p {
        max-width: 300px;
      }
    }
  `;

  const windowWidth = useWindowWidth();
  const size =
    windowWidth <= 450 ? "small" : windowWidth <= 768 ? "medium" : "big";

  const [searchParams] = useSearchParams();

  const isTech = searchParams.get("tech") || "A";

  return (
    <>
      <StyledTitle>
        <Title number="03" title="space launch 101" size={size} />
      </StyledTitle>

      <StyledContainer>
        <StyledTechAndNav>
          <TechnologyNavigation />
          <TechnologySelectedInfo size={size} isTech={isTech} />
        </StyledTechAndNav>

        <TechnologySelectedImg isTech={isTech} size={size} />
      </StyledContainer>
    </>
  );
}

export default TechnologyLanding;
