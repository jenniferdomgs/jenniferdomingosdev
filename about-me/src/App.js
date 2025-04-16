import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Main from './components/main';

import Projeto1 from './pages/projeto1';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projeto1" element={<Projeto1 />} />
      </Routes>
    </Router>
  );
}

export default App;