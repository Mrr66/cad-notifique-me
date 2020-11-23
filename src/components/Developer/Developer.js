import React, { useState, useEffect  } from 'react';
import { Button, Checkbox, Form,Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import {useForm} from 'react-hook-form';
import BusinessStep from './FormBusinessStep';
import correios from '../../services/correios';
import Api from '../../services/api';


var cliente = {
    Nome: null,
    CpfCnpj: null,
    RazaoSocial: null,
    Celular: null,
    Email: null,
    Login: null,
    Senha: null
}

var cep = {
    cidade: "",
    bairro: "",
    rua: "",
    uf: "",
    numero: 0
}
export function  Etapa1(){
    const {register, handleSubmit} = useForm();
const list = [
    {icon: 'user icon', description: 'Dados pessoais', status: "step"},
    {icon: 'building icon', description: 'Dados empresariais', status: " step"},
    {icon: 'user circle outline icon', description: 'Informações de login', status: "active step"},
  ];
    const [showResults, setShowResults] = React.useState(false);
    const onSubmit = data => {
        list[0].status = "completed step";
        BusinessStep({items:list});
        cliente.Nome = data.nome;
        cliente.Email = data.email;
        cliente.Celular = data.celular;
        setShowResults(true)
    }

    return showResults ? <Etapa2 /> : (
        <div>
           <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 690 }}>
              <Header as='h2' color='teal' textAlign='center'>
                <BusinessStep/>
              </Header>
              <Form size='large' onSubmit={handleSubmit(onSubmit)}>
                <Segment stacked>
                <Form.Group widths='equal'>
                 
                 <input
                    fluid
                    iconPosition='left'
                    placeholder='Nome completo'
                    type='text'
                    name='nome'
                    ref={register}
                    required={true}
                    style={{marginLeft: 5}}
                 />
                 
                 <input
                    fluid
                    iconPosition='left'
                    placeholder='Seu e-mail'
                    type='text'
                    name='email'
                    ref={register}
                    required={true}
                    style={{marginLeft: 5}}
                 />
                 
                 <input
                    fluid
                    icon='email'
                    iconPosition='left'
                    placeholder='Seu celular'
                    type='text'
                    name='celular'
                    ref={register}
                    required={true}
                    style={{marginLeft: 5}}
                 />
                 </Form.Group>
 
                  <Button color='teal' fluid size='small'>
                    Proximo
                  </Button>
                </Segment>
              </Form>
              <Message>
              Já tenho uma conta? <a href='https://notifique-me.herokuapp.com/index.html'>Sign Up</a>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
     );  
}
export function  Etapa2(){
    const {register, handleSubmit} = useForm();
    const list = [
        {icon: 'user icon', description: 'Dados pessoais', status: "step"},
        {icon: 'building icon', description: 'Dados empresariais', status: " step"},
        {icon: 'user circle outline icon', description: 'Informações de login', status: "active step"},
      ];
      const [showResults, setShowResults] = React.useState(false);
      const onSubmit = data => {
          list[0].status = "completed step";
          list[1].status = "completed step";
          list[2].status = "step";
          BusinessStep({items:list});
          cliente.CpfCnpj = data.cnpj;
          cliente.RazaoSocial = data.razaoSocial;
          setShowResults(true)
      }
      const handleChange = async(e) =>{
        if(e.cep.length == 8){
           var result = await correios.get(`/ws/${e.cep}/json/`);
           console.log(result.data);
           cep.cidade = result.data.localidade;
           cep.rua = result.data.logradouro;
           cep.bairro = result.data.bairro;
           cep.uf = result.data.uf;
        }

      }
      
    return showResults ? <Etapa3 /> : (
        <div>
           <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 690 }}>
              <Header as='h2' color='teal' textAlign='center'>
                <BusinessStep/>
              </Header>
              <Form size='large' onSubmit={handleSubmit(onSubmit)}>
                <Segment stacked>
                <Form.Group widths='equal'>
                 <input
                    fluid
                    iconPosition='left'
                    placeholder='Nome da empresa'
                    type='text'
                    name='razaoSocial'
                    ref={register}
                    required={true}
                    style={{marginLeft: 5}}
                 />

                <input
                    fluid
                    iconPosition='left'
                    placeholder='CNPJ/CPF'
                    type='text'
                    name='cnpj'
                    ref={register}
                    required={true}
                    style={{marginLeft: 5}}
                 />

                 <input
                    fluid
                    iconPosition='left'
                    placeholder='Cep'
                    type='text'
                    name='cep'
                    ref={register}
                    required={true}
                    onChange={handleSubmit(handleChange)} 
                    style={{marginLeft: 5}}
                 />
                 </Form.Group>
                 <Form.Group>
                 <input
                    fluid
                    iconPosition='left'
                    placeholder='Cidade'
                    type='text'
                    name='cidade'
                    value={cep.cidade}
                    ref={register}
                    required={true}
                    style={{marginLeft: 5}}
                 />
                 <input
                    fluid
                    iconPosition='left'
                    placeholder='Rua'
                    type='text'
                    name='rua'
                    value={cep.rua}
                    ref={register}
                    required={true}
                    style={{marginLeft: 5}}
                 />
                 <input
                    fluid
                    iconPosition='left'
                    placeholder='Bairro'
                    type='text'
                    name='bairro'
                    value={cep.bairro}
                    ref={register}
                    required={true}
                    style={{marginLeft: 5}}
                 />
                 <input
                    fluid
                    iconPosition='left'
                    placeholder='UF'
                    type='text'
                    name='uf'
                    value={cep.uf}
                    ref={register}
                    required={true}
                    style={{marginLeft: 5}}
                 />
                 <input
                    fluid
                    iconPosition='left'
                    placeholder='Numero'
                    type='text'
                    name='numero'
                    ref={register}
                    required={true}
                    style={{marginLeft: 5}}
                 />
                 </Form.Group>
 
                  <Button color='teal' fluid size='small'>
                    Proximo
                  </Button>
                </Segment>
              </Form>
              <Message>
              Já tenho uma conta? <a href='https://notifique-me.herokuapp.com/index.html'>Sign Up</a>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
     );  
}

