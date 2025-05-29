import React from 'react';
import styles from './estilos/Coment.module.css';


function ComentCard() {
  return (
    <div className={styles.card}>
      <div className={styles.topo}>
        <span className={styles.aspas}>“</span>
        <div className={styles.estrelas}>
          {Array(5).fill().map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
      </div>

      <p className={styles.texto}>
        Elegante e funcional, esta capa para iPad oferece proteção robusta e design sofisticado.
        Com materiais premium e ajustes precisos, é ideal para quem busca estilo e praticidade no dia a dia.
      </p>

      <div className={styles.autor}>
        <div className={styles.foto}></div>
        <div className={styles.info}>
          <p className={styles.nome}>Carlos Roberto</p>
          <p className={styles.cargo}>Vendedor</p>
        </div>
      </div>
    </div>
  );
}

export default ComentCard;
