import React from 'react'

const Botao = () => {
    const handleClick = () => {
        console.log('Clicou!'); 
    };
  return (
  <button onClick={handleClick}>Clique em MIM !!!</button>
  );
}

export default Botao