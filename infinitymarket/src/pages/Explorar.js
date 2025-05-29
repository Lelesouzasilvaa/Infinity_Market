import React, { useRef } from 'react';
import CategoriaCard from '../components/CategoriaCard';
import './Explorar.css';
import categorias from '../pages/api/Categorias';
import SessaoCards from '../components/SessaoCards';
import Rodape from '../components/Rodape';
import NavBar from '../components/NavBar';

const PaginaExplorar = () => {
  const secoesRef = useRef(null);

  function scrollToPosition(to, duration = 1000) {
    const start = window.pageYOffset;
    const change = to - start;
    const startTime = performance.now();

    function animateScroll(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, start + change * ease);

      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  }

  const handleScrollToCards = () => {
    if (secoesRef.current) {
      const yOffset = -80; 
      const to = secoesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      scrollToPosition(to, 1500);
    }
  };

  const cardsExemplo = [
    { titulo: 'Produto 1', descricao: 'Descrição 1' },
    { titulo: 'Produto 2', descricao: 'Descrição 2' },
  ];

  const secoes = [
    'Ferramentas',
    'Utilitários',
    'Eletrônicos',
    'Móveis',
    'Entretenimento',
    'Brinquedos',
  ];

  return (
    <div className="explorar-container">
      <main className="conteudo-principal">
        <div className="categorias-mapa">
          {categorias.map((cat, index) => (
            <CategoriaCard
              key={index}
              nome={cat.nome}
              imagem={cat.imagem}
              fundo={cat.fundo}
              link={cat.link}
              className={`cat${index + 1}`}
            />
          ))}

          <div className="explorar-botao-central" onClick={() => console.log('Botão carrinho clicado')}>
            <img src="/images/icons/logo.png" alt="Carrinho" className="carrinho-img" />
            <button id="button">Explorar</button>
          </div>
        </div>

        <div className="ultimas-publicacoes" onClick={handleScrollToCards} style={{ cursor: 'pointer' }}>
          <h2>Veja as Últimas Publicações</h2>
          <img src="/images/icons/seta.png" alt="Seta para baixo" className="seta-img" />
          
        </div>

        <div ref={secoesRef}>
          {secoes.map((titulo, index) => (
            <SessaoCards
              key={index}
              titulo={titulo}
              cards={cardsExemplo}
              alignRight={index % 2 === 0}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PaginaExplorar;