import React from 'react';
import projetoImg from '../img/emergencIA.jpg';
import '../App.css';

function Projeto1() {
  return (
    <div className="container" style={{ padding: '20px' }}>
      <h2>Projeto 1 - Nome do Projeto</h2>
      <img src={projetoImg} alt="Projeto 1" className="projeto-detalhe-img" />
      <p style={{ marginTop: '20px' }}>
        Aqui você pode colocar uma descrição mais completa do seu projeto, tecnologias usadas, 
        motivação, desafios e funcionalidades.
      </p>
    </div>
  );
}

export default Projeto1;


