import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Explorar from './pages/Explorar';
import Categoria from './pages/Categoria';
import Anunciar from './pages/Anunciar';
// import Comunidade from './pages/Comunidade';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
   return (
    <Router>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Explorar" element={<Explorar />} />
        <Route path="/Anunciar" element={<Anunciar />} />
        {/* <Route path="/comunidade" element={<Comunidade />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
