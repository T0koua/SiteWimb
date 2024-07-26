import React, {useState} from 'react';
import logo from './logo.png';
import './navbar.css';

const Navbar = () => {

  const [classOn, setClassOn] = useState(false);
        
    return (
      <header>
      <div className="container">
      <img src={logo} alt="Logo" />;
  
        <div className = { classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
             <div className="menu-toggle">
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
             </div>
  
             <nav>
              <ul>
                <li>
                  <a href="/">HOME</a>
                </li>
                <li>
                  <a href="/">MISSÂO</a>
                </li>
                <li>
                  <a href="/">PRODUTOS</a>
                </li>
                <li>
                  <a href="/">SOBRE NÓS</a>
                </li>
                <li>
                  <a href="/">CONTATO</a>  
                </li>
                <li>
                 
               
                </li>
              </ul>
            </nav>
  
            </div>
          </div>
  
        </header>
  
        )
      }
      

export default Navbar;