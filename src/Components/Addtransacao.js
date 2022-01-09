import React from 'react'
import styled from 'styled-components';
import { GlobalContext } from './GlobalContext';

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

const DivB = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 2rem;
`;

const Botao = styled.button`
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  background-color: #BA81F2;
  border: 0px;
  color: #fff;
  letter-spacing: 1px;
`;

function Addtransacao() {
    const global = React.useContext(GlobalContext);

  function handleSubmit(ev) {
    ev.preventDefault()
    global.setSaldo(global.saldo)
  }

  return (
    <Div>
      <SpanTransacoes>ADICIONAR TRANSAÇÃOo</SpanTransacoes>
      <Divhr></Divhr>

      <form onSubmit={handleSubmit}>
        <label>Nomee</label>
        <Input 
          placeholder="Nome da transação" 
          type="text"

        />

        <label style={{ marginTop: '2rem' }}>Valor</label>
        <p style={{ margin: '0px', fontSize: '.9rem' }}>(negativo - despesas, positivo - receitas)</p>
        <Input 
          placeholder="Valor da transação" 
          type="number" 
          value={global.saldo}
          onChange={e=>global.setSaldo(e.target.value)}
        />
        <DivB>
          <Botao>Adicionar</Botao>
        </DivB>
        
      </form>
    </Div>
  )
}

export default Addtransacao;
