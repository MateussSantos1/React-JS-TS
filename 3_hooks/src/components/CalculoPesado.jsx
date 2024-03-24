import {useMemo} from 'react'

const CalculoPesado = ({numero}) => {

// ;;;;;;;;;;;;;;;;;;;;
    const resultadoCalculoPesado =  useMemo(() => {
        // Com esse UseMemo, a operação não é feita repentinamente, mas sim apenas quando for necessário !!!!!!!!! evitando uso desnecessário de memória !!!
        return operacaoPesada(numero)
    }, [numero]);
    // ;;;;;;;;;;;;;;;;;;;;;;;;

    // OUUUUUU
    //  const resultadoCalculoPesado = 5000;
  return (
    <div>resultado: {resultadoCalculoPesado}</div>
  )
}

const operacaoPesada = (num) => {

    console.log("Realizando operacao pesada...");
    return num * 100000;

}

export default CalculoPesado