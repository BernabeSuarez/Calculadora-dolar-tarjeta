import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsCurrencyDollar, BsMenuButtonWide } from "react-icons/bs";
import { useDispatch } from "react-redux";
import * as menuActions from "../redux/menu/menuActions";

const HeaderContainer = styled.div`
  width: 100%;
  height: 10vh;
  padding: 1%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  & a {
    text-decoration: none;
    color: white;
    font-size: 1.3rem;
  }
`;

const Icon = styled(BsCurrencyDollar)`
  color: white;
  width: 35px;
  height: 35px;
`;
const Menu = styled(BsMenuButtonWide)`
  color: white;
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

const Header = () => {
  const dispatch = useDispatch();
  const handdlerToggle = () => {
    dispatch(menuActions.toggleMenuHidden());
  };

  return (
    <>
      <HeaderContainer>
        <Menu onClick={handdlerToggle} />
        <Link to={`/`}>
          <h2>Dolar Hoy</h2>
        </Link>

        <Icon />
      </HeaderContainer>
    </>
  );
};

export default Header;
