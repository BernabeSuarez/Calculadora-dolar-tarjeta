import React, { useState } from "react";
import styled from "styled-components";
import { GiMoneyStack, GiBroom } from "react-icons/gi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { useSelector } from "react-redux";

const MainContainer = styled.div`
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
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
  } ;
`;

const InputMoney = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Input = styled.input`
  width: 95%;
  height: 2rem;
  padding-left: 1%;
  font-size: 1.8rem;
  margin-right: 2rem;
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
const IconMoney = styled(GiMoneyStack)`
  margin-left: 3%;
  width: 25px;
  height: 25px;
`;
const IconBroom = styled(GiBroom)`
  margin-left: 3%;
  width: 25px;
  height: 25px;
`;
const IconDollar = styled(HiOutlineCurrencyDollar)`
  display: none;
  color: #f9f9f9;
  width: 15%;
  height: 4rem;
  margin: auto;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const dolar =
  "https://www.dolarsi.com/api/api.php?type=valoresprincipales"; //API del dolar del Dia

const Main = () => {
  const dolarHoy = useSelector((state) => state.dolar.dolares[0][0].casa.venta);
  let dolarOficial = dolarHoy;
  dolarOficial = dolarOficial.replace(/,/, ".");

  const [calc, setCalc] = useState("");
  const [op, setOp] = useState(null);
  const [final, setFinal] = useState(0);
  const [imp, setImp] = useState(0);
  const [gan, setGan] = useState(0);
  const [convert, setConvert] = useState(0);

  const Pesos = calc * parseFloat(dolarOficial);
  const impPais = Pesos * 0.3;
  const PercGan = Pesos * 0.45;
  const Total = parseFloat(Pesos + PercGan + impPais);

  const calcular = () => {
    setOp(calc);
    setConvert(Pesos);
    setImp(impPais);
    setGan(PercGan);
    setFinal(Total);
  };

  const reset = () => {
    setOp(null);
    setCalc("");
  };

  if (calc < 0) {
    alert("Ingrese un Numero Valido");
    setCalc("");
  }

  console.log(calc);
  return (
    <MainContainer>
      <H1>CALCULADOR DOLAR TARJETA</H1>
      <H2>Valor Dolar Oficial: ${dolarOficial}</H2>
      <InputContainer>
        <InputMoney>
          <IconDollar />
          <Input
            placeholder="USD"
            onChange={(e) => setCalc(e.target.value)}
            value={calc}
          />
        </InputMoney>

        <Button onClick={calcular}>
          Calcular <IconMoney />
        </Button>
      </InputContainer>
      {op && (
        <>
          <H3>Valor sin impuestos: $ {convert.toFixed(2)} </H3>
          <H3>Imp. Pais (30%): $ {imp.toFixed(2)} </H3>
          <H3>Perc. Gan. (45%): $ {gan.toFixed(2)} </H3>
          <H3>Total ARS: $ {final.toFixed(2)}</H3>
          <Button onClick={reset}>
            Reset <IconBroom />
          </Button>
        </>
      )}
    </MainContainer>
  );
};

export default Main;
