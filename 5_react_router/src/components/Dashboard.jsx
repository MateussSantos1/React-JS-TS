import React from 'react'
import { Link,NavLink, Outlet } from 'react-router-dom'; // Importando o componente Link do react-router-dom
const Dashboard = () => {
  return (
    <div>
        <h2>DashBoard</h2>
    <nav>
        <ul>
        <li>
            <NavLink to="profile">Perfil</NavLink>
          </li>
          <li>
            <NavLink to="settings">Configurações</NavLink>
          </li>
        </ul>
    </nav>

    <div>
        {/* Não dá pra criar uma rota dentro de outra rota, então utiliza-se o "Outlet" !!! */}
            {/* Então ele joga o conteúdo do Link selecionado dentro do outlet !!! */}
    <Outlet/>

    </div>

    </div>
  )
}

export default Dashboard