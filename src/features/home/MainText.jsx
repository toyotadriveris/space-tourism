import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  span {
    text-transform: uppercase;
    font-weight: 400;
    font-family: "Barlow Condensed";
    letter-spacing: 4px;
    font-size: var(--heading-size-h5);
    color: var(--color-blue-300);
  }

  h1 {
    font-size: var(--heading-size-h1);
    font-weight: 400;
    text-transform: uppercase;
  }

  p {
    font-size: var(--para-size-p1);
    color: var(--color-blue-300);
    font-weight: 400;
    line-height: 180%;
  }

  @media only screen and (max-width: 768px) {
    p {
      font-size: var(--para-size-p2);
    }
  }

  @media only screen and (max-width: 500px) {
    gap: 1.5rem;
  }
`;

function MainText() {
  return (
    <StyledDiv>
      <span>so, you want to travel to</span>
      <h1>space</h1>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </StyledDiv>
  );
}

export default MainText;
