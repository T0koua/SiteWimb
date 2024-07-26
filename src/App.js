import React, {useEffect} from 'react';
import './App.css'
import HomePage from './pages/HomePage/HomePage.tsx';
import SobrePage from './pages/SobrePage/Sobre.tsx';
import TimePage from './pages/TimePage/Time.tsx';
import Contato from './pages/Contato/Contato.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  useEffect(() => {
    document.title = "Wimb - Home";
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Sobre' element={<SobrePage />} />
        <Route path='/Equipe' element={<TimePage />} />
        <Route path='/Contato' element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;