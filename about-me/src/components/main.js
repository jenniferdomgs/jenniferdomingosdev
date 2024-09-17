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
        <div className='text-sobre'>
          <img className="iconsobre" src={IconSobre} alt="Sobre" />
          <p>Sou uma entusiasta da tecnologia, buscando  resolver conflitos por meio de inovações tecnológicas. Conto com uma  formação em Informática, pelo IFRN (Instituto Federal do Rio Grande do  Norte) e estudos voltados para o desenvolvimento de aplicações web. </p>
        </div>
        <div className='cards'>
          <div><img src={html} alt="html" /></div>
          <div><img src={docker} alt="docker" /></div>
          <div><img src={react} alt="react" /></div>
          <div><img src={python} alt="python" /></div>
          <div><img src={mysql} alt="mysql" /></div>
          <div><img src={postgres} alt="postgres" /></div>
        </div>
      </section>
      <section>
        
      </section>
    </main>
  );
}

export default Main;
