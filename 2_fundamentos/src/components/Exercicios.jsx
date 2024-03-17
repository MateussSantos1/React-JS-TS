import {useState} from 'react'


//----------Exercicio n1:

const Saudacao = ({nome}) => {
  return (
    <p>Olá, {nome}</p>
  )
}
// ---------------- Exercicio n2

const Contador = () => {
const [contando, setContando] = useState(0);
  return(
    <div>
      <p>Contagem em {contando} cliques</p>
      <button onClick={() => setContando(contando  + 1)}>Subir</button>
      <button onClick={() => setContando(contando - 1)}>Diminuir</button>
      <button onClick={() => setContando(contando - contando)}>Zerar Contagem !!!</button>
    </div>
  )
}
// -----------------------------

// ---------------Exercicio  n3 
const TaskList = ({ tasks }) => {
  if (tasks.length === 0) {
    return <p>Não há tarefas a mostrar.</p>;
  }
  return (
    <ol>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ol>
  );
};

const tasks = [
  { id: 1, text: "Comprar leite" },
  { id: 2, text: "Estudar React" },
];





const Exercicios = () => {
  return (
    <div>
      
    <h2>Exercicio 1: </h2>
    <Saudacao nome="Mateooo"/>

    <h2>Exercicio 2: </h2>
    <Contador/>

    <h3>Exercicio 3: </h3>
    {/* |<ToDoList tarefa={[]}/> */}
    <TaskList tasks={tasks} />
    </div>
    
  )
}

export default Exercicios