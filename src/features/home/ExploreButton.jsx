import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CircleButton = styled.button`
  position: relative;
  display: grid;
  align-content: center;
  background-color: white;
  width: 272px;
  height: 272px;
  outline: none;
  border: none;
  border-radius: 50%;
  color: var(--color-blue-900);

  font-size: var(--heading-size-h4);
  text-transform: uppercase;
  transition: all 0.3s;
  &::before {
    transition: all 0.3s;
    opacity: 0;
    content: "";
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: hsl(from white h s l / 0.3);
  }

  &:hover {
    transition: all 0.3s;
    &::before {
      opacity: 1;
      width: 150%;
      height: 150%;
      transition: all 0.3s;
    }
  }

  @media only screen and (max-width: 500px) {
    width: 164px;
    height: 164px;
    font-size: 18px;
    &:hover {
      &::before {
        width: 200%;
        height: 200%;
      }
    }
  }
`;

function ExploreButton() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/destination");
  }
  return <CircleButton onClick={handleClick}>Explore</CircleButton>;
}

export default ExploreButton;
