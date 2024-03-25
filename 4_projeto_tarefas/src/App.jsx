import { useState, useEffect } from "react";

import TarefaInput from "./components/TarefaInput"
import ListadeTarefas from "./components/ListadeTarefas"
function App() {

const [tarefas, setTarefas] = useState([]);

const addTarefa = (tarefa) => {


    // ID, Título e concluida


    // AGORA, VAMOS PRESERVAR AS ANTIGAS TAREFAS E, NO FIM,  ADICIONAMOS UMA NOVA TAREFA:

    setTarefas([...tarefas,{id: Date.now(), text: tarefa, concluida:false}]);


    //local storage

};

// AS TAREFAS QUE IRÃO PERMANECER SÃO TODAS COM O ID DIFERENTE DAQUELA TAREFA EM ESPECIFICO QUE EU QUERO REMOVER
    const deletarTarefa = (tarefaId) =>{
  setTarefas(tarefas.filter((tarefa) => tarefa.id !== tarefaId));

    };



  return (
    <>
      <h1>Lista de Tarefas</h1>

    {/* PASSAR O ADDTAREFA PARA O TAREFA INPUTTTT */}

      <TarefaInput onAddTarefa={addTarefa}/>
      <ListadeTarefas tarefas={tarefas} onDeletarTarefa={deletarTarefa}/>
    </>
  )
}

export default App
