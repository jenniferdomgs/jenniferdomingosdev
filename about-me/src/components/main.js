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
      <section id='formacao'>
        <div>
          <h2>Formação Acadêmica</h2>
          <div className='line'></div>
        </div>
        <div className='text-formacao'>
          <h3>INFORMÁTICA</h3>
          <ul>
            <li>IFRN - Instituto Federal do Rio Grande do Norte</li>
          </ul>
          <p className='ano'>2021 - 2025</p>
          <p>O profissional formado em Informática pelo IFRN desenvolve, testa, implanta e mantém sistemas computacionais, seguindo padrões de programação e linguagens adequadas. Atua em ambientes de desenvolvimento, banco de dados e testes de software, com possibilidade de trabalhar em instituições públicas, privadas e do terceiro setor.</p>
        </div>
      </section>
      <section id='projetos'>
        <div>
          <h2>Projetos</h2>
          <div className='line'></div>
        </div>
      </section>
    </main>
  );
}

export default Main;
