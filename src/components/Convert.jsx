import React, { useState } from "react";
import { dolar } from "./Main";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ConvertContainer = styled.div`
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
const H1 = styled.h1`
  margin-bottom: 3rem;
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 0.4rem;
  } ;
`;
const H2 = styled.h2`
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
  } ;
`;
const H3 = styled.h3`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
    margin-top: 0.1rem;
    margin-bottom: 0.4rem;
  } ;
`;

const Input = styled.input`
  width: 60%;
  height: 2rem;
  padding-left: 1%;
  font-size: 1.8rem;
  //margin-right: 2rem;
  border: none;
  border-bottom: 1px solid gray;
  border-radius: 10px;
  outline: none;
  @media (max-width: 768px) {
    width: 90%;
    margin-right: 0;
    margin-left: 3%;
    font-size: 1.3rem;
  }
`;
const Button = styled.button`
  width: 10rem;
  height: 2rem;
  background-color: #206a83;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: #fafafa;
  text-transform: uppercase;
  &:hover {
    background-color: #272083;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;

const ButtonContainer = styled.div`
  width: 90%;
  display: flex;
  margin-bottom: 5%;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Convert = () => {
  const dolarHoy = useSelector((state) => state.dolar.dolares[0][0].casa.venta);
  let dolarOficial = dolarHoy;
  dolarOficial = dolarOficial.replace(/,/, ".");

  const [calc, setCalc] = useState("");
  const [convert, setConvert] = useState(0);
  const [moneda, setMoneda] = useState(true);

  const aPesos = calc * dolarOficial;
  const aDolar = calc / dolarOficial;

  const convertirUsd = () => {
    setConvert(aPesos);
  };
  const convertirArs = () => {
    setConvert(aDolar);
  };

  const monedaUsd = () => {
    setMoneda(true);
    setConvert(0);
    setCalc("");
  };

  const monedaArs = () => {
    setMoneda(false);
    setConvert(0);
    setCalc("");
  };

  return (
    <ConvertContainer>
      <ButtonContainer>
        <Button onClick={monedaUsd}>USD {">"} ARS</Button>
        <Button onClick={monedaArs}>ARS {">"} USD</Button>
      </ButtonContainer>

      {moneda ? (
        <>
          <Input
            placeholder="USD"
            onChange={(e) => setCalc(e.target.value)}
            value={calc}
          />
          <H2>Pesos: {convert.toFixed(2)}</H2>
          <Button onClick={convertirUsd}>Convertir</Button>
        </>
      ) : (
        <>
          <Input
            placeholder="ARS"
            onChange={(e) => setCalc(e.target.value)}
            value={calc}
          />
          <H2>Dolares: {convert.toFixed(2)}</H2>
          <Button onClick={convertirArs}>Convertir</Button>
        </>
      )}
    </ConvertContainer>
  );
};

export default Convert;
