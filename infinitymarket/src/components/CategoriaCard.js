import React from 'react';
import './estilos/CategoriaCard.module.css';

const CategoriaCard = ({ nome, imagem, fundo, link, className }) => (
  <div
    className={`card-categoria ${className}`}
    style={{ backgroundImage: `url(${fundo})` }}
    onClick={() => window.location.href = link}
  >
    <img src={imagem} alt={nome} className="categoria-img" />
    <p className="categoria-nome">{nome}</p>
    <button className="botao-acessar">Acessar</button>
  </div>
);

export default CategoriaCard;