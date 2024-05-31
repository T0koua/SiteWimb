import React, { useState } from 'react';
import './contato.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contato = () => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar a mensagem, como enviar para um servidor ou enviar por e-mail

    setMessage('');
  };

  return (
    <section className="contact-page">
      <div className="container">
        <h2>Entre em Contato</h2>
        <p>Temos o prazer de ouvir de você. Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
        <form onSubmit={handleSubmit}>
        <label htmlFor="message">Sua Mensagem:</label>
          <div className="form-group">
            <textarea
              id="message"
              placeholder="Digite sua mensagem..."
              value={message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Enviar Mensagem <FontAwesomeIcon icon={faEnvelope} /></button>
        </form>
      </div>
    </section>
  );
};

export default Contato;

