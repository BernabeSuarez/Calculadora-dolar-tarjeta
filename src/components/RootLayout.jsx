import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom"; //renderiza las paginas del react-router V 6.4.2
import Header from "./Header";
import Menu from "./Menu";

const RootContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const RootLayout = () => {
  return (
    <RootContainer id="detail">
      <Header />
      <Menu />
      <Outlet />
    </RootContainer>
  );
};

export default RootLayout;

//aca se renderizan los componentes
