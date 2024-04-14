import {useReducer} from 'react'
import { counterReducer } from '../reducers/counterReducer'
//useReducer é usado pra não poluir o código de um componente !

const ContadorURED = () => {


                                //Passa o arquivo de reducao(counterReducer) 
    const [count, acao] = useReducer(counterReducer, 0)

    if (count < 0) {
        acao({type: 'resetar'})
    }

  return (
    <div>
        <p>Contador: {count}</p>
        <button onClick={() => acao({type: "increment"})}>+1</button>  
        <button onClick={() => acao({type: "decrement"})}>-1</button>
        <button onClick={() => acao({type:"double"})}>x2</button>
        </div>
  )
}

export default ContadorURED