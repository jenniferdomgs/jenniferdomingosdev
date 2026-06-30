import React, { useState } from 'react';
import { useLang } from '../LangContext';
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
import jessempadas3 from '../img/produtoFornecedor-mobile.png';
import IMOVEIS from '../img/imoveis.png';
import RNSUS from '../img/rnsus.png';
import SIGAP from '../img/sigap.png';
import clouddevops from '../img/aluralogo.jpeg';
import logoFundBradesco from '../img/fundBradesco_logo.png';

function Main() {
  const { t } = useLang();
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
          <h2>{t.sobre.titulo}</h2>
          <div className="line"></div>
        </div>
        <div className="sobre-container">
          <div className="sobre-texto">
            <h2>{t.sobre.ola}</h2>
            <p>{t.sobre.apelido}</p>
            <p><i className="fa-solid fa-graduation-cap"></i> {t.sobre.p1}</p>
            <p><i className="fa-solid fa-briefcase"></i> {t.sobre.p2}</p>
            <p><i className="fa-solid fa-medal"></i> {t.sobre.p3}</p>
          </div>
          <div className="sobre-icone">
            <img className="iconsobre" src={jenni} alt="Sobre" />
          </div>
        </div>
        <div className="tecnologias">
          <div>
            <h2>{t.sobre.tecTitulo}</h2>
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
            <h2>{t.resume.titulo}</h2>
            <div className="line"></div>
          </div>
        </div>

        <div className="resume-container">
          <div className="resume-item">
            <span className="ano">{t.resume.items[0].ano}</span>
            <h4>
              {t.resume.items[0].cargo}
              <button className="expand-btn" onClick={() => toggleInfo("info")}><i className="fa-solid fa-caret-down"></i></button>
            </h4>
            <div className={`description ${infoAberta === 'info' ? 'expanded' : ''}`}>
              <p>{t.resume.items[0].desc}</p>
            </div>
          </div>

          <div className="resume-item">
            <span className="ano">{t.resume.items[1].ano}</span>
            <h4>
              {t.resume.items[1].cargo}
              <button className="expand-btn" onClick={() => toggleInfo("tads")}><i className="fa-solid fa-caret-down"></i></button>
            </h4>
            <div className={`description ${infoAberta === 'tads' ? 'expanded' : ''}`}>
              <p>{t.resume.items[1].desc}</p>
            </div>
          </div>

          <div className="resume-item">
            <span className="ano">{t.resume.items[2].ano}</span>
            <h4>
              {t.resume.items[2].cargo}
              <button className="expand-btn" onClick={() => toggleInfo("dtic")}><i className="fa-solid fa-caret-down"></i></button>
            </h4>
            <div className={`description ${infoAberta === 'dtic' ? 'expanded' : ''}`}>
              <p>{t.resume.items[2].desc}</p>
            </div>
          </div>

          <div className="resume-item">
            <span className="ano">{t.resume.items[3].ano}</span>
            <h4>
              {t.resume.items[3].cargo}
              <button className="expand-btn" onClick={() => toggleInfo("mjsp")}><i className="fa-solid fa-caret-down"></i></button>
            </h4>
            <div className={`description ${infoAberta === 'mjsp' ? 'expanded' : ''}`}>
              <p>{t.resume.items[3].desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="certificados">
        <div>
          <h2>{t.certificados.titulo}</h2>
          <div className="line"></div>
        </div>
        <div className="certificados-grid">
          <div className="card-certificado">
            <img src={logoCisco} alt="Cisco" />
            <div>
              <h3>Introduction to IoT</h3>
              <p>Cisco Net Academy</p>
            </div>
          </div>
          <div className="card-certificado">
            <img src={logoCisco} alt="Cisco" />
            <div>
              <h3>Introduction to Cybersecurity</h3>
              <p>Cisco Net Academy</p>
            </div>
          </div>
          <div className="card-certificado">
            <img src={logoCisco} alt="Cisco" />
            <div>
              <h3>NDG Linux Unhatched</h3>
              <p>Cisco Net Academy</p>
            </div>
          </div>
          <div className="card-certificado">
            <img src={hackathon} alt="Hackathon" />
            <div>
              <h3>{t.certificados.hackathon}</h3>
              <p>{t.certificados.mjsp}</p>
            </div>
          </div>
          <div className="card-certificado">
            <img src={clouddevops} alt="clouddevopsalura" />
            <div>
              <h3>{t.certificados.cloudDevops}</h3>
              <p>Alura</p>
            </div>
          </div>
          <div className="card-certificado">
            <img src={logoFundBradesco} alt="FundacaoBradesco" />
            <div>
              <h3>{t.certificados.powerBI}</h3>
              <p>Fundação Bradesco</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos">
        <div>
          <h2>{t.projetos.titulo}</h2>
          <div className="line"></div>
        </div>

        <div className="cards-projetos">
          <div className="card-projeto">
            <img src={emergencIA} alt="Projeto EmergêncIA" />
            <div className="overlay">
              <div className="card-buttons">
                <button onClick={() => setProjetoAberto('emergencia')} className='botao-detalhes'>{t.projetos.verProjeto}</button>
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
                <button onClick={() => setProjetoAberto('artePinturas')} className='botao-detalhes'>{t.projetos.verProjeto}</button>
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
                <button onClick={() => setProjetoAberto('Jessempadas')} className='botao-detalhes'>{t.projetos.verProjeto}</button>
                <a href="https://github.com/jenniferdomgs/doceria-jess_empadas" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="card-projeto">
            <img src={IMOVEIS} alt="Projeto Privado: Imóveis" />
            <div className="overlay">
              <div className="card-buttons">
                <button onClick={() => setProjetoAberto('imoveis')} className='botao-detalhes'>{t.projetos.descricao}</button>
                <span className="botao-privado"><i className="fa-solid fa-lock"></i> {t.projetos.privado}</span>
              </div>
            </div>
          </div>

          <div className="card-projeto">
            <img src={RNSUS} alt="Projeto Privado: RN Sustentável" />
            <div className="overlay">
              <div className="card-buttons">
                <button onClick={() => setProjetoAberto('rnsus')} className='botao-detalhes'>{t.projetos.descricao}</button>
                <span className="botao-privado"><i className="fa-solid fa-lock"></i> {t.projetos.privado}</span>
              </div>
            </div>
          </div>

          <div className="card-projeto">
            <img src={SIGAP} alt="Projeto Privado: SIGAP" />
            <div className="overlay">
              <div className="card-buttons">
                <button onClick={() => setProjetoAberto('sigap')} className='botao-detalhes'>{t.projetos.descricao}</button>
                <span className="botao-privado"><i className="fa-solid fa-lock"></i> {t.projetos.privado}</span>
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
                <h3 className="titulo-detalhe"><i className="fa-solid fa-tower-broadcast"></i> {t.projetos.modal.emergencia.titulo}</h3>
                <div className="imagens-projeto">
                  <img src={emergencIAT2} alt="EmergencIA Telegram" />
                  <img src={emergencIAT1} alt="EmergencIA Telegram" />
                </div>
                <div className="tecnologias-projeto">
                  <ul>
                    <li>Python</li><li>Flask</li><li>Telegram Bot API</li>
                    <li>Node.Js</li><li>Docker</li><li>Ngrok</li>
                  </ul>
                </div>
              </>
            )}

            {projetoAberto === 'artePinturas' && (
              <>
                <h3 className="titulo-detalhe"><i className="fa-solid fa-pager"></i> {t.projetos.modal.artePinturas.titulo}</h3>
                <div className="imagens-projeto">
                  <img src={arteTintasMob1} alt="Mobile" />
                  <img src={arteTintasMob2} alt="Mobile" />
                  <img src={arteTintasThumb} alt="Desktop" />
                  <img src={arteTintasDesk2} alt="Desktop" />
                </div>
                <div className="tecnologias-projeto">
                  <ul>
                    <li>React</li><li>Vite</li><li>HTML</li>
                    <li>CSS Responsivo</li><li>Vercel</li>
                  </ul>
                </div>
              </>
            )}

            {projetoAberto === 'Jessempadas' && (
              <>
                <h3 className="titulo-detalhe"><i className="fa-solid fa-cart-shopping"></i> {t.projetos.modal.jessempadas.titulo}</h3>
                <div className="imagens-projeto">
                  <img src={jessempadas2} alt="Versão Mobile" />
                  <img src={jessempadas3} alt="Painel Fornecedor" />
                  <img src={jessempadas1} alt="Versão Desktop" />
                </div>
                <div className="tecnologias-projeto">
                  <ul>
                    <li>Python</li><li>Flask</li><li>HTML</li>
                    <li>CSS</li><li>JavaScript</li><li>Docker</li><li>PostgreSQL</li>
                  </ul>
                </div>
              </>
            )}

            {projetoAberto === 'imoveis' && (
              <>
                <h3 className="titulo-detalhe"><i className="fa-solid fa-lock"></i> {t.projetos.modal.imoveis.titulo}</h3>
                <p className='paragrafopvd'>{t.projetos.modal.imoveis.desc}</p>
                <div className="tecnologias-projeto">
                  <ul>
                    <li>Python</li><li>Flask</li><li>HTML</li>
                    <li>CSS</li><li>JavaScript</li><li>Docker</li><li>PostgreSQL</li>
                  </ul>
                </div>
              </>
            )}

            {projetoAberto === 'rnsus' && (
              <>
                <h3 className="titulo-detalhe"><i className="fa-solid fa-lock"></i> {t.projetos.modal.rnsus.titulo}</h3>
                <p className='paragrafopvd'>{t.projetos.modal.rnsus.desc}</p>
                <div className="tecnologias-projeto">
                  <ul>
                    <li>Python</li><li>Flask</li><li>HTML</li>
                    <li>CSS</li><li>JavaScript</li><li>Docker</li><li>PostgreSQL</li>
                  </ul>
                </div>
              </>
            )}

            {projetoAberto === 'sigap' && (
              <>
                <h3 className="titulo-detalhe"><i className="fa-solid fa-lock"></i> {t.projetos.modal.sigap.titulo}</h3>
                <p className='paragrafopvd'>{t.projetos.modal.sigap.desc}</p>
                <div className="tecnologias-projeto">
                  <ul>
                    <li>Node Js</li><li>React</li><li>HTML</li>
                    <li>CSS</li><li>Axios</li><li>Docker</li><li>PostgreSQL</li>
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