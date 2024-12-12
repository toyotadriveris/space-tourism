import styled from "styled-components";
import iconHamburger from "../assets/shared/icon-hamburger.svg";
import iconClose from "../assets/shared/icon-close.svg";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useWindowHeight from "../hooks/useWindowHeight";

const StyledButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

const StyledNav = styled.div`
  position: absolute;
  height: 100%;
  width: 60%;
  right: -400px;
  display: none;
  top: 0px;
  z-index: 5;
  background-color: hsl(from var(--color-blue-900) h s l / 0.15);
  backdrop-filter: blur(80px);

  button {
    position: absolute;
    top: 40px;
    right: 40px;
  }

  @media only screen and (max-width: 400px) {
    width: 100%;
  }
`;

const NavButton = styled(NavLink)`
  font-family: "Barlow Condensed";
  font-weight: 400;
  font-size: var(--para-size-p2);
  letter-spacing: 2px;
  transition: all 0.3s;
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
    right: 0;
    width: 2px;
    height: 20px;
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

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  padding-left: var(--space-400);
  padding-top: var(--space-1200);
`;

function MobileNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [height, setHeight] = useState(0);

  const animateAside = useRef();

  const screen = showMenu ? "none" : "block";

  gsap.registerPlugin(useGSAP);

  useEffect(() => {
    const calculateHeight = () => {
      const body = document.body;
      const html = document.documentElement;

      const documentHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      setHeight(documentHeight);
    };

    calculateHeight();

    window.addEventListener("resize", calculateHeight);
    return () => window.removeEventListener("resize", calculateHeight);
  }, [showMenu]);

  const toggleAside = () => {
    console.log(screen);
    const targetPosition = showMenu ? "-400px" : "0px";
    gsap.to(animateAside.current, { display: screen, right: targetPosition });
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <StyledButton
        style={{ position: "absolute", zIndex: 1, right: "34px", top: "35px" }}
        onClick={toggleAside}
      >
        <img src={iconHamburger} alt="open mobile menu button" />
      </StyledButton>
      <>
        <StyledNav style={{ height: `${height}px` }} ref={animateAside}>
          <div>
            <StyledButton onClick={toggleAside}>
              <img src={iconClose} alt="close mobile menu button" />
            </StyledButton>
            <Ul>
              <li>
                <NavButton onClick={toggleAside} to="/home">
                  <span>00</span> home
                </NavButton>
              </li>
              <li>
                <NavButton onClick={toggleAside} to="/destination">
                  <span>01</span> destination
                </NavButton>
              </li>
              <li>
                <NavButton onClick={toggleAside} to="/crew">
                  <span>02</span> crew
                </NavButton>
              </li>
              <li>
                <NavButton onClick={toggleAside} to="/technology">
                  <span>03</span> technology
                </NavButton>
              </li>
            </Ul>
          </div>
        </StyledNav>
      </>
    </nav>
  );
}

export default MobileNavbar;
