import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Main from './components/main';
import { LangProvider } from './LangContext'; 
function App() {
  return (
    <LangProvider> {}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </LangProvider>
  );
}

export default App;