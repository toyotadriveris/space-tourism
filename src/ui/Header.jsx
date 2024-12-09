import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";
import HorizLine from "./HorizLine";
import useWindowWidth from "../hooks/useWindowWidth";
import MobileNavbar from "./MobileNavbar";
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  overflow: hidden;
  padding: var(--space-300) 0;
  padding-left: var(--space-400);
  @media only screen and (max-width: 768px) {
    padding: 0;
  }

  @media only screen and (max-width: 605px) {
    padding: var(--space-200);
  }
`;

function Header() {
  const windowWidth = useWindowWidth();

  return (
    <StyledHeader>
      <Logo />
      {windowWidth > 768 && <HorizLine />}
      {windowWidth > 605 ? <Navbar /> : <MobileNavbar />}
    </StyledHeader>
  );
}

export default Header;
