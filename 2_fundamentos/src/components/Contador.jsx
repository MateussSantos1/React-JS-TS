import {useState} from 'react';
//o USE STATE NÃO VEM POR PADRÃO !!!
const Contador = () => {

//useState CONSULTA & ALTERA valores !!!!
const [count, setCount] = useState(1);

// [VARIAVEL, setVARIAVEL] para ALTERAR !!! (set ALTERA !!! colocar primeira letra maiuscula)

// VARIÁVEIS NAOO RENDERIZAM O COMPONENTE !!!
return (
    <div>Você clicou {count} vezes !!!

    <button onClick={() => setCount(count  + 1)}>Aumentar</button>
    </div>
  );
}

export default Contador