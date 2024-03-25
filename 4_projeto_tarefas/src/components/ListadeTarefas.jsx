import Tarefa from "./Tarefa"

const ListadeTarefas = ({tarefas, onDeletarTarefa}) => {
  return (
    <ul>
        {tarefas.map((tarefa) => (

            <Tarefa key={tarefa.id} tarefa={tarefa} onDeletar={() => onDeletarTarefa(tarefa.id) }/>

        ))}
    </ul>
  )
}

export default ListadeTarefas