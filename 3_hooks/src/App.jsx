import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EXuseEffect from './components/EXuseEffect'
import Timer from './components/Timer'
import ComponenteFilho from './components/ComponenteFIlho'
import { MeuContextoProvider } from './contexts/MeuContext'
import ValordoContexto from './components/ValordoContexto'
import Contador from './components/Contador'
import DisplayWindowSize from './components/DisplayWindowSize'
import Container from './components/Container'
import PerfilDeUsuario from './components/PerfilDeUsuario'
import CalculoPesado from './components/CalculoPesado'
import ContadorCallback from './components/ContadorCallBack'
function App() {

  return (
    <>
  {/* UseEffect */}
    <EXuseEffect/>
    <Timer/>

{/* UseContent */}
{/* --> Usado para aplicacoes de pequeno e medio porte, que necessitam de transferir os estados ENTRE OS COMPONENTES !!! */}



{/* Encapsulei os comonentes que terão acesso ao "MeuContext (No caso, apenas o ComponenteFilho e ValordoContexto, no momento !!! )" */}
<MeuContextoProvider>
<ComponenteFilho/>
<ValordoContexto/>
</MeuContextoProvider>


{/* useReducer (semelhantes ao useState )*/}
{/* Estados mais complexos (objetos com varias propiedades) (usariamos varios states  pra criar algo, que poderiam ser mais pratico ou REDUZIR as linhas de codigo */}





{/* Custom Hook ( Hook Customizado / Criado) */}
<DisplayWindowSize/>

{/* SLOTS e CHILDREN props */}
<Container>
    <h1>Título da section</h1>
    <p>Parágrafooooooo</p>
    <Contador/>
{/* OU SEJA, ESSE H1 E P E CONTADOR FICARAO DENTRO DA DIV ONDE TEM A CHILDREN LA NO COMPONENTE CONTAINER.JSX !!!!!! */}
</Container>

{/* SINCRONIZAR O ESTADO COM PROPS... */}
{/* prop => componente => chamada de API =>  resulta emm um dado*/}

<PerfilDeUsuario usuarioId={1}/>
<PerfilDeUsuario usuarioId={2}/>


{/* UseMemo e use CallBack */}
{/* Irão otimizar o processamento */}

{/* USE MEMO:  é mais usado para valores*/}
<CalculoPesado numero={5}/>

{/* USE CALL BACK  é mais usado para funções*/}
<ContadorCallback/>
    </>
  )
}

export default App
