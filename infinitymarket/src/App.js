import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Explorar from './pages/Explorar';
import Categoria from './pages/Categoria';
import Anunciar from './pages/Anunciar';
// import Comunidade from './pages/Comunidade';

function App() {
  const [pagina, setPagina] = useState("explorar");

  const renderizarPagina = () => {
    switch (pagina) {
      case "explorar":
        return <Explorar />;
      // case "colecoes":
      //   return <Colecoes />;
      case "anuncios":
        return <Anunciar />;
      // case "comunidade":
      //   return <Comunidade />;
      // default:
      //   return <Explorar />;
    }
  };

  return (
    <div>
      <NavBar setPagina={setPagina} />
      {renderizarPagina()}
    </div>
  );
}

export default App;
