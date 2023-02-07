import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  width: 100vw;
  height: 100vh;
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
const Btn = styled.button`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.btnColor};
  &:active {
    background-color: ${(props) => props.theme.bgColor};
  }
`;

function App() {
  return (
    <div>
      <Container>
        <H1>살려주세요 제발ㅋㅋ</H1>
        <Btn>살려주기</Btn>
      </Container>
    </div>
  );
}

export default App;
