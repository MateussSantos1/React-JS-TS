
import './App.css'

import {Routes, Route, Link, NavLink} from "react-router-dom"
import Home from './components/Home'
import Sobre from './components/Sobre'
import Contato from './components/Contato'
import Login from './components/Login'
function App() {

  return (
    <>
{/* 1 passo - Configurações Iniciais */}

<nav>
  <ul >
    <li><Link to="/">Home</Link></li>
    <li><Link to="/sobre">Sobre</Link></li>
    <li><Link to="/contato">Contato</Link></li>

    {/* 2 - NavLink */}

    {/* SE for ativa, recebe essa classe "active-link" !!! */}

    {/* Essa mudança em tempo real só pode ser feita usando esse NAVlINK !!! */}

    <li><NavLink className={({isActive}) => (isActive ? 'active-link' : '')} to="/contato">Contatoo_nav_link</NavLink></li>



    {/* 3 - UseNavigate */}

    <li>
      <NavLink to="/login">Login</NavLink>
    </li>

  </ul>
</nav>






{/* ROUTES irá englobar várias rotas/páginas da aplicação */}
    <Routes>

      {/* o '/' é a página principal ( a home) e ela irá acessar o componente HOME !!! */}

    <Route path="/" element={<Home/>}/>

    <Route path="/sobre" element={<Sobre/>}/>

    <Route path="/contato" element={<Contato/>}/>



      {/* 3 - UseNavigate */}

      <Route path='/login' element={<Login/>}/>

    </Routes>


{/* O QUE TÁ FORA DE ROUTES SEMPRE É REPETIDO !!! */}

{/* EXEMPLO.: */}
<p style={{color: "red"}}>RodaPé</p>






    </>
  )
}

export default App
