import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { dolar } from "./Main";
import Loader from "./Loader";
import { GiMoneyStack } from "react-icons/gi";

const HomeContainer = styled.div`
  width: 70%;
  height: 80vh;
  margin: auto;
  padding: 3%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.35);
  border-radius: 15px;
  box-shadow: 10px 10px 14px 0px rgba(0, 0, 0, 0.75);
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0px;
    border-radius: 0 0 20px 20px;
  } ;
`;

const Num = styled.h3`
  font-family: "Inter";
  color: white;
  font-size: 1.4rem;
  font-weight: 900;
  margin-top: 0.2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    text-align: center;
    margin-top: 0.1rem;
    margin-bottom: 0.4rem;
  } ;
`;

const H3 = styled.h3`
  font-size: 1.4rem;
  font-weight: 900;
  margin-top: 0.2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    //text-align: center;
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
const IconDollar = styled(GiMoneyStack)`
  margin-right: 5px;
  color: green;
  width: 25px;
  height: 25px;
`;
const DollarBlue = styled(IconDollar)`
  color: #003c80;
`;

const Blue = styled.div`
  font-size: 1rem;
  font-style: italic;
  font-weight: 900;
  margin-bottom: 0.7rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 0.1rem;
    margin-bottom: 0.4rem;
  } ;
`;
const DataContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  padding: 8%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  //margin: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
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
            <H3>
              <IconDollar /> Dolar Oficial:
            </H3>
            <Num>$ {item[0].casa.venta}</Num>
            <H3>
              <DollarBlue /> Dolar Blue:{" "}
            </H3>
            <Blue>Compra: </Blue>
            <Num>$ {item[1].casa.compra}</Num>
            <Blue>Venta: </Blue>
            <Num>$ {item[1].casa.venta}</Num>
            <H3>
              <IconDollar />
              Contado con Liqui:
            </H3>
            <Num>$ {item[3].casa.venta}</Num>
            <H3>
              <IconDollar />
              Dolar Turista:
            </H3>
            <Num>$ {item[6].casa.venta}</Num>
          </DataContainer>

          <ImgHome />
        </>
      ))}
    </HomeContainer>
  );
};

export default Home;
