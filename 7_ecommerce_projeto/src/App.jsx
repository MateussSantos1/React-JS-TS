import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react'
import Catalogo from './components/Catalogo'
import Carrinho from './components/Carrinho'
import Obrigado from './components/Obrigado'

import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {

  const[cartItems, setCartItems] = useState([])


  //ADD : 
  const handleAddCart = (product, quantity) => {

    setCartItems((prevItems) => {

      //se nao existir no carrinho, adiciona 1 item
      // se existir, eu irei somar a quantidade já adicionada lá !!!

      //verificar se existe:

      const itemExists = prevItems.find((item) => item.id === product.id) 




      //agora se existir faco algo, se nao existir, faco outra coisa:


      if (itemExists){
        toast.info(`Quantidade do item "${product.name}" atualizada !`)
        return prevItems.map((item) => item.id === product.id ? {...item, quantity: item.quantity + quantity} 
        : item)

      }

      else{

        toast.success(`${product.name} adicionado com sucesso!!!`)

        //se nao existir ainda, so adicionar no carrinho
        return [...prevItems, { ...product, quantity}];
      }


    })

  }

  return (
    <BrowserRouter>
        <nav>
          <Link to="/">Catálogo</Link>
          <Link to="/cart">Carrinho</Link>
        </nav>
        <div className="container">
          <Routes>
            <Route path='/' element={<Catalogo onAddToCart={handleAddCart}/>}></Route>
            <Route path='/cart' element={<Carrinho cartItems={cartItems}/>}></Route>
            <Route path='/obrigado' element={<Obrigado/>}></Route>
          </Routes>
        </div>

        //barrinha
        <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        >

        </ToastContainer>
    </BrowserRouter>
  )
}

export default App
