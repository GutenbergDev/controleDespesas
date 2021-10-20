import React from 'react';
import styled from 'styled-components';

const Head = styled.div`
  width: 400px;
  height: 60px;
`;

const Title = styled.h1`
  margin: 0px;
  color: #232426;
  text-align: center;
`;

function Header() {
  return (
    <Head>
      <Title>Controle de Despesas</Title>
    </Head>
  )
}

export default Header;
