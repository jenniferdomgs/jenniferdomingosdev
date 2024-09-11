import React from 'react';


function Header() {
  return (
    <header>
      <nav className="container-nav">
        <img id="logo" src="" alt="Logo"/>
        <div className="menu">
          <a href="#curiosidades">Curiosidades</a>
          <a href="#causo">Causo</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#escolar">Histórico Escolar</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>
      <div className="item-nav">
        <div id="nb">
          <h1>Jennifer Domingos</h1>
          <a href="#sobre"><button id="buttonH">Sobre</button></a>
        </div>
        <div>
          <img className="perfil" src="" alt="Perfil"/>
        </div>
      </div>
    </header>
  );
}

export default Header;
