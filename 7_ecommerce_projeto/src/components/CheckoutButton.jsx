import React from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
const CheckoutButton = ({cartItems, setCartItems}) => {


  const navigate = useNavigate()

  const handleCheckout = () => {

    if (cartItems.length > 0){
      toast.success("Compra finalizada com sucesso !!!")

      //redireciona para a página de obrigado e ainda continua passando o carItems para  exibir no comprovante e, depois,  limpalos do carrinho !!!
      navigate ("/obrigado", {state: {cartItems}})

     setCartItems([])   //para limpar o carrinho
     } 
   
   
   else{toast.error("Seu carrinho está vazio !!!")}
     }


  return (
    <button onClick={handleCheckout}>Finalizar Compra</button>
  )
}

export default CheckoutButton