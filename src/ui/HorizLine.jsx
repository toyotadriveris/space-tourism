import styled from "styled-components";

const Line = styled.div`
  position: relative;
  z-index: 1;
  left: 2%;
  width: 45%;
  height: 1px;
  background-color: hsl(from var(--color-blue-300) h s l / 0.2);
  /* &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 5px;
    top: 0;
    background-color: red;
  } */
`;

function HorizLine() {
  return <Line></Line>;
}

export default HorizLine;
