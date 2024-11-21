import '../../App.css';
import React, { useEffect } from 'react';
import Navbar from '../../components/Essentials/navbar.js';
import Rodape from '../../components/Essentials/rodape';
import About from '../../components/SobrePage/about.js';


function SobrePage() {
  useEffect(() => {
    document.title = "Wimb - Home";
  }, []);
  return (

    <div className="App">
      <Navbar />
      <About />
      <Rodape />
    </div>

  );
}

export default SobrePage;
