import '../../App.css';
import React, {useEffect} from 'react';
import Navbar from '../../components/Essentials/navbar.js'; 
import Rodape from '../../components/Essentials/rodape';
import Contato from '../../components/Contato/contato.js';


function SobrePage() {
  useEffect(() => {
    document.title = "Wimb - Home";
  }, []);
  return (
    // Chamando os componentes via React <{componente} />
    <div className="App">
      <Navbar />
      <Contato />
      <Rodape />
    </div>

  );
}

export default SobrePage;
