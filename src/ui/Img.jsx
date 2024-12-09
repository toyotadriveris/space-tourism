import styled, { css } from "styled-components";

const fits = {
  cover: css`
    object-fit: cover;
  `,
  fill: css`
    object-fit: fill;
  `,
  contain: css`
    object-fit: contain;
  `,
};

const StyledImg = styled.img`
  height: auto;
  width: 100%;
  overflow: hidden;
  ${(props) => fits[props.fit]}
  cursor: ${(props) => props.onClick && "pointer"};
`;

StyledImg.defaultProps = {
  fit: "cover",
};

function Img({ src, alt, onClick }) {
  return <StyledImg onClick={onClick} src={src} alt={alt} />;
}

export default Img;
