import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import Catalogo from './components/Catalogo'
import Carrinho from './components/Carrinho'
import Obrigado from './components/Obrigado'
function App() {


  return (
    <BrowserRouter>
        <nav>
          <Link to="/">Catálogo</Link>
          <Link to="/cart">Carrinho</Link>
        </nav>
        <div className="container">
          <Routes>
            <Route path='/' element={<Catalogo/>}></Route>
            <Route path='/cart' element={<Carrinho/>}></Route>
            <Route path='/obrigado' element={<Obrigado/>}></Route>
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
