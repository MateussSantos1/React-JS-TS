import React, { useState } from 'react'

// recebe o produto e a funcao addtocart
const Produto = ({product, onAddToCart}) => {

  const [quantity, setQuantity] = useState(1)

  return (
    <div className='product'>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <div className="botao-carrinho">

          {/* Alterar o setQUantity para o novo valor recebido: */}
            <select onChange={(e) => setQuantity(parseInt(e.target.value))}>

              {/* adicionando até 10 options !!! */}
                {[...Array(10).keys()].map((x) => (
                  <option key={x+1} value={x+1}>{x+1}</option>
                ))}
            </select>

            <button onClick={() => onAddToCart(product, quantity)}>Adicionar ao Carrinho</button>
        </div>
    </div>
  )
}

export default Produto