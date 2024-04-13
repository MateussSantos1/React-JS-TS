import {useState} from 'react'

const TextInput = () => {
    const[text, setText] = useState<string>("")

    //pra saber se foi enviado !!!
    const[enviadoSucess, setEnviadoSucess] = useState<boolean>(false)


//event: React.ChangeEvent<HTMLInputElement> === Indica que o "event" irá sofrer uma mudança de estado,
// e essa mudança está utilizando um INPUT DO HTML !!!


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        setText(event.target.value)

    }

    const handleSubmit = (event: React.FormEvent,) => {
        event.preventDefault()

        console.log(`Formulário enviado ! Valor: ${text}` )
        setEnviadoSucess(true)
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <p>Valor atual : {text}</p>
        <button type='submit'>Enviar</button>
        {enviadoSucess && <p>Formulário enviado com sucesso!</p>}
    </form>
  )
}

export default TextInput