import React, { useRef } from 'react';
import IconSobre from '../img/icon-sobre.png';
import docker from '../img/docker.png';
import mysql from '../img/mysql.png';
import postgres from '../img/postgresql.png';
import python from '../img/python.png';
import react from '../img/react.png';
import html from '../img/html.png';
import node from '../img/node.js.png';
import git from '../img/git.png';
import logoCisco from '../img/Cisco_academy_logo.png';
import emergencIA from '../img/emergencIA.jpg';
import hackathon from '../img/mjsp.jpg';
import { Link } from 'react-router-dom';

function Main() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 220;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main>
      <section id="sobre">
        <div>
          <h2>Sobre Mim</h2>
          <div className="line"></div>
        </div>
        <div className="text-sobre">
          <img className="iconsobre" src={IconSobre} alt="Sobre" />
          <p>
              Olá! Meu nome é Jennifer, mas você pode me chamar de Jenni. <br /><br />
              Sou técnica em Informática pelo IFRN e atualmente estou cursando Análise e Desenvolvimento de Sistemas na mesma instituição. A tecnologia é minha paixão, e a cada dia me sinto mais motivada a explorar suas infinitas possibilidades, especialmente quando se trata de resolver problemas e conflitos.
          </p>
        </div>

        <div className="cards-wrapper">
        <button className="scroll-button left" onClick={() => scroll('left')}>&lt;</button>
        
        <div className="cards-container" ref={scrollRef}>
          <div className="cards-horizontal">
            <div className="card"><img src={html} alt="html" /></div>
            <div className="card"><img src={docker} alt="docker" /></div>
            <div className="card"><img src={react} alt="react" /></div>
            <div className="card"><img src={python} alt="python" /></div>
            <div className="card"><img src={mysql} alt="mysql" /></div>
            <div className="card"><img src={postgres} alt="postgres" /></div>
            <div className="card"><img src={node} alt="node.js" /></div>
            <div className="card"><img src={git} alt="git" /></div>
          </div>
        </div>

        <button className="scroll-button right" onClick={() => scroll('right')}>&gt;</button>
      </div>

      </section>

      <section id="formacao">
        <div>
          <h2>Formação Acadêmica</h2>
          <div className="line"></div>
        </div>
        <div className="text-formacao">
          <h3>TÉCNICA EM INFORMÁTICA</h3>
          <ul>
            <li>IFRN - Instituto Federal do Rio Grande do Norte</li>
          </ul>
          <p className="ano">Abril 2021 - Janeiro 2025</p>
          <p>
            O profissional formado em Informática pelo IFRN desenvolve, testa, implanta e mantém sistemas computacionais,
            seguindo padrões de programação e linguagens adequadas. Atua em ambientes de desenvolvimento, banco de dados
            e testes de software, com possibilidade de trabalhar em instituições públicas, privadas e do terceiro setor.
          </p>
          <h3>GRADUANDA EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</h3>
          <ul>
            <li>IFRN - Instituto Federal do Rio Grande do Norte</li>
          </ul>
          <p className="ano">mês 2025 - mês 2028</p>
          <p>O profissional formado em Análise e Desenvolvimento de Sistemas pelo IFRN, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação. Utiliza ferramentas tecnológicas, linguagens de programação e metodologias de desenvolvimento para criar soluções eficientes e seguras. Com raciocínio lógico e foco na qualidade, usabilidade e integridade dos sistemas, atua em diferentes ambientes, como empresas públicas, privadas e organizações do terceiro setor, contribuindo para a inovação e otimização de processos.</p>
        </div>
      </section>

      <section id="certificados">
        <div>
          <h2>Certificados</h2>
          <div className="line"></div>
        </div>
        <div className="cards-certificados">
          <div className="card-certificado">
            <img src={logoCisco} alt="Logo Cisco" />
            <div className="card-content">
              <h3>Introduction to IoT</h3>
              <p>Cisco Networking Academy</p>
            </div>
          </div>
          <div className="card-certificado">
            <img src={logoCisco} alt="Logo Cisco" />
            <div className="card-content">
              <h3>Introduction to Cybersecurity</h3>
              <p>Cisco Networking Academy</p>
            </div>
          </div>
          <div className="card-certificado">
            <img src={logoCisco} alt="Logo Cisco" />
            <div className="card-content">
              <h3>NDG Linux Unhatched</h3>
              <p>Cisco Networking Academy</p>
            </div>
          </div>
          <div className="card-certificado">
            <img src={hackathon} alt="Certificado Hackathon" />
            <div className="card-content">
              <h3>Tecnologias Disruptivas para Segurança Pública</h3>
              <p>Ministério da Justiça e Segurança Pública</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia">
        <div>
          <h2>Experiência</h2>
          <div className="line"></div>
        </div>
        <div className="text-formacao">
          <h3>Aluna Pesquisadora - Desenvolvimento</h3>
          <ul>
            <li>DTIC/PMRN - Diretoria de Tecnologia, Inovação e Comunicação da Polícia Militar do Rio Grande do Norte</li>
          </ul>
          <p className="ano">Maio 2024 - Janeiro 2025 · 8 meses</p>
          <p>
            Desenvolve sistemas e aplicações para modernizar os serviços digitais da Polícia Militar do Rio Grande do Norte (PM/RN), definindo interface gráfica, critérios de usabilidade e navegabilidade, além de projetar, implantar e manter soluções tecnológicas robustas. Atua na análise e codificação de programas, montagem da estrutura de banco de dados e seleção de ferramentas e metodologias adequadas ao projeto. Planeja etapas de trabalho com foco na integração entre sistemas e eficiência operacional.
          </p>
          <h3>Finalista - Hackathon de Tecnologia em Segurança Pública</h3>
          <ul>
            <li>MJSP - Ministério da Justiça e Segurança Pública</li>
          </ul>
          <p className="ano">Março de 2025</p>
          <p>
            Fui finalista do primeiro hackathon promovido pelo MJSP, onde desenvolvi, junto com minha equipe, o EmergêncIA: um chatbot para registro de ocorrências. O evento proporcionou uma experiência enriquecedora de colaboração interdisciplinar, reunindo desenvolvedores, empreendedores, acadêmicos e profissionais da segurança pública. Através do EmergêncIA, contribuí para a criação de uma solução inovadora com potencial para otimizar processos e impactar positivamente a sociedade, alinhada ao compromisso do governo com a inovação tecnológica.
          </p>
        </div>
      </section>

      <section id="projetos">
        <div>
          <h2>Projetos</h2>
          <div className="line"></div>
        </div>
        <div className="cards-projetos">
          <div className="card-projeto">
            <img src={emergencIA} alt="Projeto EmergêncIA" />
            <h3>EmergêncIA</h3>
            <div className="card-buttons">
              <a href="https://github.com/EmergencIA-hackathon/EmergencIA" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
              <Link to="/projeto1" className="botao-detalhes">+</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
