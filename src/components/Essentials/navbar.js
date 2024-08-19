import React, {useState} from 'react';
import logo from './logo.png';
import './navbar.css';

const Navbar = () => {

  const [classOn, setClassOn] = useState(false);
        
    return (
      <header>
      <div className="container">
      <img src={logo} alt="Logo" className='logo'/>
  
        <div className = { classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
             <div className="menu-toggle">
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
             </div>
  
             <nav>
              <ul>
                <li>
                  <a href="/">INÍCIO</a>
                </li>
                <li>
                  <a href="/Sobre">SOBRE</a>
                </li>
                <li>
                  <a href="/Equipe">EQUIPE</a>
                </li>
                <li>
                  <a href="/Contato">CONTATO</a>  
                </li>
              </ul>
            </nav>
  
            </div>
          </div>
  
        </header>
  
        )
      }
      

export default Navbar;