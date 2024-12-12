import styled from "styled-components";
import ExploreButton from "./ExploreButton";
import MainText from "./MainText";

const StyledContainer = styled.div`
  padding: var(--space-1200);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  height: 100%;
  & > div {
    width: 50%;
  }
  @media only screen and (max-width: 768px) {
    min-width: auto;
    max-width: auto;

    padding-top: var(--space-1600);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    text-align: center;
    & > div {
      width: 100%;
    }
    p {
      padding: 0 10%;
    }
    @media only screen and (max-width: 500px) {
      /* padding-top: var(--space-800); */
      flex-grow: 1;
      justify-content: space-evenly;
      /* max-width: 100% !important; */
      span {
        font-size: 16px;
      }
      h1 {
        font-size: 80px;
      }
      p {
        font-size: 15px;
      }
    }
  }
`;

function HomeLayout() {
  return (
    <StyledContainer>
      <MainText />
      <ExploreButton />
    </StyledContainer>
  );
}

export default HomeLayout;
