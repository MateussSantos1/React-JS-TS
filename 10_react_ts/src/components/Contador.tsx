import {useState, useEffect} from 'react'

const Contador = () => {

    // Tem que tipar o  valor que o useState irá receber
    const [count, setCount] = useState<number>(0)


    //com essa condicional, eu travo a contagem com o valor mínimo de 0, assim, o valor NUNCA será negativo !!!
    if(count < 0) {
        setCount(0)
    }


    //quando o count sofrer efeito de mudança, irá avisar no log :
    useEffect(() => {
        console.log(`O valor atual do contador é : ${count} !!!`)
    }, [count]);



  return (
    <div>
        <p>Contagem em: </p>
        <p>{count}</p>
        {/* AUmentar o valor da contagem: */}
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>Aumentar</button>
        {/* Diminuindoo: */}
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>Diminuir</button>
    </div>
  )
}

export default Contador