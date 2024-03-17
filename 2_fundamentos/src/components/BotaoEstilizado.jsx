import React from 'react'

const BotaoEstilizado = () => {


    const estilodoBotao = {
    backgroundColor: "red",
    color: "white",
    padding: "15px 32px",
    cursor: "pointer",

    };



  return (
    <button style={estilodoBotao} >Clique aqui</button>
  )
}

export default BotaoEstilizado