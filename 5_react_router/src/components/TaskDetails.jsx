import { useParams } from "react-router-dom"

const TaskDetails = () => {

const {taskId} = useParams()

  return (
    <div>
        <h4>Detalhes da Tarefa</h4>
        <p>Vendo a tarefa: {taskId}</p>
        </div>
  )
}

export default TaskDetails