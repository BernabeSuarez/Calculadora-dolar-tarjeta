import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as menuActions from "../redux/menu/menuActions";
import { BsCalculatorFill, BsFillHouseFill } from "react-icons/bs";
import { SiConvertio } from "react-icons/si";

const MenuBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition-property: opacity;
  transition-duration: 0.8s;
  backdrop-filter: blur(5px);
`;
const MenuContainer = styled.div`
  position: fixed;
  width: 25%;
  height: 100vh;
  top: 10vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  z-index: 100;
  transform: ${({ show }) => (show ? `translateX(0)` : `translateX(-100%)`)};
  transition-property: transform;
  transition-duration: 0.8s;
  & a {
    text-decoration: none;
    color: black;
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HomeIcon = styled(BsFillHouseFill)`
  width: 45px;
  height: 45px;
  color: black;
  &:hover {
    transform: scale(1.1);
    color: #383838;
  }
`;

const CalcIcon = styled(BsCalculatorFill)`
  width: 45px;
  height: 45px;
  color: black;
  &:hover {
    transform: scale(1.1);
    color: #383838;
  }
`;
const ConvIcon = styled(SiConvertio)`
  width: 45px;
  height: 45px;
  color: black;
  &:hover {
    transform: scale(1.1);
    color: #383838;
  }
`;

const Menu = () => {
  const hidden = useSelector((state) => state.menu.hidden);

  const dispatch = useDispatch();
  const handdlerToggle = () => {
    dispatch(menuActions.toggleMenuHidden());
  };

  return (
    <MenuBackground show={!hidden}>
      <MenuContainer show={!hidden}>
        <Link to={`/`} onClick={handdlerToggle}>
          <HomeIcon />
          <h2>HOME</h2>
        </Link>
        <Link to={`convertidor`} onClick={handdlerToggle}>
          <ConvIcon />
          <h2>CONVERTIDOR</h2>
        </Link>
        <Link to={`calculadora`} onClick={handdlerToggle}>
          <CalcIcon />
          <h2>CALCULADORA</h2>
        </Link>
      </MenuContainer>
    </MenuBackground>
  );
};

export default Menu;
