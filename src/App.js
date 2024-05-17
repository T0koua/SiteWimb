import './App.css';
import React, {useEffect} from 'react';
import Navbar from './components/navbar'; 
import ImageSection from './components/imagesection';


function App() {
  useEffect(() => {
    document.title = "Wimb - Home";
  }, []);
  return (
    
    <div className="App">
      <Navbar />
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
