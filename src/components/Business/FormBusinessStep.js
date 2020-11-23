  
import React, { useState, useEffect } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Step } from 'semantic-ui-react';

var list = [
  {icon: 'user icon', description: 'Dados pessoais', status: " step"},
  {icon: 'building icon', description: 'Dados empresariais', status: "active step"},
  {icon: 'user circle outline icon', description: 'Informações de login', status: "active step"},
];

export default function  FormBussinesStep(props){
  console.log(props.items);
  if(props.items !== undefined){
    list = props.items;
  }

  return list.map((item_)=>{
    return <div class="ui steps">
    <div className={item_.status}>
      <i className={item_.icon}></i>
      <div class="content">
        <div class="description">{item_.description}</div>
      </div>
    </div>
  </div>
  })
}