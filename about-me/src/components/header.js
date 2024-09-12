import React from 'react';


function Header() {
  return (
    <header>
      <nav className="container-nav">
        <img id="logo" src="" alt="Logo"/>
        <div className="menu">
          <a href="#casa">Home</a>
          <a href="#sobre">Sobre Mim</a>
          <a href="#formacao">Formação</a>
          <a href="#projetos">Projetos Realizados</a>
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
