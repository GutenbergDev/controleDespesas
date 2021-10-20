import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
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

function Button() {
  return (
    <Div>
      <Botao>Adicionar</Botao>
    </Div>
  )
}

export default Button;
