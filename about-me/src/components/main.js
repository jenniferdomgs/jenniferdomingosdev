import React from 'react';
import IconSobre from '../img/icon-sobre.png'
import docker from '../img/docker.png'
import mysql from '../img/mysql.png'
import postgres from '../img/postgresql.png'
import python from '../img/python.png'
import react from '../img/react.png'
import html from '../img/html.png'

function Main() {
  return (
    <main>
      <section id="sobre">
        <div>
          <h2>Sobre Mim</h2>
          <div className='line'></div>
        </div>
        <div>
          <img className="iconsobre" src={IconSobre} alt="Sobre" />
        </div>
        <p>Sou uma entusiasta da tecnologia, buscando  resolver conflitos por meio de inovações tecnológicas. Conto com uma  formação em Informática, pelo IFRN (Instituto Federal do Rio Grande do  Norte) e estudos voltados para o desenvolvimento de aplicações web. </p>
        <div>
          <img className="perf" src={html} alt="html" />
          <img className="perfil-img" src={docker} alt="docker" />
          <img className="perfil-img" src={react} alt="react" />
          <img className="perfil-img" src={python} alt="python" />
          <img className="perfil-img" src={mysql} alt="mysql" />
          <img className="perfil-img" src={postgres} alt="postgres" />
        </div>
      </section>
      <section>
        
      </section>
    </main>
  );
}

export default Main;
