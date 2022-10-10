import React from "react";
import styled from "styled-components";

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

const Home = () => {
  return <HomeContainer>Covert</HomeContainer>;
};

export default Home;
