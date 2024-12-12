import styled from "styled-components";
import useWindowWidth from "../../hooks/useWindowWidth";
import Title from "../../ui/Title";

import { useSearchParams } from "react-router-dom";
import CrewNavigation from "./CrewNavigation";
import CrewSelectedImg from "./CrewSelectedImg";
import CrewSelectedInfo from "./CrewSelectedInfo";
import { useCallback, useEffect, useRef, useState } from "react";

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
  justify-content: space-around;
  flex-grow: 1;
  width: 100%;

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
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const ref = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const isRole = searchParams.get("crew") || "commander";

  const size =
    windowWidth <= 450 ? "small" : windowWidth <= 768 ? "medium" : "big";

  // touch events
  const handleTouchStart = useCallback((e) => {
    if (!ref.current.contains(e.target)) {
      return;
    }
    e.preventDefault();
    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
  }, []);

  const onSwipe = useCallback(
    (deltaX) => {
      const allParams = [
        "commander",
        "mission-specialist",
        "pilot",
        "flight-engineer",
      ];

      const curr = isRole;
      const currIndex = allParams.indexOf(curr);
      let targetEl;

      if (deltaX > 0) {
        targetEl = allParams[(currIndex + 1) % allParams.length];
      } else {
        targetEl =
          allParams[(currIndex - 1 + allParams.length) % allParams.length];
      }
      searchParams.set("crew", targetEl);
      setSearchParams(searchParams);
    },
    [isRole, searchParams, setSearchParams]
  );

  const handleTouchEnd = useCallback(
    (e) => {
      if (!ref.current.contains(e.target)) {
        return;
      }
      e.preventDefault();

      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;

      const deltaX = endX - startX;
      const deltaY = endY - startY;

      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        return;
      }

      onSwipe(deltaX);
    },
    [startX, startY, onSwipe]
  );

  useEffect(() => {
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchEnd]);

  return (
    <>
      <Title number="02" title="Meet your crew" size={size} />

      <StyledContainer ref={ref}>
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
