import styled from "styled-components";
import Img from "./Img";
import LogoImg from "../assets/shared/logo.svg";
import { useNavigate } from "react-router-dom";

const StyledDiv = styled.div`
  width: 85px;
  min-width: 105px;
  padding: 0 var(--space-400);
  @media only screen and (max-width: 768px) {
    min-width: 80px;
    padding: 0 var(--space-200);
  }
`;

function Logo() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <StyledDiv>
      <Img onClick={handleClick} src={LogoImg} alt="Logo of the crew" />
    </StyledDiv>
  );
}

export default Logo;
