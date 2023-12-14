import React from "react";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <div>
      <Container>
        <Text>© 2023. TODO. All right reserved.</Text>
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #9079a4;
`;

const Text = styled.p`
  font-family: GmarketSansMedium;
`;
export default Footer;
