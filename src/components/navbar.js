import React from 'react';
import logo from './logo.png';
import './navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="wimbnavbar">
        <img src={logo} alt="Logo da Empresa" className="logowimb" />
        <div className="nomewimb">WIMB</div>
      </div>
      <ul className='nav-links'>
        <li><a href="/">Página Inicial</a></li>
        <li><a href="/sobre">Sobre</a></li>
        <li><a href="/contato">Equipe de Desenvolvimento</a></li>
        <li><a href="/contato">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;