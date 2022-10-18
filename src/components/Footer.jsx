import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  height: 6vh;
  background-color: rgba(248, 247, 247, 0.337);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  & a {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    z-index: -1;
  }
`;

const FooterText = styled.h5`
  color: white;
  &:hover {
    color: coral;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <a href="https://wa.me/542364513422">
        <FooterText>Desarrollado en Vedia - Pichon - 2022</FooterText>
      </a>
    </FooterContainer>
  );
};

export default Footer;
