import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledMenu = styled.div`
  margin-top: auto;
  ul {
    margin-top: 40%;
    display: flex;

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
    margin-top: 0;
    ul {
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

  function handleClick(role) {
    searchParams.set("crew", role);
    setSearchParams(searchParams);
  }

  const isRole = searchParams.get("crew") || "commander";

  return (
    <>
      <StyledMenu>
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
