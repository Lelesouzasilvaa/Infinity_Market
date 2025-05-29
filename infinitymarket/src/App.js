import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Explorar from './pages/Explorar';
import Categoria from './pages/Categoria';
import Anunciar from './pages/Anunciar';
import Perfil from './pages/Perfil';
import Rodape from './components/Rodape';
import Curtidos from './pages/Curtidos';
import MeusAnuncios from './pages/MeusAnuncios';

// import Comunidade from './pages/Comunidade';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
   return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/Explorar" element={<Explorar />} />
        <Route path="/anuncios" element={<Anunciar />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/categoria" element={<Categoria />} />
        <Route path="/curtidos" element={<Curtidos />} />
        <Route path="/meusAnuncios" element={<MeusAnuncios />} />
      </Routes>
      <Rodape />
    </Router>
  );
}

export default App;
