// DO NOT CHANGE THIS FILE

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'

import axios from 'axios';
axios.defaults.baseURL = 'https://probable-winner-979w9p79grrvf7wq-8080.app.github.dev/';

// DO NOT CHANGE THIS FILE

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)

// DO NOT CHANGE THIS FILE
