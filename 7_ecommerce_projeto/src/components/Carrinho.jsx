import React from 'react'
import CartItem from './CartItem'
const Carrinho = ({cartItems, onUpdateCart}) => {
  return (
    <div>
      <h1>Carrinho</h1>
      {cartItems.length === 0 ? <p>Não há itens no carrinho !</p> : (
      <ul>
        {cartItems.map((item) => (
          <CartItem item={item} onUpdateCart={onUpdateCart}/>
        ))}
      </ul>
      )}
    </div>
  )
}

export default Carrinho