import React from 'react';
import styles from './estilos/CategoriaCard.module.css';

const CategoriaCard = ({ nome, imagem, fundo, link, className }) => (
  <div
    className={`${styles.cardCategoria} ${className ? styles[className] : ''}`}
    style={{ backgroundImage: `url(${fundo})` }}
    onClick={() => window.location.href = link}
  >
    <img src={imagem} alt={nome} className={styles.categoriaImg} />
    <p className={styles.categoriaNome}>{nome}</p>
    <button className={styles.botaoAcessar}>Acessar</button>
  </div>
);

export default CategoriaCard;
