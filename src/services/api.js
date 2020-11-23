import React, { useState  } from 'react';
import axios from 'axios';

const api = axios.create({baseURL : 'https://notifique-me.herokuapp.com'});
export default api;