import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Explorar from './pages/Explorar';
import Categoria from './pages/Categoria';
import Anunciar from './pages/Anunciar';
import Perfil from './pages/Perfil';
import Rodape from './components/Rodape'
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
        {/* <Route path="/comunidade" element={<Comunidade />} /> */}
      </Routes>
      <Rodape />
    </Router>
  );
}

export default App;
