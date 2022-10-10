import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { dolar } from "./Main";
import Loader from "./Loader";

const HomeContainer = styled.div`
  width: 70%;
  height: 80vh;
  margin: auto;
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.35);
  border-radius: 15px;
  box-shadow: 10px 10px 14px 0px rgba(0, 0, 0, 0.75);
  @media (max-width: 768px) {
    width: 90%;
  } ;
`;

const H3 = styled.h3`
  font-size: 2rem;
  font-weight: 900;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  text-align: right;
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
    margin-top: 0.1rem;
    margin-bottom: 0.4rem;
  } ;
`;

console.log(dolar);
const Home = () => {
  const [loading, setLoading] = useState(true);

  const dolarHoy = useSelector((state) => state.dolar.dolares);

  const loadPage = () => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  loadPage();
  if (loading) {
    return (
      <HomeContainer>
        <Loader />
      </HomeContainer>
    );
  }

  return (
    <HomeContainer>
      {dolarHoy.map((item) => (
        <>
          <H3>Dolar Oficial: $ {item[0].casa.venta}</H3>
          <H3>Dolar Blue: $ {item[1].casa.venta}</H3>
          <H3>Contado con Liqui: $ {item[3].casa.venta}</H3>
        </>
      ))}
    </HomeContainer>
  );
};

export default Home;
