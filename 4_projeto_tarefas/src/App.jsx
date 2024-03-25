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


    const marcaConcluida = (tarefaId) =>{

        {/* MAP exibe dados ou dados modificados !!!, no caso, dados modificados !!! */}


      //  Se o id da task for igual ao taskId passado, mantem os dados das outras tasks (...tarefas, e vai inverter o valor do status ( no caso, referenciado pelo done , MAS SE O TASKID não bater com o id da tarefa, NÃO SE FAZ ALTERAÇÃO NENHUMA !!!! ) )   


      setTarefas(tarefas.map((tarefa) => tarefa.id === tarefaId ? {...tarefa, done: !tarefa.done} : tarefa));

    }



  return (
    <>
      <h1>Lista de Tarefas</h1>

    {/* PASSAR O ADDTAREFA PARA O TAREFA INPUTTTT */}

      <TarefaInput onAddTarefa={addTarefa}/>
      <ListadeTarefas tarefas={tarefas} onDeletarTarefa={deletarTarefa} onMarcaConcluida={marcaConcluida}/>
    </>
  )
}

export default App
