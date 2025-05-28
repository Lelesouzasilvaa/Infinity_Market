import { useState } from 'react';
import styles from './estilos/Abas.module.css';

function Abas() {
  const [activeTab, setActiveTab] = useState('vender');

  return (
    <div className={styles.container}>
      <div className={styles.buttonsEscolha}>
        <div
          className={`${styles.buttonVender} ${activeTab === 'vender' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('vender')}
        >
          <img src="/images/icons/message.png" alt="Ícone de mensagem" />
          <h2>Quero Vender</h2>
        </div>

        <div
          className={`${styles.buttonSolicitar} ${activeTab === 'solicitar' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('solicitar')}
        >
          <img src="/images/icons/cadeado.svg" alt="Ícone de cadeado" />
          <h2>Quero Solicitar</h2>
        </div>
      </div>

      <div className={styles.tabContents}>
        {activeTab === 'vender' && (
          <div className={styles.content}>
            <h2>Formulário de Venda</h2>
            <form className={styles.form}>
              <div className={styles.labels}>
                <label>Por quanto quer vender? <input type="text" name="produto" /></label>
                <label>Categoria: <input type="number" name="preco" /></label>
                <label>Tags<textarea name="descricao" /></label>
              </div>
              <div className={styles.labels}>
                <label>Quantidade Oferta <input type="text" name="produto" /></label>
                <label>Cidade: <input type="number" name="preco" /></label>
                <label>Endereço<textarea name="descricao" /></label>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'solicitar' && (
          <div className={styles.content}>
            <h2>Formulário de Solicitação</h2>
            <form className={styles.form}>
              <label>Produto desejado: <input type="text" name="produtoDesejado" /></label>
              <label>Quantidade: <input type="number" name="quantidade" /></label>
              <label>Detalhes: <textarea name="detalhes" /></label>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Abas;

