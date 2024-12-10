import styled from "styled-components";
import useWindowWidth from "../../hooks/useWindowWidth";
import Title from "../../ui/Title";
import DouglasHurleyImg from "./DouglasHurley/DouglasHurleyImg";
import DouglasHurleyInfo from "./DouglasHurley/DouglasHurleyInfo";

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

  const size =
    windowWidth <= 450 ? "small" : windowWidth <= 768 ? "medium" : "big";
  return (
    <>
      <Title number="02" title="Meet your crew" size={size} />

      <StyledContainer>
        <StyledCrew>
          <StyledCrewInfoAndNav>
            <DouglasHurleyInfo size={`${size}Crew`} />

            <StyledMenu>
              <ul>
                <li className="active"></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </StyledMenu>
          </StyledCrewInfoAndNav>
          <DouglasHurleyImg />
        </StyledCrew>
      </StyledContainer>
    </>
  );
}

export default CrewLandingPage;
