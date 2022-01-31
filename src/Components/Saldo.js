import React from 'react';
import { GlobalContext } from './GlobalContext';
import styles from './Saldo.module.css';


function Saldo() {
  const global = React.useContext(GlobalContext)

  return (
    <div className={styles.container}>
      <h2>SALDO ATUAL</h2>
      <h3>R$ {global.saldo}</h3>
      <div className={styles.receita}>
        <div className={styles.content1}>
          <span className={styles.spanReceita}>RECEITAS</span>
          <span className={styles.spanReceita2}>R$</span>
        </div>
        <div className={styles.content2}>
          <span className={styles.spanDespesas}>DESPESAS</span>
          <span className={styles.spanDespesas2}>R$</span>
        </div>
      </div>
    </div>
  )
}

export default Saldo;
