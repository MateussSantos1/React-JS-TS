import {useState} from 'react';

const InfoUserFormulario = () => {
// VARIÁVEISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) =>{


      // event.preventDefault(); PREVINE OS COMPORTAMENTOS PADRÃO DO HTML E NAVEGADORES !!!!
      event.preventDefault();

      //AGORA DA PRA ACESSAR 'API' VIA FETCH ou AXIOS

      console.log(name, email);

    }



  return (
    <form onSubmit={handleSubmit}>
        {/* //DINAMIZANDO O 'name' junto com o estado atual (useState!!!) */}
        
        <input type="text"
         value={name}
          onChange={(e) => setName(e.target.value)}
           placeholder='Digite o seu nome:  '
           
           />
 {/* //DINAMIZANDO O 'email' junto com o estado atual (useState!!!) */}
        <input type="email"
         value={email}
          onChange={(e) => setEmail(e.target.value)}
           placeholder='Digite o seu email:  '
           
           />
        <button type="submit">Enviar</button>
        {name}
    </form>
 
  );
}

export default InfoUserFormulario;