import React from 'react';
import Cards from './Cards';
import styles from './estilos/SessaoCards.module.css';

const SessaoCards = ({ titulo, cards, alignRight }) => {
  return (
    <div className={styles.sessao}>
      <div className={`${styles.conteudo} ${alignRight ? styles.right : styles.left}`}>
        <div className={styles.header}>
          <h2>{titulo}</h2>
        </div>
        <div className={styles.listaCards}>
          {cards.map((card, index) => (
            <Cards key={index} {...card} />
          ))}
        </div>
      </div>
      <div className={styles.setaLado}>
        <img 
          src="/images/icons/setaLado.png" 
          alt="Seta para o lado" 
          className={styles.setaImg}
          />
        </div>
    </div>
  );
};

export default SessaoCards;