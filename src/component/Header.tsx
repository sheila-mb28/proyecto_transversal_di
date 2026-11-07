import { useState } from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png';

function Header(){

  const [hora, setHora] = useState(() => new Date().toLocaleTimeString());

  setInterval(() => {
    setHora(new Date().toLocaleTimeString());
  }, 1000);

  return(
    <div className="header">
      <div className="header-empresa">
        <img className="header-logo" src={logo} alt="Logo de la empresa" />
        <span className="header-nombre">Floratopía</span>
      </div>

      <div className="header-hora">{hora}</div>
    </div>
  );
}

export default Header;