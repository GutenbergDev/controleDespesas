import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
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

const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 2rem;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  font-size: .9rem;
  margin-top: 8px;
  outline: none;
  border: 1px solid #ccc;
  padding: 0px;
  padding-left: 10px;
`;

function Addtransacao() {
  return (
    <Div>
      <SpanTransacoes>ADICIONAR TRANSAÇÃO</SpanTransacoes>
      <Divhr></Divhr>

      <DivForm>
        <label>Nome</label>
        <Input placeholder="Nome da transação" type="text" />

        <label style={{ marginTop: '2rem' }}>Valor</label>
        <p style={{ margin: '0px', fontSize: '.9rem' }}>(negativo - despesas, positivo - receitas)</p>
        <Input placeholder="Valor da transação" type="text" />
      </DivForm>
    </Div>
  )
}

export default Addtransacao;
