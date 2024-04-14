import React from 'react'
import ResultChurrasco from '../components/ResultChurrasco'
import bgImagem from '../assets/bg-2.jpg'
const Resultado = () => {
  return (
    <div className='page-container' style={{backgroundImage: `url(${bgImagem})`} }>
      <h1>Resultado do Churrasco:</h1>
      <ResultChurrasco/>
      
      </div>
  )
}

export default Resultado