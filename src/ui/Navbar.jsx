import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  padding: var(--space-400);
  display: flex;
  flex-grow: 1;
  min-width: 600px;
  max-width: 50%;
  justify-content: flex-end;
  background-color: hsl(from white h s l / 0.05);
  backdrop-filter: blur(80px);
  @media only screen and (min-width: 1500px) {
    justify-content: center;
  }
  @media only screen and (max-width: 768px) {
    padding: var(--space-400);
    max-width: auto;
    min-width: fit-content;
  }
`;

const Ul = styled.ul`
  display: flex;
  gap: 2.2rem;
  @media only screen and (max-width: 768px) {
    li:first-child {
      a.active {
        span {
          opacity: 0;
          display: none;
        }
      }
    }
  }
`;

const NavButton = styled(NavLink)`
  font-family: "Barlow Condensed";
  font-weight: 400;
  font-size: var(--para-size-p2);
  letter-spacing: 2px;
  transition: all 0.3s;
  position: relative;
  text-transform: uppercase;
  cursor: pointer;
  &:link,
  &:visited {
    color: white;
    transition: all 0.3s;
  }
  &:before {
    opacity: 0;
    content: "";
    position: absolute;
    bottom: -32px;
    width: 100%;
    height: 2px;
    background-color: white;
    transition: all 0.3s;
  }
  &:hover {
    &:before {
      opacity: 65%;
      transition: all 0.3s;
    }
  }
  &.active {
    &:before {
      opacity: 1;
    }
    transition: all 0.3s;
  }
  span {
    font-size: var(--para-size-p2);

    font-weight: 600;
    margin: 0 var(--space-25);
  }
`;

function Navbar() {
  return (
    <Nav>
      <Ul>
        <li>
          <NavButton to="/home">
            <span>00</span> home
          </NavButton>
        </li>
        <li>
          <NavButton to="/destination">
            <span>01</span> destination
          </NavButton>
        </li>
        <li>
          <NavButton to="/crew">
            <span>02</span> crew
          </NavButton>
        </li>
        <li>
          <NavButton to="/technology">
            <span>03</span> technology
          </NavButton>
        </li>
      </Ul>
    </Nav>
  );
}

export default Navbar;
