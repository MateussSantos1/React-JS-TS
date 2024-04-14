import {useLocation, useNavigate} from "react-router-dom"
import { Alimento, nomeAlimentos, quantidadeporPessoas } from "../types/Alimento"
import styles from './ResultChurrasco.module.css'

type ResultadosChurrasco = {
  pessoas: number,
  alimentosSelecionados: Alimento[],
}


const ResultChurrasco = () => {

  // location para pegar os dados dos alimentos da pagina de calc que forma enviadas pelo state
  const location = useLocation() ;
  const navigate = useNavigate();

  const state: ResultadosChurrasco  = location.state;


  const reiniciar = () =>{

    navigate("/")

  }

  const totalporalimento = state.alimentosSelecionados.reduce(
    (acumulador, alimento) =>{


    //quantidade ideal de gramas para cada pessoa comer  * quantidade de pessoas, por fim converte essa quantidade em quilos
    acumulador[alimento] = (quantidadeporPessoas[alimento] * state.pessoas) / 1000
    return acumulador;
  }, {} as Record <Alimento, number>)





  return (
    <div className={styles.container}>
      
      <h2 className={styles.title}>Resultado para {state.pessoas} pessoas: </h2>
      {state.alimentosSelecionados.map((alimento) => (

                          //para aparecer o valor formatado com base no valor recebido !!
        <p key={alimento} className={styles.resultText}>{nomeAlimentos[alimento]}: {totalporalimento[alimento]} total kg</p>

      ))}

      <button onClick={reiniciar} className={styles.resetButton}>Reiniciar</button>
      
      
      </div>
  )
}

export default ResultChurrasco