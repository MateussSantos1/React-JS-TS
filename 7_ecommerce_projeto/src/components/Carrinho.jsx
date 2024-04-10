import React from 'react'
import CartItem from './CartItem'
import CheckoutButton from './CheckoutButton'
const Carrinho = ({cartItems, onUpdateCart, onRemoveFromCart, setCartItems}) => {


  //calculando o total dos itens do carrinho:
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  // Pesquisar mais sobre o useReduce


  return (
    <div>
      <h1>Carrinho</h1>
      {cartItems.length === 0 ? <><p>Não há itens no carrinho !</p></>  : (
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} onUpdateCart={onUpdateCart} onRemoveFromCart={onRemoveFromCart}/>
        ))}

        <div className="total">
        <p>Total: ${totalPrice.toFixed(2)}</p>
        <CheckoutButton cartItems={cartItems} setCartItems={setCartItems}/>
        </div>

      </ul>
      )}
    </div>
  )
}

export default Carrinho