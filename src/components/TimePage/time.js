import React from 'react';
import './time.css';

const Time = () => {
  return (
    <section className="team-page">
      <div className="container">
        <h2>Nossa Equipe de Desenvolvimento</h2>
        
        <div className="team-member">
          <div className="member-image member1"></div>
          <div className="member-details">
            <h3>Antônio Zorante</h3>
            <p>Documentação e Marketing</p>
            <p>Antônio é o integrante responsável por documentar cada parte e progresso do projeto, onde ele detalha ao máximo todos os ocorridos, ele também é responsável por trabalhar no marketing do nosso aplicativo, ao lado de Guilherme.</p>
          </div>
        </div>
        
        <div className="team-member">
          <div className="member-image member2"></div>
          <div className="member-details">
            <h3>Guilherme Nascimento</h3>
            <p>Front-End e Marketing</p>
            <p>Guilherme é o integrante responsável por fazer o site do projeto, com foco no Front-End, e auxiliar no Front-End do Aplicativo. Ele também é responsável por cuidar da parte de marketing do aplicativo WIMB ao lado de Antônio.</p>
          </div>
        </div>
        
        <div className="team-member">
          <div className="member-image member3"></div>
          <div className="member-details">
            <h3>Igor Alcalde</h3>
            <p>Back-End e Documentação</p>
            <p>Igor A. é o integrante responsável por fazer o Back-End do projeto ao lado de Igor F., mas com foco no Aplicativo, e auxiliar na documentação do projeto, ao lado de Antônio.</p>
          </div>
        </div>

        <div className="team-member">
          <div className="member-image member4"></div>
          <div className="member-details">
            <h3>Igor de Freitas</h3>
            <p>Banco de Dados e Back-End</p>
            <p>Igor F. é o integrante responsável por fazer a ligação do banco de dados com os outros componentes do projeto, e auxiliar no Back-End, ao lado de Igor A.</p>
          </div>
        </div>

        <div className="team-member">
          <div className="member-image member5"></div>
          <div className="member-details">
            <h3>Mariana Medeiros</h3>
            <p>Lider do projeto e Front-End</p>
            <p>Mariana é a lider do projeto, onde ela lidera, dá direções para todos da equipe e garante a entrega com excelência e cumprimento dos prazos. Também é responsável por cuidar do Front-End, ao lado de Guilherme, mas com foco no aplicativo.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Time;
