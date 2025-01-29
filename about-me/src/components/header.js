import React, { useState } from 'react';
import backgroundHero from '../img/background-hero.jpg'; 
import perfilImage from '../img/perfil.jpg'; 

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className="header" id='home'>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="perfil-section">
          <img className="perfil-img" src={perfilImage} alt="Perfil" />
          <h2>Jennifer Domingos</h2>
          <div className="social-icons">
            <a href="https://instagram.com/jenniferdmgs" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://github.com/jenniferdomgs" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/jennifer-domingos-061897328" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <ul className="nav-links">
          <li><a href="#home"><i className="fas fa-home"></i> Home</a></li>
          <li><a href="#sobre"><i className="fas fa-user"></i> Sobre Mim</a></li>
          <li><a href="#formacao"><i className="fas fa-graduation-cap"></i> Formação</a></li>
          <li><a href="#projetos"><i className="fas fa-folder-open"></i> Projetos Realizados</a></li>
        </ul>
        <div className="footer-text">
          <p>© Copyright <strong>Portfólio Jennifer</strong></p>
          <p>Desenvolvido por <a href="#sobre">Jennifer</a></p>
        </div>
      </nav>
      <div className="hero_section" style={{
      backgroundImage: `url(${backgroundHero})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      height: '100vh',
      padding: '80px',
      color: '#fff',
      textAlign: 'center'
    }}>
    <h1>Jennifer Domingos</h1> 
    <div className="role">
      <div className="line" style={{
        width: '4px',
        height: '30px',
        backgroundColor: '#ff0077',
        margin: '10px 0'
      }}></div>
      <p>Desenvolvedora Front-end</p> 
      </div>
    </div>

    </header>
  );
}

export default Header;
