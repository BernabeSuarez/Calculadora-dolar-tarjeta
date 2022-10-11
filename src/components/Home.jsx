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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.35);
  border-radius: 15px;
  box-shadow: 10px 10px 14px 0px rgba(0, 0, 0, 0.75);
  @media (max-width: 768px) {
    width: 90%;
  } ;
`;

const Num = styled.h3`
  font-family: "Inter";
  color: white;
  font-size: 2rem;
  font-weight: 900;
  margin-top: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    //text-align: center;
    margin-top: 0.1rem;
    margin-bottom: 0.4rem;
  } ;
`;

const H3 = styled.h3`
  font-size: 2rem;
  font-weight: 900;
  margin-top: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
    margin-top: 0.1rem;
    margin-bottom: 0.4rem;
  } ;
`;

const ImgHome = styled.div`
  width: 50%;
  height: 60vh;
  background-color: white;
  background-image: url("img/HomeBack.jpg");
  background-size: cover;
  margin: auto 3% auto auto;
  border-radius: 20px 0 20px 0;
  box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.55);
  @media (max-width: 768px) {
    display: none;
  }
`;

const DataContainer = styled.div`
  width: 60%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto;
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
          <DataContainer>
            <H3>Dolar Oficial:</H3>
            <Num>$ {item[0].casa.venta}</Num>

            <H3>Dolar Blue: </H3>
            <Num>$ {item[1].casa.venta}</Num>

            <H3>Contado con Liqui:</H3>
            <Num>$ {item[3].casa.venta}</Num>
          </DataContainer>

          <ImgHome />
        </>
      ))}
    </HomeContainer>
  );
};

export default Home;
