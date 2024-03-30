
import './App.css'

import {Routes, Route, Link, NavLink} from "react-router-dom"
import Home from './components/Home'
import Sobre from './components/Sobre'
import Contato from './components/Contato'
function App() {

  return (
    <>
{/* 1 passo - Configurações Iniciais */}

<nav>
  <ul >
    <li><Link to="/">Home</Link></li>
    <li><Link to="sobre">Sobre</Link></li>
    <li><Link to="contato">Contato</Link></li>
  </ul>
</nav>






{/* ROUTES irá englobar várias rotas/páginas da aplicação */}
    <Routes>

      {/* o '/' é a página principal ( a home) e ela irá acessar o componente HOME !!! */}

    <Route path="/" element={<Home/>}/>

    <Route path="/sobre" element={<Sobre/>}/>

    <Route path="/contato" element={<Contato/>}/>


    </Routes>


{/* O QUE TÁ FORA DE ROUTES SEMPRE É REPETIDO !!! */}

{/* EXEMPLO.: */}
<p style={{color: "red"}}>RodaPé</p>






    </>
  )
}

export default App
