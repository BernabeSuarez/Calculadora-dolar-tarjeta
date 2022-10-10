import React from 'react'
import styled from 'styled-components';
import Header from "./components/Header";
import Menu from './components/Menu';
import { Outlet } from "react-router-dom"; //renderiza las paginas del react-router V 6.4.2





const AppContainer = styled.div`
width:100%;
height:100vh;
display: flex;
flex-direction:column;
`;



function App() {

  return (

    <AppContainer id='detail'>
      <Header />
      <Menu />
      <Outlet />
    </AppContainer>


  );
}

export default App;
