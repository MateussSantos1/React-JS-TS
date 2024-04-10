import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
const Obrigado = () => {

  const navigate = useNavigate ()
  const location = useLocation ()


  //Pegar os itens passados no componente checkoutbutton, no navigate state dele. agora pega - los  com o location :

  const items = location.state.cartItems


  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0)
  return (
    <div className='thank-you-page'>
        <h3>Itens Comprados: </h3>
      <ul>
      {items.map((item) => (

        //tambem verifico se for 1 unidade o complemeto será "unidade", caso contrário será "unidades":

        <li key={item.id}>$ {item.price} -- {item.name} -- {item.quantity} {item.quantity === 1 ? 'unidade' : 'unidades'}</li>
      ))}
      
      </ul>
      
      
      <h4>Total: ${totalPrice.toFixed(2)}</h4>
      <button onClick={() => navigate("/")}>Voltar ao catálogo</button>
      </div>
  )
}

export default Obrigado