import {useEffect, useMemo, useState} from 'react'

// EXERCICIO 1 -----> EXIBIR INFORMACOES DE UM USUARIO UTILIZANDO PROPS

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

// --MEMORIZAR CALCULOS COM "USEMEMO"
// EXERCICIOS 2 ----->
const fibbonaci = (n) => {
    if (n <=1){
        return n
    }

    return fibbonaci(n - 1) + fibbonaci(n - 2);
}
const FIbbonaciCalculadora = ({num}) =>{

        const fibResult = useMemo(() => fibbonaci(num), [num])

        return(
            <div><p>Fibbonaci de {num} é {fibResult}</p></div>
        )
}



// EXERCÍCIO ---- 3 

// CRIAR UM CUSTOM HOOK, QUE VEJA SE ESTÃOI ONLINE OU OFFLINE:

// Dessa vez, o HOOK VAI SER CRIADO INTERNAMENTE  NESSE ARQUIVO !!!


const useOnlineStatus = () =>{

    const[estaON, setEstaON] = useState(navigator.onLine)

    useEffect(() =>{

        const handleOnline  = () => setEstaON(true)
        const handleOffLine = () => setEstaON(false)

        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffLine)

        //limpeza
        return() => {
            window.addEventListener('online', handleOnline)
            window.addEventListener('offline', handleOffLine)
        }


    }, []);
    return estaON;
};
const IndicaStatusOnline = () =>{

    const estaON = useOnlineStatus();


    return (
        <div>
            <p>Você está: {estaON? 'Online' : 'Offline'}</p>
        </div>
    )
}






const Exercicios2 = () => {

    const userInfo = { name: "Fulano", jobTitle:"Pardaleiro"}



  return (
    <div>
        <h2>Exercício 1:</h2>
        <UsuarioInfo userInfo={userInfo}/>
        <h2>Exercício 2:</h2>
        <FIbbonaciCalculadora num={10}/>
        <h2>Exercício 3:</h2>
        <IndicaStatusOnline/>
        </div>
    
  )
}

export default Exercicios2