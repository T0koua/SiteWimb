import '../../App.css';
import React, {useEffect} from 'react';
import Navbar from '../../components/Essentials/navbar.js'; 
import Rodape from '../../components/Essentials/rodape';

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
