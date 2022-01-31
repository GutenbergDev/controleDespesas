import React from 'react'
import { GlobalContext } from './GlobalContext';
import styles from './Addtransacao.module.css';


function Addtransacao() {
    const global = React.useContext(GlobalContext);

  function handleSubmit(ev) {
    ev.preventDefault()
    global.setSaldo(global.saldo)
  }

  return (
    <div className={styles.container}>
      <h1>ADICIONAR TRANSAÇÃOo</h1>
      <div className={styles.hr}></div>

      <form onSubmit={handleSubmit}>
        <label>Nomee</label>
        <input 
          placeholder="Nome da transação" 
          type="text"
        />

        <label style={{ marginTop: '2rem' }}>Valor</label>
        <p style={{ margin: '0px', fontSize: '.9rem' }}>(negativo - despesas, positivo - receitas)</p>
        <input 
          placeholder="Valor da transação" 
          type="number" 
          value={global.saldo}
          onChange={e=>global.setSaldo(e.target.value)}
        />
        <div className={styles.button}>
          <button>Adicionar</button>
        </div>
        
      </form>
    </div>
  )
}

export default Addtransacao;
