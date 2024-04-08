import React, { useState } from 'react'

// recebe o produto e a funcao addtocart
const Produto = ({product, onAddToCart}) => {

  const [quantity, setQuantity] = useState(1)

  return (
    <div className='product'>
        <img src={product.image} alt={product.name} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <div className="botao-carrinho">
            <select name="" id="">
                <option value="">1</option>
            </select>

            <button onClick={() => onAddToCart(product, quantity)}>Adicionar ao Carrinho</button>
        </div>
    </div>
  )
}

export default Produto