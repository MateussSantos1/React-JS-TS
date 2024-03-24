import {useState, useEffect} from 'react'

const PerfilDeUsuario = ({usuarioId}) => {

    const [usuario, setUsuario] = useState(null);


    useEffect(()=>{
//useEffect() pois só irá chamar a API uma ÚNICA VEZ!!!

        //Função para buscar dados
        const buscarUsuario = async() => {

                // resposta assícrona
            const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${usuarioId}`);


            // CONVERNTENDO DE JSON PARA JAVA SCRIPT
            const dadosUsuario = await resposta.json()


            // AGORA PEGA O DADO DESSE dadosUsuario e joga PRO SETUSUARIO, APÓS, USUARIO

            setUsuario(dadosUsuario);

        };


        // SE usuarioID existe, executa a busca da funcao assync
        if(usuarioId) {
            buscarUsuario()
        }
  }, [usuarioId])


  return (
    // CONDICIONAL: SE TIVER USUARIO, EXIBA O NOME. CASO CONTRARIO, EXIBA A MENSAGEM DE CARREGAMENTO !!!!
    <div>{usuario ?
         (<div>
            <h1>Olá, {usuario.name} !!!</h1>
            <p>{usuario.email}</p>
            </div>) 
         :
          (<p>Carregando perfil do usuario......</p>) }</div>
  )
}

export default PerfilDeUsuario