
import './App.css'
import Greeting from './components/Greeting'
import Contador from './components/Contador'
import TextInput from './components/TextInput'
import ContadorIntervalo from './components/ContadorIntervalo'
import FormularioLogin from './components/FormularioLogin'
import ListaCompras from './components/ListaCompras'
import UsoLocalStorage from './components/UsoLocalStorage'
import ContadorURED from './components/ContadorURED'
import { TemaProvider } from './contexts/TemaContext'
import BarraFerramentas from './components/BarraFerramentas'
function App() {


  return (
    <>
      <h1>React com TS</h1>

      {/* 1 - Componente Funcional com TS : */}

      <Greeting name='Mateussss' />

      {/*  2 - Hooks com tipos: */}

      <Contador/>


      {/* 3 - Manipulaçao de Eventos com Tipos: */}

        <TextInput/>



    {/* 4 - Custom Hooks com TS: */}


        <ContadorIntervalo/>


    {/* 5 - Exercicio 1 : Forms Login  */}

    <FormularioLogin/>


    {/* 5 - Exercicio 2 : Lista de Compras */}

    <ListaCompras/>


    {/* 5 -  Exercicio 3 : UseLocalStorage:  */}
    <UsoLocalStorage/>

    {/* 6 - useReducer com TS:  */}

    <ContadorURED/>

    {/* 7 - Context API com TS: */}
    <TemaProvider>

      <BarraFerramentas/>
    </TemaProvider>
    </>
  )
}

export default App
