import React, { useState } from 'react';
import Header from './components/header';
import Main from './components/main';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <button className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <Header isOpen={isOpen} />
      <Main />
    </div>
  );
}

export default App;
