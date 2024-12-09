import styled from "styled-components";
import HomeLayout from "../features/home/HomeLayout";
import bg_desk from "../assets/home/background-home-desktop.jpg";
import bg_tablet from "../assets/home/background-home-tablet.jpg";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  overflow-x: hidden;

  /* background */
  height: 100%;
  background-image: url(${bg_desk});
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -131px;
  @media only screen and (max-width: 768px) {
    margin-top: -80px;
    justify-content: center;
    height: 100%;
    background-image: url(${bg_tablet});
  }
  @media only screen and (max-width: 500px) {
    padding: 0;
  }
`;

function Home() {
  return (
    <StyledSection>
      <HomeLayout />
    </StyledSection>
  );
}

export default Home;
