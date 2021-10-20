import React from 'react';
import styled from 'styled-components';
import Header from './Components/Header';
import Saldo from './Components/Saldo';
import Transacao from './Components/Transacao';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
  font-family: 'Lato', sans-serif;
  margin: 0;
`;

function App() {
  return (
    <Container>
      <Header />
      <Saldo />
      <Transacao />
    </Container>
  );
}

export default App;
