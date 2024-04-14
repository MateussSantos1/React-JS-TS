import {useState} from 'react'
import useIntervalo from '../hooks/useIntervalo'
const ContadorIntervalo = () => {


    const[contador, setContador] = useState(0)


    useIntervalo(
        () => {
            setContador(contador + 1)
        }, 
        1000

    )
  return (
    <div>
        <h1>{contador}</h1>
    </div>
  )
}

export default ContadorIntervalo