import React from 'react';
import styled from 'styled-components';
import Addtransacao from './Components/Addtransacao';
import Header from './Components/Header';
import Saldo from './Components/Saldo';
import Transacao from './Components/Transacao';
import {GlobalStorage} from './Components/GlobalContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
  margin: 0;
`;

function App() {
  return (
    <GlobalStorage>
      <Header />
      <Saldo />
      <Transacao />
      <Addtransacao />
    </GlobalStorage>
  );
}

export default App;
