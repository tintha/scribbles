import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Title>Scribbles</Title>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 20px;
  background-color: #fffcfc;
  height: 30vh;
  border-bottom: 1px dotted #f0e4e4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Amatic SC", cursive;
  font-size: 4rem;
`;

export default Header;
