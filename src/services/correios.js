import React, { useState  } from 'react';
import axios from 'axios';

const correios = axios.create({baseURL : 'https://viacep.com.br'});
export default correios;