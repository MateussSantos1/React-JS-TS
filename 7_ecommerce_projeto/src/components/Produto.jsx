import React from 'react'

const Produto = ({product}) => {
  return (
    <div className='product'>
        <img src={product.image} alt={product.name} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <div className="botao-carrinho">
            <select name="" id="">
                <option value="">1</option>
            </select>

            <button>Adicionar ao Carrinho</button>
        </div>
    </div>
  )
}

export default Produto