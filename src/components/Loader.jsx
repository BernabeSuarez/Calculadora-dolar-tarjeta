import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    margin: auto;
    width: 200px;
  }
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <img src="img/money-icon.gif" alt="Money Icon" />
    </LoaderContainer>
  );
};

export default Loader;
