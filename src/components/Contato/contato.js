//importando os módulos
import React, { useState } from 'react';
import './contato.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';


//Constante para conectar e enviar o email utilizando emailjs
const Contato = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_t89eudc', 'template_xlmilk9', e.target, '4b6D5sKby0Ibz6iB9')
      .then((result) => {
        console.log(result.text);
        alert('Mensagem enviada com sucesso!')
      }, (error) => {
        console.log(error.text);
        alert('Não foi possível enviar sua mensagem!')
      });
    e.target.reset()
  };



  return (
    //layout do formulário
    <section className="contact-page">
      <div className="container">
        <h2>Entre em Contato</h2>
        <p>Teremos o prazer de ouvir de você. Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
        <form onSubmit={handleOnSubmit}>
          <br></br>
          <div class="formElement">
            <label for="from_name">Nome: </label>
            <input type="text" id="from_name" name="from_name" placeholder="Digite seu nome.." required />
          </div>
          <br></br>
          <div class="formElement">
            <label>E-mail: </label>
            <input type="email" id="from_email" name="from_email" placeholder="Digite seu email.." required />
          </div>
          <br></br>
          <div class="formElement">
            <label for="message">Mensagem</label>
            <textarea name="message" rows="8" cols="30" placeholder="Digite sua mensagem.." required />
          </div>
          <br></br>
          <button type="submit">Enviar Mensagem <FontAwesomeIcon icon={faEnvelope} /></button>
        </form>
      </div>
    </section>
  );
};
//exporta o componente para que possa ser usado em outros arquivos
export default Contato;

