
import { useContext } from "react"
import { UsuarioContext } from "../../contexts/usuario"
import { Link, NavLink, Outlet } from "react-router-dom"


const Alunos = () => {
  return (
    <div>
        <div>
            <h1>LOGO</h1>
        </div>
        <h4>Quantidade de Alunos: {0}</h4>
        <h4>Relação de Aunos:</h4>
        <ul>
            <li>Exemplo 1</li>
            <li>Exemplo 1</li>
            <li>Exemplo 1</li>
        </ul>
        <button type="submit" >Cadastrar Aluno</button>



        <div>
        <Outlet/>
        </div>
    </div>
  )
}

export default Alunos