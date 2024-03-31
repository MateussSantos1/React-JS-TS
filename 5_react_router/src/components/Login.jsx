import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {

//useNavigate irá redirecionar o usuário de URL !!!

const [username, setUsername] = useState("")

const navigate = useNavigate ();

const handleLogin = (event) => {

    event.preventDefault();

    console.log(`O usuário ${(username)} logou com sucesso!`);
   
//    O 'navigate' ira redirecionar para a página '/' ou melhor, 'home', após motrar o log do console: 
   
    navigate("/");
}

  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>

            {/* input que pega o valor do 'username' e irá modificar esse valor quando é modificado */}
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
        />
        <button type='submit'>Entrar</button>
        </form>
    </div>
  )
}

export default Login