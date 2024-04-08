import {useState, useEffect} from 'react'
import productsData from "../data/products_mock.json";
import Produto from './Produto';

const Catalogo = ({onAddToCart}) => {
  return (
    <div>
      <h1>Catálogo de Produtos</h1>
      <div className="product-container">

{/* Exibir os produtos do banco:  */}
    {productsData.map((product) => (
      <Produto key={product.id}
       product = {product}
       onAddToCart = {onAddToCart}
       />
    ))}

      </div>
    </div>
  )
}

export default Catalogo