const Tarefa = ({tarefa, onDeletar}) => {
  return (
    <li>
        <span>{tarefa.text}</span>
        <button onClick={onDeletar}>Remover</button>
    </li>
  )
}

export default Tarefa