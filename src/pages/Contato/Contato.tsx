import '../../App.css';
import React, {useEffect} from 'react';
import Navbar from '../../components/SobrePage/navbar.js'; 
import Rodape from '../../components/HomePage/rodape';
import Contato from '../../components/Contato/contato.js';


function SobrePage() {
  useEffect(() => {
    document.title = "Wimb - Home";
  }, []);
  return (
    
    <div className="App">
      <Navbar />
      <Contato />
      <Rodape />
    </div>

  );
}

export default SobrePage;
