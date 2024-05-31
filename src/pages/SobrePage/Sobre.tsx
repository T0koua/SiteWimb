import '../../App.css';
import React, {useEffect} from 'react';
import Navbar from '../../components/SobrePage/navbar.js'; 
import Rodape from '../../components/HomePage/rodape';
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
