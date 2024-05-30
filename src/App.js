import './App.css';
import React, {useEffect} from 'react';
import Navbar from './components/navbar'; 
import ImageSection from './components/imagesection';
import Slides from './components/slides';
import Funcionalidades from './components/funcionalidades';
import Painel from './components/painel';
import Rodape from './components/rodape';


function App() {
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

export default App;
