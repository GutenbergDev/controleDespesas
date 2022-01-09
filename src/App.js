import React from 'react';
import Addtransacao from './Components/Addtransacao';
import Header from './Components/Header';
import Saldo from './Components/Saldo';
import Transacao from './Components/Transacao';
import {GlobalStorage} from './Components/GlobalContext';


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
