// EX - 1: FORMULARIO :

// Crie um componente FormularioLogin com campos para nome de usuário e senha. 
// O componente deve utilizar o estado para armazenar os valores dos campos e lidar com a 
// submissão do formulário exibindo um alerta com o nome de usuário e senha inseridos.


import { useState } from "react";

const FormularioLogin = () => {


    const [usuario, setUsuario] = useState<string>("")

    const [senha, setSenha] = useState<string>("")

    const [enviado,setEnviadoSucesso] = useState<boolean>(false)


    const lidarComMudancasUsuario = (event: React.ChangeEvent<HTMLInputElement>) => {

        setUsuario (event.target.value)
        setEnviadoSucesso(false)
    }

    const lidarComMudancasSenha = (event: React.ChangeEvent<HTMLInputElement>) => {

      setSenha (event.target.value)
      setEnviadoSucesso(false)
    }

    const LidarSubmit = (event: React.FormEvent) => {

          event.preventDefault ()
          setEnviadoSucesso(true)
    }

  return (
    <div>
      <h3>Login do Usuario: </h3>
      <form onSubmit={LidarSubmit}>
        <input type="text" value={usuario} onChange={lidarComMudancasUsuario} />
        <input type="text" value={senha} onChange={lidarComMudancasSenha}/>
        <button type="submit">Entrar</button>
        {enviado && <p>Sucesso! User: {usuario} e Senha: {senha}</p>}
    </form>
    </div>

  )
}

export default FormularioLogin


// // Codigo otimizado: 


// import { useState } from "react";

// const FormularioLogin = () => {
//     const [dadosFormulario, setDadosFormulario] = useState({ usuario: "", senha: "" });
//     const [enviado, setEnviadoSucesso] = useState(false);

//     const lidarComMudancas = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = event.target;
//         setDadosFormulario(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//         setEnviadoSucesso(false);
//     };

//     const LidarSubmit = (event: React.FormEvent) => {
//         event.preventDefault();
//         setEnviadoSucesso(true);
//     };

//     return (
//         <div>
//             <h3>Login do Usuario:</h3>
//             <form onSubmit={LidarSubmit}>
//                 <input type="text" name="usuario" value={dadosFormulario.usuario} onChange={lidarComMudancas} />
//                 <input type="text" name="senha" value={dadosFormulario.senha} onChange={lidarComMudancas} />
//                 <button type="submit">Entrar</button>
//                 {enviado && <p>Sucesso! User: {dadosFormulario.usuario} e Senha: {dadosFormulario.senha}</p>}
//             </form>
//         </div>
//     );
// };

// export default FormularioLogin;

