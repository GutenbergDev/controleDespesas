import React from 'react';
import styled from 'styled-components';

const Div5 = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 2rem;
`;

const SpanTransacoes = styled.h3`
  font-size: .9rem;
  margin-bottom: 0px;
`;

const Divhr = styled.div`
  width: 400px;
  height: 1px;
  background-color: #ccc;
  margin-top: 10px;
`;

function Transacao() {
  return (
    <Div5>
      <SpanTransacoes>TRANSAÇÕES</SpanTransacoes>
      <Divhr></Divhr>
    </Div5>
  )
}

export default Transacao;
