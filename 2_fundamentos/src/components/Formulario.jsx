import {useState} from 'react'

const Formulario = () => {

    const [valor, setValor] = useState("");

    const handleSubmit = (event) =>{
        //manipulacao de dados
        //validacao de dados
        //envio ao servidor pela API
        // loading
        //chamada da funcao de mensagens de erro/bem sucedido

        event.preventDefault()

        console.log("Formulário enviado :", valor);  'Formulário enviado: ' | 'teste'
    }
  return (
    <form onSubmit={handleSubmit}>

        <input type="text"
         value={valor} 
         onChange={(e) => setValor(e.target.value)}
          placeholder='Preencha o campo: '/>

        <button type='submit'>Enviar</button>
    </form>
  )
}

export default Formulario;