import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { IoMdShareAlt } from "react-icons/io";

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
  & h4 {
    margin-top: 15px;
  }

  @media (max-width: 768px) {
    width: 90%;
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

const Input = styled.input`
  width: 60%;
  height: 3rem;
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
  height: 3rem;
  padding: 2%;
  margin: auto;
  background-color: #206a83;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  color: #fafafa;
  text-transform: uppercase;
  &:hover {
    background-color: #272083;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 0.9rem;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5%;
  margin-bottom: 10%;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 25%;
  }
`;

const Arrow = styled(IoMdShareAlt)`
  width: 35px;
  height: 35px;
  color: white;
`;
const Flag = styled.div`
  width: 35px;
  height: 35px;

  & img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`;

const ButtonMain = styled(Button)`
  justify-content: center;
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

  if (calc < 0) {
    alert("Ingrese un Numero Valido 😡");
    setCalc("");
  }

  return (
    <ConvertContainer>
      <h4>Convertidor de Dolar a Pesos - Pesos A Dolar</h4>
      <ButtonContainer>
        <Button onClick={monedaUsd}>
          <Flag>
            <img src="img/Usa.jpg" alt="" />
          </Flag>
          <Arrow />
          <Flag>
            <img src="img/Arg.jpg" alt="" />
          </Flag>
        </Button>
        <Button onClick={monedaArs}>
          <Flag>
            <img src="img/Arg.jpg" alt="" />
          </Flag>
          <Arrow />
          <Flag>
            <img src="img/Usa.jpg" alt="" />
          </Flag>
        </Button>
      </ButtonContainer>

      {moneda ? (
        <>
          <Input
            placeholder="USD"
            onChange={(e) => setCalc(e.target.value)}
            value={calc}
          />
          <H2>Pesos: $ {convert.toFixed(2)}</H2>
          <ButtonMain onClick={convertirUsd}>Convertir</ButtonMain>
        </>
      ) : (
        <>
          <Input
            placeholder="ARS"
            onChange={(e) => setCalc(e.target.value)}
            value={calc}
          />
          <H2>Dolares: $ {convert.toFixed(2)}</H2>
          <ButtonMain onClick={convertirArs}>Convertir</ButtonMain>
        </>
      )}
    </ConvertContainer>
  );
};

export default Convert;
