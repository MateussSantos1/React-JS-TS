const Tarefa = ({tarefa, onDeletar, onMarcar}) => {
  return (
    <li>
        <span onClick={onMarcar} style={{textDecoration: tarefa.done ? "line-through" : "none"}}  >{tarefa.text}</span>
        <button onClick={onDeletar}>Remover</button>
    </li>
  )
}

export default Tarefa