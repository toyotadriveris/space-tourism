import styled, { css } from "styled-components";

const sizes = {
  big: css`
    span {
      font-size: 32px;
    }
    h1 {
      font-size: 96px;
    }
    p {
      max-width: 445px;
    }
  `,

  medium: css`
    h1 {
      font-size: 80px;
    }
    p {
    }
  `,

  small: css`
    h1 {
      font-size: 56px;
    }
    p {
      font-size: 15px;
      max-width: 327px;
    }
  `,
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  h1 {
    font-weight: 400;
  }
  p {
    font-size: 18px;
    line-height: 180%;
    color: var(--color-blue-300);
  }
  ${(props) => sizes[props.className]}
`;

function TitleAndParagraph({ upperTitle, title, para, size }) {
  return (
    <StyledContainer className={size}>
      {upperTitle && <span>{upperTitle}</span>}
      <h1>{title}</h1>
      <p>{para}</p>
    </StyledContainer>
  );
}

export default TitleAndParagraph;
