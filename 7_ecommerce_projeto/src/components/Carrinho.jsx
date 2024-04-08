import React from 'react'

const Carrinho = ({cartItems}) => {
  return (
    <div>
      <h1>Carrinho</h1>
      {cartItems.length === 0 ? <p>Não há itens no carrinho !</p> : (
      <ul>
        {cartItems.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      )}
    </div>
  )
}

export default Carrinho