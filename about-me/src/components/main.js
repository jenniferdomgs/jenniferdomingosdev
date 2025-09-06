import React, { useState } from 'react';
import jenni from '../img/jenni-sfundo.png';
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
import emergencIAT1 from '../img/emergencIA2.jpg';
import emergencIAT2 from '../img/emergencIA1.jpg';
import arteTintasThumb from '../img/hero.png';
import arteTintasDesk2 from '../img/sobre.png';
import arteTintasMob1 from '../img/hero-responsivo.png';
import arteTintasMob2 from '../img/responsivo.png';
import icon from '../img/icon.png';
import logoJess from '../img/logojess.png';
import jessempadas1 from '../img/homeDesktop.png';
import jessempadas2 from '../img/homeMobile.png';
import jessempadas3 from '../img/produtoFornecedor-mobile.png'

function Main() {
  const [projetoAberto, setProjetoAberto] = useState(null);
  const [activeTech, setActiveTech] = useState(null);
  const [infoAberta, setInfoAberta] = useState(null);

  const toggleInfo = (id) => {
    setInfoAberta(prevId => prevId === id ? null : id);
  };

  const tecnologias = [
    { img: html, name: 'html', title: 'HTML, CSS e JS' },
    { img: docker, name: 'docker', title: 'Docker' },
    { img: react, name: 'react', title: 'React' },
    { img: python, name: 'python', title: 'Python' },
    { img: mysql, name: 'mysql', title: 'MySQL' },
    { img: postgres, name: 'postgres', title: 'PostgreSQL' },
    { img: node, name: 'node', title: 'Node.js' },
    { img: git, name: 'git', title: 'Git' },
  ];

  return (
    <main>
      <section id="sobre">
        <div>
          <h2>Sobre Mim</h2>
          <div className="line"></div>
        </div>
        <div className="sobre-container">
          <div className="sobre-texto">
            <h2>Olá! Meu nome é Jennifer</h2>
            <p>mas você pode me chamar de Jenni.</p>
            <p><i className="fa-solid fa-graduation-cap"></i> Sou Técnica em Informática pelo IFRN, e atualmente estou cursando Tecnologia em Análise e Desenvolvimento de Sistemas na mesma instituição.</p>
            <p><i className="fa-solid fa-briefcase"></i> Atuei como aluna pesquisadora na DTIC/PMRN em 2024, desenvolvendo soluções para a Segurança Pública do RN.</p>
            <p><i className="fa-solid fa-medal"></i> Participei do 1° Hackathon do MJSP, com o projeto EmergêncIA, conquistando o 5° lugar nacional.</p>
          </div>
          <div className="sobre-icone">
            <img className="iconsobre" src={jenni} alt="Sobre" />
          </div>
        </div>
        <div className="tecnologias">
          <div>
            <h2>Tecnologias & Ferramentas</h2>
            <div className="line"></div>
          </div>
          <div className="tecnologias-grid">
            {tecnologias.map(tech => (
              <img
                key={tech.name}
                src={tech.img}
                alt={tech.name}
                title={tech.title}
                className={activeTech === tech.name ? 'active' : ''}
                onClick={() => setActiveTech(tech.name)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="resume">
        <div>
          <div>
            <h2>Formação & Experiência</h2>
            <div className="line"></div>
          </div>
        </div>

        <div className="resume-container">
          <div className="resume-item">
            <span className="ano">2021 - 2025</span>
            <h4>
              Técnica em Informática - IFRN
              <button className="expand-btn" onClick={() => toggleInfo("info")}><i className="fa-solid fa-caret-down"></i></button>
            </h4>
            <div className={`description ${infoAberta === 'info' ? 'expanded' : ''}`}>
              <p>O profissional formado em Informática pelo IFRN desenvolve, testa, implanta e mantém sistemas computacionais, seguindo padrões de programação e linguagens adequadas. Atua em ambientes de desenvolvimento, banco de dados e testes de software, com possibilidade de trabalhar em instituições públicas, privadas e do terceiro setor.</p>
            </div>
          </div>
          <div className="resume-item">
            <span className="ano">2025 - 2028</span>
            <h4>
              Graduanda em Tecnologia em Análise e Desenvolvimento de Sistemas - IFRN
              <button className="expand-btn" onClick={() => toggleInfo("tads")}><i className="fa-solid fa-caret-down"></i></button>
            </h4>
            <div className={`description ${infoAberta === 'tads' ? 'expanded' : ''}`}>
              <p>O profissional formado em Análise e Desenvolvimento de Sistemas pelo IFRN, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação. Utiliza ferramentas tecnológicas, linguagens de programação e metodologias de desenvolvimento para criar soluções eficientes e seguras. Com raciocínio lógico e foco na qualidade, usabilidade e integridade dos sistemas, atua em diferentes ambientes, como empresas públicas, privadas e organizações do terceiro setor, contribuindo para a inovação e otimização de processos.</p>
            </div>
          </div>
          <div className="resume-item">
            <span className="ano">2024 - 2025</span>
            <h4>
              Aluna Pesquisadora - DTIC/PMRN
              <button className="expand-btn" onClick={() => toggleInfo("dtic")}><i className="fa-solid fa-caret-down"></i></button>
            </h4>
            <div className={`description ${infoAberta === 'dtic' ? 'expanded' : ''}`}>
              <p>Trabalhei no desenvolvimento de sistemas e aplicações para modernizar os serviços digitais da Polícia Militar do Rio Grande do Norte (PM/RN), definindo interface gráfica, critérios de usabilidade e navegabilidade, além de projetar, implantar e manter soluções tecnológicas robustas. Também atuei na análise e codificação de programas, montagem da estrutura de banco de dados e seleção de ferramentas e metodologias adequadas ao projeto. (DTIC/PMRN: Diretoria de Tecnologia Inovação e Comunicação da Polícia Militar do Rio Grande do Norte)</p>
            </div>
          </div>
          <div className="resume-item">
            <span className="ano">Março de 2025</span>
            <h4>
              Finalista - Hackathon Segurança Pública (MJSP)
              <button className="expand-btn" onClick={() => toggleInfo("mjsp")}><i className="fa-solid fa-caret-down"></i></button>
            </h4>
            <div className={`description ${infoAberta === 'mjsp' ? 'expanded' : ''}`}>
              <p>Fui finalista do primeiro hackathon promovido pelo Ministério da Justiça e Segurança Pública: Tecnologias Disruptivas Para Segurança Pública, onde desenvolvi, junto com minha equipe, o EmergêncIA: um chatbot para registro de ocorrências. O evento proporcionou uma experiência enriquecedora de colaboração interdisciplinar, reunindo desenvolvedores, empreendedores, acadêmicos e profissionais da segurança pública. Através do EmergêncIA, contribuí para a criação de uma solução inovadora com potencial para otimizar processos e impactar positivamente a sociedade, alinhada ao compromisso do governo com a inovação tecnológica.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="certificados">
        <div>
          <h2>Certificados</h2>
          <div className="line"></div>
        </div>
        <div className="certificados-grid">
          <div className="card-certificado">
            <img src={logoCisco} alt="Cisco" />
            <h3>Introduction to IoT</h3>
            <p>Cisco Net Academy</p>
          </div>
          <div className="card-certificado">
            <img src={logoCisco} alt="Cisco" />
            <h3>Introduction to Cybersecurity</h3>
            <p>Cisco Net Academy</p>
          </div>
          <div className="card-certificado">
            <img src={logoCisco} alt="Cisco" />
            <h3>NDG Linux Unhatched</h3>
            <p>Cisco Net Academy</p>
          </div>
          <div className="card-certificado">
            <img src={hackathon} alt="Hackathon" />
            <h3>Tecnologias Disruptivas Segurança Pública</h3>
            <p>Ministério da Justiça e Segurança Pública</p>
          </div>
        </div>
      </section>

      <section id="projetos">
        <div>
          <h2>Projetos Realizados</h2>
          <div className="line"></div>
        </div>
        <div className="cards-projetos">
          <div className="card-projeto">
            <img src={emergencIA} alt="Projeto EmergêncIA" />
            <div className="overlay">
              <div className="card-buttons">
                <button onClick={() => setProjetoAberto('emergencia')} className='botao-detalhes'>Ver Projeto</button>
                <a href="https://github.com/EmergencIA-hackathon/EmergencIA" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="card-projeto">
            <img src={icon} alt="Landing Page Arte Pinturas SC" />
            <div className="overlay">
              <div className="card-buttons">
                <button onClick={() => setProjetoAberto('artePinturas')} className='botao-detalhes'>Ver Projeto</button>
                <a href="https://github.com/jenniferdomgs/webpage-artepinturas" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="card-projeto">
            <img src={logoJess} alt="Jess Empadas" />
            <div className="overlay">
              <div className="card-buttons">
                <button onClick={() => setProjetoAberto('Jessempadas')} className='botao-detalhes'>Ver Projeto</button>
                <a href="https://github.com/jenniferdomgs/doceria-jess_empadas" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {projetoAberto && (
        <div className="modal-projeto">
          <div className="conteudo-projeto estilo-formulario">
            <button className="fechar-modal" onClick={() => setProjetoAberto(null)}>X</button>
            {projetoAberto === 'emergencia' && (
              <>
                <h3 className="titulo-detalhe"><i className="fa-solid fa-tower-broadcast"></i> EmergencIA: Chatbot para Registro de Ocorrências</h3>
                <div className="imagens-projeto">
                  <img src={emergencIAT2} alt="EmergencIA Telegram" />
                  <img src={emergencIAT1} alt="EmergencIA Telegram" />
                </div>
                <div className="tecnologias-projeto">
                  <ul>
                    <li>Python</li>
                    <li>Flask</li>
                    <li>Telegram Bot API</li>
                    <li>Node.Js</li>
                    <li>Docker</li>
                    <li>Ngrok</li>
                  </ul>
                </div>
              </>
            )}
            {projetoAberto === 'artePinturas' && (
              <>
                <h3 className="titulo-detalhe"><i className="fa-solid fa-pager"></i> Arte Pinturas SC: Landing Page Responsiva</h3>
                <div className="imagens-projeto">
                  <img src={arteTintasThumb} alt="Desktop" />
                  <img src={arteTintasDesk2} alt="Desktop" />
                  <img src={arteTintasMob1} alt="Mobile" />
                  <img src={arteTintasMob2} alt="Mobile" />
                </div>
                <div className="tecnologias-projeto">
                  <ul>
                    <li>React</li>
                    <li>Vite</li>
                    <li>HTML</li>
                    <li>CSS Responsivo</li>
                    <li>Vercel</li>
                  </ul>
                </div>
              </>
            )}
            {projetoAberto === 'Jessempadas' && (
              <>
                <h3 className="titulo-detalhe"><i className="fa-solid fa-cart-shopping"></i> E-commerce Jess Empadas</h3>
                <div className="imagens-projeto">
                  <img src={jessempadas2} alt="Versão Mobile" />
                  <img src={jessempadas3} alt="Painel Fornecedor" />
                  <img src={jessempadas1} alt="Versão Desktop" />
                </div>
                <div className="tecnologias-projeto">
                  <ul>
                    <li>Python</li>
                    <li>Flask</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Docker</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default Main;