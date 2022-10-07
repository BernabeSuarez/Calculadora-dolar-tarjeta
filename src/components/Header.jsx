import React from "react";
import styled from "styled-components";
import { BsCurrencyDollar } from "react-icons/bs";

const HeaderContainer = styled.div`
  width: 100%;
  height: 10vh;
  padding: 1%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled(BsCurrencyDollar)`
  color: white;
  width: 35px;
  height: 35px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h2>Dolar Hoy</h2>
      <Icon />
    </HeaderContainer>
  );
};

export default Header;
