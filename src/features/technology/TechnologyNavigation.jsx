import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledTechnologyNavigation = styled.div`
  --size-: 80px;
  ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    @media only screen and (max-width: 768px) {
      order: 1;
      flex-direction: row;
      margin-left: 0;
    }

    li {
      width: var(--size-);
      height: var(--size-);
      border-radius: 50%;
      border: 1px solid #858585;
      display: grid;
      place-items: center;
      transition: all 0.3s;
      span {
        font-size: 32px;
        color: white;
        transition: all 0.3s;
      }

      &.active {
        background-color: white;
        border: 1px solid white;
        transition: all 0.3s;
        span {
          color: var(--color-blue-900);
          transition: all 0.3s;
        }
      }

      &:hover {
        border: 1px solid white;
        transition: all 0.3s;
      }
    }
  }
  @media only screen and (max-width: 1070px) {
    padding-left: 20px;
  }

  @media only screen and (max-width: 768px) {
    padding-left: 0px;
    --size-: 56px;
    ul {
      li {
        span {
          font-size: 24px;
        }
      }
    }
  }

  @media only screen and (max-width: 450px) {
    --size-: 40px;
    ul {
      li {
        span {
          font-size: 18px;
        }
      }
    }
  }
`;

function TechnologyNavigation() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(tech) {
    searchParams.set("tech", tech);
    setSearchParams(searchParams);
  }
  const isTech = searchParams.get("tech") || "A";
  return (
    <StyledTechnologyNavigation>
      <ul>
        <li
          onClick={() => handleClick("A")}
          className={`${isTech === "A" ? "active" : ""}`}
        >
          <span>1</span>
        </li>
        <li
          onClick={() => handleClick("B")}
          className={`${isTech === "B" ? "active" : ""}`}
        >
          <span>2</span>
        </li>
        <li
          onClick={() => handleClick("C")}
          className={`${isTech === "C" ? "active" : ""}`}
        >
          <span>3</span>
        </li>
      </ul>
    </StyledTechnologyNavigation>
  );
}

export default TechnologyNavigation;
