import { useState, useEffect } from "react";

import TarefaInput from "./components/TarefaInput"
import ListadeTarefas from "./components/ListadeTarefas"
function App() {



// //////////////////vamo pegar da local storage 
const [tarefas, setTarefas] = useState(
  //converte de string para array / json
  JSON.parse(localStorage.getItem('tarefas')) || []);



useEffect(() => {

//  QUANDO UMA TAREFA FOR COMPLETADA OU REMOVIDAD, VAMOS PERSISTIR ELA !!!! COM ESSE LOCAL STORAGE
  //stringy transforma array/json em string
    localStorage.setItem('tarefas', JSON.stringify(tarefas));

}, [tarefas])







const addTarefa = (tarefa) => {


    // ID, Título e concluida


    // AGORA, VAMOS PRESERVAR AS ANTIGAS TAREFAS E, NO FIM,  ADICIONAMOS UMA NOVA TAREFA:

    setTarefas([...tarefas,{id: Date.now(), text: tarefa, concluida:false}]);


    //local storage.setItem ---- SALVAR LOGO APÓS A ADICAO DA TAREFA !!!
    localStorage.setItem('tarefas', JSON.stringify(tarefas));

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
      <h1>Lista de Tarefas : </h1>

    {/* PASSAR O ADDTAREFA PARA O TAREFA INPUTTTT */}

      <TarefaInput onAddTarefa={addTarefa}/>
      <ListadeTarefas tarefas={tarefas} onDeletarTarefa={deletarTarefa} onMarcaConcluida={marcaConcluida}/>
    </>
  )
}

export default App
