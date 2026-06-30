import React, { useState, useEffect } from 'react';
import backgroundHero from '../img/background-hero.jpg';
import perfilImage from '../img/perfil.jpg';
import { useLang } from '../LangContext'; 

function Header() {
  const { lang, toggle, t } = useLang(); 
  const [isOpen, setIsOpen] = useState(false);
  const [displayedName, setDisplayedName] = useState('');
  const [displayedTitle, setDisplayedTitle] = useState('');
  const fullName = 'Jennifer Domingos';

  useEffect(() => {
    setDisplayedTitle('');
    let titleIndex = 0;
    const fullTitle = t.hero.titulo;
    const typeTitle = () => {
      if (titleIndex <= fullTitle.length) {
        setDisplayedTitle(fullTitle.slice(0, titleIndex));
        titleIndex++;
        setTimeout(typeTitle, 80);
      }
    };
    typeTitle();
  }, [lang, t.hero.titulo]); 

  useEffect(() => {
    let nameIndex = 0;
    const typeName = () => {
      if (nameIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, nameIndex));
        nameIndex++;
        setTimeout(typeName, 120);
      }
    };
    typeName();
  }, []);

  const toggleSidebar = () => setIsOpen(prev => !prev);
  const handleLinkClick = () => { if (window.innerWidth <= 768) setIsOpen(false); };

  return (
    <header className="header" id="home">
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <div></div><div></div><div></div>
      </div>

      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>

        <button onClick={toggle} className="lang-toggle" title="Switch language">
          <span className={lang === 'pt' ? 'lang-active' : ''}>PT</span>
          <span className="lang-divider">|</span>
          <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
        </button>

        <div className="perfil-section">
          <img className="perfil-img" src={perfilImage} alt="Perfil" />
          <h2>Jennifer Domingos</h2>
          <div className="social-icons">
            <a href="https://github.com/jenniferdomgs" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="mailto:jenniferdomgs@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa-regular fa-envelope"></i></a>
            <a href="https://linkedin.com/in/jennifer-domingos-061897328" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <ul className="nav-links">
          <li><a href="#home" onClick={handleLinkClick}><i className="fas fa-home"></i> {t.nav.home}</a></li>
          <li><a href="#sobre" onClick={handleLinkClick}><i className="fas fa-user"></i> {t.nav.sobre}</a></li>
          <li><a href="#resume" onClick={handleLinkClick}><i className="fas fa-graduation-cap"></i> {t.nav.formacao}</a></li>
          <li><a href="#projetos" onClick={handleLinkClick}><i className="fas fa-folder-open"></i> {t.nav.projetos}</a></li>
        </ul>

        <div className="footer-text">
          <p>© Copyright <strong>{t.footer.copyright}</strong></p>
          <p>{t.footer.dev} <a href="#sobre">Jennifer</a></p>
        </div>
      </nav>

      <div className="hero_section" style={{ backgroundImage: `url(${backgroundHero})` }}>
        <h1 className="hero-name">{displayedName}<span className="cursor">|</span></h1>
        <div className="role">
          <div className="line"></div>
          <p className="hero-title">{displayedTitle}</p>
        </div>
        <a href="/CV-Jennifer_Domingos-Dev.pdf" download className="btn-cv">
          <i className="fa-solid fa-download"></i> {t.hero.downloadCV}
        </a>
      </div>
    </header>
  );
}

export default Header;