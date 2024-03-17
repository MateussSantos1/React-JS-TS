import React from 'react'

const Perigo = ({perigo}) => {

    if(!perigo){
        // se "perigo" for diferente de true, não retorna nada !!!
        return null;
    }
  return (
    <div>Perigo !!! Alguns erros foram encontrados !!!</div>
  )
};

export default Perigo