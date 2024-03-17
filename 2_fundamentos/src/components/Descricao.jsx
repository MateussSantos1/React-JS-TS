import React from 'react'
// const Descricao = (AQUI DENTRO SE COLOCA PROPIEDADES!!!!) => {
const Descricao = (props) => {

    //props = {}
    //propiedades -> chaves dos valores
    //props.nome = "Mateus"
  return (
    <div>
        <p>Seu nome é {props.nome}</p>
        <p>Sua idade é {props.idade}</p>
    </div>
  )
}

export default Descricao