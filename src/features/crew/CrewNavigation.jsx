import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledMenu = styled.div`
  margin-top: auto;
  position: relative;

  ul {
    position: absolute;
    display: flex;
    top: 30px;
    align-items: center;
    gap: 1.5rem;
    li {
      opacity: 17.44%;
      background-color: aliceblue;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      cursor: pointer;

      transition: all 0.3s;
      &:hover {
        opacity: 0.5;
        transition: all 0.3s;
      }

      &.active {
        opacity: 1;
        transition: all 0.3s;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    position: static;
    margin-top: 0;
    padding-bottom: 25px;
    ul {
      position: static;
      top: 0;
      margin-top: 0;
      justify-content: center;
      li {
        width: 10px;
        height: 10px;
      }
    }
  }
  @media only screen and (max-width: 450px) {
    position: relative;
    margin-top: 0;
    padding-bottom: 0px;
    ul {
      position: absolute;
      top: -25px;
      left: 50%;
      transform: translate(-50%, -50%);
      margin-top: 0;
      justify-content: center;
      li {
        width: 10px;
        height: 10px;
      }
    }
  }
`;

function CrewNavigation() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [startX, setStartX] = useState(0);

  const ref = useRef(null);

  function handleClick(role) {
    searchParams.set("crew", role);
    setSearchParams(searchParams);
  }

  const isRole = searchParams.get("crew") || "commander";

  // touch events
  const handleTouchStart = useCallback((e) => {
    if (!ref.current.contains(e.target)) {
      return;
    }
    e.preventDefault();
    setStartX(e.touches[0].clientX);
  }, []);

  const onSwipe = useCallback((deltaX) => {
    if (deltaX > 0) {
      console.log("moveRight");
    } else {
      console.log("moveLeft");
    }
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      if (!ref.current.contains(e.target)) {
        return;
      }
      e.preventDefault();

      const endX = e.changedTouches[0].clientX;
      const deltaX = endX - startX;

      onSwipe(deltaX);
    },
    [startX, onSwipe]
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
      <StyledMenu ref={ref}>
        <ul>
          <li
            onClick={() => handleClick("commander")}
            className={`${isRole === "commander" ? "active" : ""}`}
          ></li>
          <li
            onClick={() => handleClick("mission-specialist")}
            className={`${isRole === "mission-specialist" ? "active" : ""}`}
          ></li>
          <li
            onClick={() => handleClick("pilot")}
            className={`${isRole === "pilot" ? "active" : ""}`}
          ></li>
          <li
            onClick={() => handleClick("flight-engineer")}
            className={`${isRole === "flight-engineer" ? "active" : ""}`}
          ></li>
        </ul>
      </StyledMenu>
    </>
  );
}

export default CrewNavigation;
