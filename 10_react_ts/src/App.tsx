
import './App.css'
import Greeting from './components/Greeting'
import Contador from './components/Contador'
import TextInput from './components/TextInput'
import ContadorIntervalo from './components/ContadorIntervalo'
import FormularioLogin from './components/FormularioLogin'
import ListaCompras from './components/ListaCompras'
import UsoLocalStorage from './components/UsoLocalStorage'
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



    {/* Custom Hooks com TS: */}


        <ContadorIntervalo/>


    {/* Exercicio 1 : Forms Login  */}

    <FormularioLogin/>


    {/* Exercicio 2 : Lista de Compras */}

    <ListaCompras/>


    {/* Exercicio 3 : UseLocalStorage:  */}
    <UsoLocalStorage/>
    </>
  )
}

export default App
