import '../../App.css';
import React, {useEffect} from 'react';
import Navbar from '../../components/Essentials/navbar'; 
import Slides from '../../components/HomePage/slides';
import Funcionalidades from '../../components/HomePage/funcionalidades';
import Painel from '../../components/HomePage/painel';
import Rodape from '../../components/Essentials/rodape';


function HomePage() {
  useEffect(() => {
    document.title = "Wimb - Home";
  }, []);
  return (
    
    <div className="App">
      <Navbar />
      <Slides />
      <Funcionalidades />
      <Painel />
      <Rodape />
    </div>

  );
}

export default HomePage;
