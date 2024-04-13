
import './App.css'
import Greeting from './components/Greeting'
import Contador from './components/Contador'
import TextInput from './components/TextInput'


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



    </>
  )
}

export default App
