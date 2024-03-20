import {useEffect, useState} from 'react'

const EXuseEffect = () => {

    // UseEffect -> Executa algo baseado em Algo

    // Como por exemplo, A mudanca de um valor, carregamento de paginas

const [contador, setContador] = useState(0);

//Porque usar um useState??? -> 
//POIS A ALTERAÇÃO DE UM "useState" RENDERIZA COMPONENTE(S) DO APP !!!!!
    useEffect(()=>{


        document.title = `Você clicou ${contador} vezes!!`;
    })
  return (
    <div>
        <p>voce clicou {contador} vezes !!</p>
        <button onClick={() => setContador(contador +1 )}></button>
    </div>
  )
}

export default EXuseEffect


// PESQUISAR MAIS SOBRE USER EFFECT !!!!!!