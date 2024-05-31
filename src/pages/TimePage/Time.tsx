import '../../App.css';
import React, {useEffect} from 'react';
import Navbar from '../../components/SobrePage/navbar.js'; 
import Rodape from '../../components/HomePage/rodape';
import About from '../../components/SobrePage/about.js';
import Time from '../../components/TimePage/time.js';


function SobrePage() {
  useEffect(() => {
    document.title = "Wimb - Home";
  }, []);
  return (
    
    <div className="App">
      <Navbar />
      <Time />
      <Rodape />
    </div>

  );
}

export default SobrePage;
