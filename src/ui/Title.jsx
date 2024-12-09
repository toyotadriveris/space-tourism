import styled, { css } from "styled-components";

const sizes = {
  big: css`
    font-size: 28px;
    letter-spacing: 4px;
    span {
      font-weight: bold;
      font-size: 28px;
      letter-spacing: 4.72px;
    }
  `,
  medium: css`
    font-size: 20px;
    letter-spacing: 15%;
    span {
      font-weight: bold;
      font-size: 20px;
      letter-spacing: 15%;
    }
  `,
  small: css`
    text-align: center;
    font-size: 16px;
    letter-spacing: 15%;
    span {
      font-weight: bold;
      font-size: 16px;
      letter-spacing: 15%;
    }
  `,
};

const StyledHeading = styled.h6`
  text-transform: uppercase;
  font-weight: 400;
  font-family: "Barlow Condensed";
  span {
    opacity: 25%;
  }
  ${(props) => sizes[props.className]}

  ${(props) => (props.className === "small" ? "margin-bottom: 50px" : "")}
`;

function Title({ number, title, size }) {
  return (
    <div>
      <StyledHeading className={size}>
        <span>{number}</span> {title}
      </StyledHeading>
    </div>
  );
}

export default Title;
