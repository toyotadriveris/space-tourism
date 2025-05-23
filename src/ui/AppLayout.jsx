import { Outlet } from "react-router";
import Header from "./Header";
import styled from "styled-components";

const StyledMain = styled.main`
  height: 100%;
`;

function AppLayout() {
  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  );
}

export default AppLayout;
