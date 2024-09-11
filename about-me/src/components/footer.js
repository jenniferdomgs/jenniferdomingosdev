import React from 'react';


function Footer() {
  return (
    <footer id="contato">
      <div className="contato">
        <h1>Contato</h1>
      </div>
      <div className="email">
        <i className="fa-solid fa-envelope" id="cI"></i>
        <p>Email Acadêmico: jennifer.k@escolar.ifrn.edu.br</p>
      </div>
      <div className="email">
        <i className="fa-solid fa-envelope" id="cI"></i>
        <p>Email Pessoal: jennifercout.10@gmail.com</p>
      </div>
      <div className="redesS">
        <a href="http://instagram.com/jenniferdmgs" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-instagram" id="cI"></i>
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <i className="" id="cI"></i>
        </a>
        <a href="https://github.com/jenniferdomgs" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github" id="cI"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
