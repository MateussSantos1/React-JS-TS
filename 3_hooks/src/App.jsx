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


<Contador/>


    </>
  )
}

export default App
