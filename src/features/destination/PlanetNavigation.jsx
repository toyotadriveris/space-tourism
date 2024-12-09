import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledMenu = styled.div`
  ul {
    display: flex;
    align-items: center;
    gap: 4rem;

    li {
      position: relative;
      font-family: "Barlow Condensed";
      font-size: 18px;
      letter-spacing: 2px;
      text-transform: uppercase;
      cursor: pointer;
      &:before {
        content: "";
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #ffffff;
        bottom: -14px;
        transition: all 0.3s;
      }
      &.active {
        &:before {
          opacity: 1;
          transition: all 0.3s;
        }
      }

      &:not(.active):hover {
        &:before {
          opacity: 0.5;
          transition: all 0.3s;
        }
      }
    }

    @media only screen and (max-width: 768px) {
      justify-content: center;
      gap: 3rem;
    }

    /* @media only screen and (max-width: 450px) {
    } */
  }
`;

function PlanetNavigation() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(el) {
    searchParams.set("planet", el);
    setSearchParams(searchParams);
  }

  const isPlanet = searchParams.get("planet") || "moon";

  return (
    <StyledMenu>
      <ul>
        <li
          className={`${isPlanet === "moon" ? "active" : ""}`}
          onClick={() => handleClick("moon")}
        >
          moon
        </li>

        <li
          className={`${isPlanet === "mars" ? "active" : ""}`}
          onClick={() => handleClick("mars")}
        >
          mars
        </li>

        <li
          className={`${isPlanet === "europa" ? "active" : ""}`}
          onClick={() => handleClick("europa")}
        >
          europa
        </li>

        <li
          className={`${isPlanet === "titan" ? "active" : ""}`}
          onClick={() => handleClick("titan")}
        >
          titan
        </li>
      </ul>
    </StyledMenu>
  );
}

export default PlanetNavigation;
