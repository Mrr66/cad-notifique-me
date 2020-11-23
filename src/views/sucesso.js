import React from 'react';
import './sucesso.css';

const sucesso = () =>{

 return (<div class="ui info message">
  <i class="close icon"></i>
  <div class="msg">
  <div class="header">
    Parabéns em breve você poderá notificar seus clientes pelo WhatsApp.
  </div>
  
  
  <ul class="list">
    <li><i class="check circle icon"></i> Seu cadastro foi realizado com sucesso!!!</li>
    <li><i class="circle outline icon"></i> Estamos analizando seus dados.</li>
    <li><i class="circle outline icon"></i> Embreve você vai receber um e-mail no endereço cadastrado com instruções</li>
  </ul>
  </div>
  <div class="siteUrl"><a href="#">Ir para site</a></div>
</div>
)
}
export default sucesso;