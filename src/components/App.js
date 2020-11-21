import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import styled from 'styled-components';
import Routes from "../Routes";
import HeaderNavigation from "../components/HeaderNavigation";

import Contacts from "../components/Contacts";
import IntroCard from "../components/IntroCard";

// import styles
import { breakpoints } from "../styles/GlobalSize";

const Container = styled.div`
  box-sizing: border-box;
  font-size: 62.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1c1d25;
`;

const AppDetail = styled.div`
  display: flex;
  height: auto;

  flex-direction: column;
  align-items: center;

  border: 1px solid white;
  position: relative;

  @media (min-width: ${breakpoints.desktopMin}) {
    max-width: 1200px;
    padding: 0px 20px;
    margin: auto;
  }

  /* @media only screen and (max-width: 790px) {
    flex-direction: column;
    align-items: center;
  } */
`;

const LeftPanel = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(255,255,255);
  width: 250px;
  height: 99vh;
  position: -webkit-sticky;
  position: sticky;
  top: 0vh;

  @media only screen and (max-width: 790px) {
    position: relative;
    max-width: 450px;
    width: 100%;
    justify-content: flex-start;
    height: auto;
    border: 1px solid blue;
  }
`;
// 99vh allows the panel to be taut and not jitter
// when moving from one navigation link to another

const NavHeader = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #525e65;
  position: sticky;
  // Make sure that header nav is above other elements when scrolling
  z-index: 999;
  top: 0vh;

  /* border: 2px solid red; */
`;

const ScrollPanel = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */
  `;
// overflow: auto;

function App() {
  return (
    <BrowserRouter>
      <Container >
        <NavHeader >
          <HeaderNavigation />
        </NavHeader>
        <AppDetail>
          <ScrollPanel>
            <Routes />
          </ScrollPanel>
        </AppDetail >
      </Container >
    </BrowserRouter>
  );
}

export default App;
