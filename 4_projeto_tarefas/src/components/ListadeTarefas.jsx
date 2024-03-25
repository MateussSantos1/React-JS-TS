import Tarefa from "./Tarefa"

const ListadeTarefas = ({tarefas, onDeletarTarefa, onMarcaConcluida}) => {
 
    if (tarefas.length === 0) {
        
        return <div>
            <h1>:(</h1>
            <h1>Poxaaaa</h1>
            <h1>Não Há Tarefas a serem exibidas</h1>
            <img  width="600px "src="https://media.tenor.com/QKc5tEW9Q3oAAAAM/romnewz-messi.gif"/>

        </div> 
    
    }
 
 
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