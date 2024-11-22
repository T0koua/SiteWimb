import React from 'react';
import './painel.css'
import { Navigate } from 'react-router-dom';
function Painel() {
  return (
    //layout da seção do painel digital
    <div class="safe-section"> 
        <div class="container">
            <div class="safe-wrapper">
                <h2 class="safe-heading">Painel Digital</h2>
                <p class="safe-paragraph">Nós implementaremos painéis digitais nos pontos de ônibus contendo todas as informações do app para o público.</p>
                <div class="safe-button-wrapper">
                    <a href="/Sobre" class="btn light hero safe w-button">Saiba mais</a>
                </div>
            </div>
        </div>
    </div>
  );
}
//exporta o componente para que possa ser usado em outros arquivos
export default Painel;