export function  Etapa3(){
    const {register, handleSubmit} = useForm();
    const list = [
        {icon: 'user icon', description: 'Dados pessoais', status: "step"},
        {icon: 'building icon', description: 'Dados empresariais', status: " step"},
        {icon: 'user circle outline icon', description: 'Informações de login', status: "active step"},
      ];
    const [showResults, setShowResults] = React.useState(false);
    const onSubmit = data => {
        list[0].status = "completed step";
        list[1].status = "completed step";
        list[2].status = "completed step";
        BusinessStep({items:list});
        cliente.Login = data.login;
        cliente.Senha = data.senha;
        console.log(data);
        setShowResults(true);
    }
    return showResults ? <PassoFinal /> : (
        <div>
           <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 690 }}>
              <Header as='h2' color='teal' textAlign='center'>
                <BusinessStep/>
              </Header>
              <Form size='large' onSubmit={handleSubmit(onSubmit)}>
                <Segment stacked>
                <Message>Entre com seu usuario e senha:</Message>
                <Form.Group widths='equal'>
                 <input
                    fluid
                    icon='building icon'
                    iconPosition='left'
                    placeholder='Usuario'
                    type='text'
                    name='login'
                    ref={register}
                    required={true}
                    style={{marginLeft: 5}}
                 />

                <input
                    fluid
                    icon='user'
                    iconPosition='left'
                    placeholder='Senha'
                    type='text'
                    name='senha'
                    ref={register}
                    required={true}
                    style={{marginLeft: 5}}
                 />
                 </Form.Group>
 
                  <Button color='teal' fluid size='small'>
                    Proximo
                  </Button>
                </Segment>
              </Form>
              <Message>
              Já tenho uma conta? <a href='#'>Sign Up</a>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
     );  
}

export function PassoFinal(){
    const {register, handleSubmit} = useForm();
    const onSubmit = async data => {
        var response = await Api.post("/api/Cliente/v1", cliente);
        console.log(response.data.status);
        if(response.data.status == "OK"){
            window.location.assign("/sucesso");
        }
    }
    return (
        <div>
           <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 690 }}>
              <Header as='h2' color='teal' textAlign='center'>
                <BusinessStep/>
              </Header>
              
                <div class="ui success message">
                    <i class="close icon"></i>
                    <div class="header">
                    Termo de uso e responsabilidade.
                    </div>
                    <p>Olá programador do futuro, ao continuar você se compromete em respeitar os requisitos de uso da API Notifique-me.</p>
                     <p>1-	Usar a API apenas para notificar clientes de sua base</p>
                     <p>2-	Não enviar no Body das mensagens arquivos </p>
                     <p>3-	 Não usar termos impróprios de baixo calão para denegrir ou prejudicar terceiros</p>
                     <p>4-	Não produzir fake News</p>
                     <p>5-	Respeitar a Lei Geral de Proteção de Dados Pessoais</p>
                     <div class="header">Uso Gratuito</div>
                     <p>Sua chave de desenvolvedor terá permissão de fazer 50 requisições  por dia na API</p>
                     <p>A qualquer momento este limite pode aumentar ou diminuir</p>

                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Button color='teal' fluid size='small'>
                    Aceitar e criar conta
                  </Button>
                </form>
              <Message>
                Já tenho uma conta? <a href='https://notifique-me.herokuapp.com/index.html'>Sign Up</a>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
     );  
}

export default function (){
    document.title = "Cadastre para enviar 50 notificações por dia via WhatsApp Business";
    return <div class="mainDev"><Etapa1/></div>;
}

  