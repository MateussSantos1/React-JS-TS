
import './App.css'

import {Routes, Route, Link, NavLink} from "react-router-dom"
import Home from './components/Home'
import Sobre from './components/Sobre'
import Contato from './components/Contato'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Settings from './components/Settings'
import TaskDetails from './components/TaskDetails'
import NotFound from './components/NotFound'
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

    {/* 4 - Rotas Aninhadas : */}

    <Link to="/dashboard">Dashboard</Link>


  </ul>

    {/* 5- Rotas Dinâmicas :  */}
    <div>
      <h2>TArefas</h2>
      <Link to="/tasks/1">Tarefa 1 </Link>
      <Link to="/tasks/2">Tarefa 2</Link>
      <Link to="/tasks/3">Tarefa 3</Link>
    </div>


    {/* Rota 404 :  */}
    {/* Pagina inexistente !! */}
    <div>
      <h2>Itens</h2>
      <Link to="/itens/1">Item 1</Link>
    </div>


</nav>






{/* ROUTES irá englobar várias rotas/páginas da aplicação */}
    <Routes>

      {/* o '/' é a página principal ( a home) e ela irá acessar o componente HOME !!! */}

    <Route path="/" element={<Home/>}/>

    <Route path="/sobre" element={<Sobre/>}/>

    <Route path="/contato" element={<Contato/>}/>



      {/* 3 - UseNavigate : */}

      <Route path='/login' element={<Login/>}/>


      {/* 4 - Rotas Aninhadas : */}

      {/* Perceba que o ROuter 'profile' está dentro do de dashboard !!!! */}

    <Route path="/dashboard" element={<Dashboard/>}>
    <Route path="profile" element={<Profile/>}></Route>
    <Route path="settings" element={<Settings/>}></Route>
    </Route>


    {/* Rotas Dinamicas :  */}

    <Route path="/tasks/:taskId" element={<TaskDetails/>} ></Route>



    {/* Rota 404 : Página inexistente : */}

    {/* Esse asterisco '*' significa: qualquer coisa que não está definida nas rotas !!! */}
 <Route path='*' element={<NotFound/>}></Route>
    </Routes>


{/* O QUE TÁ FORA DE ROUTES SEMPRE É REPETIDO !!! */}

{/* EXEMPLO.: */}
<p style={{color: "red"}}>RodaPé</p>






    </>
  )
}

export default App
