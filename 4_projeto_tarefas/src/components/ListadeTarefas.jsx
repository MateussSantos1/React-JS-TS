import Tarefa from "./Tarefa"

const ListadeTarefas = ({tarefas, onDeletarTarefa, onMarcaConcluida}) => {
  return (
    <ul>

        {/* MAP exibe dados ou dados modificados !!!, no caso, apenas dados mesmo */}
        {tarefas.map((tarefa) => (

            <Tarefa key={tarefa.id} tarefa={tarefa} onDeletar={() => onDeletarTarefa(tarefa.id) }
            
            onMarcar={() => onMarcaConcluida(tarefa.id)}
            />

        ))}
    </ul>
  )
}

export default ListadeTarefas