import React from 'react';
import './about.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <h2>Sobre Nosso Projeto</h2>
        
        <div className="intro">
          <p>
            Bem-vindo(a) a <strong>Wimb</strong>, uma iniciativa que baseia-se num aplicativo para acessar a localização em tempo real dos ônibus, horários, melhores trajetos, notícias sobre o tráfego nas vias urbanas e informações sobre o transporte público em painéis nos pontos de ônibus e aplicativo mobile. Nosso objetivo é ajudar a diminuir a desigualdade social que ocorre devido à falta de acesso/recursos de pessoas financeiramente carentes e/ou que não têm familiaridade com a tecnologia, como idosos.
          </p>
        </div>
        
        <div className="mission-vision">
          <div className="content">
            <h3>Nossa Missão</h3>
            <p>
              Nossa missão é fornecer informações precisas e acessíveis sobre o transporte público para todos, especialmente aqueles que mais necessitam. Acreditamos que a tecnologia pode ser uma ponte para reduzir a desigualdade social, proporcionando acesso a serviços essenciais de maneira fácil e eficiente.
            </p>
          </div>
          <div className="image mission-image"></div>
        </div>
        
        <div className="mission-vision">
          <div className="image vision-image"></div>
          <div className="content">
            <h3>Nossa Visão</h3>
            <p>
              Nossa visão é um futuro onde todas as pessoas, independentemente de sua situação financeira ou familiaridade com a tecnologia, tenham acesso a informações de transporte público que lhes permitam se deslocar pela cidade de forma eficiente e segura. Imaginamos um mundo mais conectado e igualitário, onde a mobilidade urbana seja um direito de todos.
            </p>
          </div>
        </div>
        
        <div className="values">
          <h3>Nossos Valores</h3>
          <ul>
            <li><strong>Inovação:</strong> Estamos comprometidos em buscar soluções criativas e eficazes para melhorar a mobilidade urbana.</li>
            <li><strong>Sustentabilidade:</strong> Valorizamos práticas sustentáveis que promovam o uso consciente dos recursos e reduzam o impacto ambiental.</li>
            <li><strong>Inclusão:</strong> Acreditamos em um mundo onde todos tenham acesso igualitário à informação e ao transporte.</li>
            <li><strong>Colaboração:</strong> Trabalhamos em conjunto com parceiros e a comunidade para desenvolver soluções que atendam às necessidades de todos.</li>
          </ul>
        </div>
        
        <div className="activities">
          <h3>O que Fazemos</h3>
          <p>No <strong>Wimb</strong>, estamos engajados em diversas atividades para atingir nossos objetivos:</p>
          <ul>
            <li><strong>Monitoramento em tempo real:</strong> Fornecemos localização em tempo real dos ônibus para que os usuários possam planejar suas viagens com mais precisão.</li>
            <li><strong>Informações de trânsito:</strong> Atualizamos nossos usuários sobre o tráfego nas vias urbanas, ajudando-os a escolher os melhores trajetos.</li>
            <li><strong>Painéis informativos:</strong> Instalamos painéis nos pontos de ônibus para fornecer informações úteis sobre o transporte público.</li>
            <li><strong>Aplicativo mobile:</strong> Desenvolvemos um aplicativo intuitivo para que todos possam acessar facilmente as informações necessárias.</li>
          </ul>
        </div>
        
        <div className="impact">
          <h3>Impacto</h3>
          <p>Desde o início, <strong>Wimb</strong> tem feito uma diferença significativa na vida das pessoas. Alguns de nossos principais resultados incluem:</p>
          <ul>
            <li><strong>Redução de tempo de espera:</strong> Usuários relataram uma diminuição significativa no tempo de espera nos pontos de ônibus.</li>
            <li><strong>Acessibilidade aumentada:</strong> Pessoas idosas e com limitações financeiras têm agora acesso mais fácil e rápido às informações de transporte.</li>
            <li><strong>Maior conscientização ambiental:</strong> Incentivamos o uso do transporte público, ajudando a reduzir a emissão de gases poluentes.</li>
          </ul>
        </div>
        
        <div className="participate">
          <h3>Participe</h3>
          <p>Estamos sempre procurando pessoas interessadas em fazer parte dessa mudança positiva. Entre em contato conosco para saber mais sobre como você pode ajudar a fazer a diferença com o Wimb.</p>
          <a href="#contact">Entre em Contato</a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
