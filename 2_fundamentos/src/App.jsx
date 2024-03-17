
import './App.css';


import BemVindo from './components/BemVindo';
import Botao from './components/Botao';
import Cachorro from './components/Cachorro';
import Contador from './components/Contador';
import Descricao from './components/Descricao';
import Exemplo2 from './components/Exemplo2';
import Formulario from './components/Formulario';
import InfoUserFormulario from './components/InfoUserFormulario';
import ListaNumber from './components/ListaNumber';
import LoginButao from './components/LoginButao';
import MeuExemplo from './components/MeuExemplo';
import Pai from './components/Pai';
import PaiFunction from './components/PaiFunction';
import Perigo from './components/Perigo';
import RenderCondicional from './components/RenderCondicional';
import Variaveis from './components/Variaveis';
function App() {

  return (
    <>
    {/* Criando o Primeiro Componente */}
    <BemVindo/>
    {/* Exp. do JSX */}
    <Variaveis/>
    {/* Componente dentro de Componente - Hierarquia */}
    <Pai></Pai>
    {/* Usando Propiedades */}
    <Descricao nome = "Fulano de Souza" idade = {30}/>
    {/* Usando Propiedades DESESTRUTURADAS !!! */}
    <Cachorro nome = "Totó" raca = "Pastor Alemao"/>


    {/* UseStates --> Hook */}
    <Contador/>

    
    {/* Multiplos useStates em um componente! */}
    <InfoUserFormulario/>

    {/* Eventosss */}
    <Botao/>

    {/* Componente FIlho que executa a funcao de um componente PAI */}
    <PaiFunction/>

      {/*Eventos de FORMs  */}
    <Formulario/>


    {/* Renderização condicional */}

    <RenderCondicional/>
    {/* <RenderCondicional user={'Matheus'}/> */}


    {/* Expressão Ternária !!! */}

      <LoginButao logado={false}/>
      {/* OUUUUUUU */}

      <LoginButao logado={true}/>

      {/* RENDER NULOOOO */}
      <Perigo perigo={true}/>
      {/* se fosse 'false' ou se tivesse algum texto, nao apareceria!! */}
    
    
      {/* LISTAS e CHAVES */}
      <ListaNumber numeros={[1, 2, 3, 4, 5]}/>
    
    </>

    
  )
};

export default App
