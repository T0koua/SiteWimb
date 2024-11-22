import React from 'react';
import './slides.css'
function Slides() {
  return (
    //layout da imagem de fundo na home
    <div class="hero-section">
        <div class="container">
            <div class="hero-wrapper">
              <div class="radial">
                <h1 class="hero-heading">Otimizando sua rotina!</h1>
                <p class="hero-paragraph">Com o nosso aplicativo WIMB, você será atualizado em tempo real com a localização do seu ônibus e com notícias sobre o trânsito.</p>
                <a href="https://www.instagram.com/wimb_ofc/" class="btn-light-outline-w-button">Conheça nosso app</a>
              </div>
            </div>
        </div>
    </div>
  );
}
//exporta o componente para que possa ser usado em outros arquivos
export default Slides;