import React from "react";
import { styled } from "styled-components";

const Header = () => {
  return (
    <div>
      <StContainer>
        <StMainTitle>📚 TodoList 📚</StMainTitle>
      </StContainer>
    </div>
  );
};

const StContainer = styled.div`
  width: 100vw;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StMainTitle = styled.h1`
  font-size: 40px;
  font-family: GmarketSansMedium;
`;
export default Header;
