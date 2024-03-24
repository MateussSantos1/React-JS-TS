import {useEffect} from 'react'

// EXERCICIO 1 - EXIBIR INFORMACOES DE UM USUARIO UTILIZANDO PROPS

const UsuarioInfo = ({userInfo}) => {

    useEffect(() => {
        document.title = `${userInfo.name} - ${userInfo.jobTitle}`;

    },[userInfo])


    return(
        <div>
            <h1>Nome: {userInfo.name}</h1>
            <h5>Profissão: {userInfo.jobTitle}</h5>
        </div>
    )



}



const Exercicios2 = () => {

    const userInfo = { name: "Fulano", jobTitle:"Pardaleiro"}



  return (
    <div>
        <h2>Exercicios 1</h2>
        <UsuarioInfo userInfo={userInfo}/>
        </div>
    
  )
}

export default Exercicios2