import './App.css';
import React, {useEffect} from 'react';
import Navbar from './components/navbar'; 
import ImageSection from './components/imagesection';
import Slides from './components/slides';
import Funcionalidades from './components/funcionalidades';


function App() {
  useEffect(() => {
    document.title = "Wimb - Home";
  }, []);
  return (
    
    <div className="App">
      <Navbar />
      <Slides />
      <Funcionalidades />
      <ImageSection />
      <header className="App-header">
        <p>
          Só pra nao sumir
        </p>
      </header>
    </div>

  );
}

export default App;
