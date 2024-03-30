import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {BrowserRouter} from "react-router-dom";


  // Meio que importando o react-router para esse main.jsx

  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Esse BrowserRouter siginica que esta usando o React Router no Projeto */}

    <BrowserRouter>

    <App />
    
    </BrowserRouter>
  </React.StrictMode>,
)
