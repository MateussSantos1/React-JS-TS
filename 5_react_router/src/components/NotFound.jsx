import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div>
        <h1 className='erroo'>Error 404: </h1>
        <h2>Página Inexistente ou Fora do Ar !!!</h2>
        <button className='volta'><Link to="/">Voltar para a Home !!!</Link></button>
    </div>
  )
}

export default NotFound