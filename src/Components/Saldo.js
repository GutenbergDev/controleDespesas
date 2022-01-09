import React from 'react';
import styled from 'styled-components';
import Transacao from './Transacao';
import { GlobalContext } from './GlobalContext';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const Title2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 0px;
`;

const SpanSaldo = styled.span`
  font-size: 2rem;
  color: #0084C2;
  font-weight: bold;
`;

const DivReceita = styled.div`
  display: flex;
  padding: .9rem;
  margin-top: 1rem;
  background: #FFFDFF;
  box-shadow:  5px 5px 7px #dbdadb,
             -5px -5px 7px #ffffff;
`;

/*Container Div1 Receita*/
const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border-right: 1px solid #ccc;
  text-align: center;
`;

const SpanReceita = styled.span`
  font-size: 1rem;
  color: #232426;
  font-weight: bold;
`;

const SpanReceita2 = styled.span`
  color: #2BB676;
`;

/*Container Div1 Receita*/
const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: center;
`;

const SpanDespesa = styled.span`
  font-size: 1rem;
  color: #232426;
  font-weight: bold;
`;

const SpanDespesa2 = styled.span`
  color: #F21D56;
`;


function Saldo() {
  const global = React.useContext(GlobalContext)

  return (
    <Div>
      <Title2>SALDO ATUAL</Title2>
      <SpanSaldo>R$ {global.saldo}</SpanSaldo>
      <DivReceita>
        <Div1>
          <SpanReceita>RECEITAS</SpanReceita>
          <SpanReceita2>R$</SpanReceita2>
        </Div1>
        <Div2>
          <SpanDespesa>DESPESAS</SpanDespesa>
          <SpanDespesa2>R$</SpanDespesa2>
        </Div2>
      </DivReceita>
    </Div>
  )
}

export default Saldo;
