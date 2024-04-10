import React from 'react'

const FotoAmpliada = ({foto, setFotoAmpliada}) => {
  return (
    <div className="foto-ampliada-backdrop">
      <div className="foto-ampliada-container">
        {/* traz a foto em tamanho real o f=urls.regular !!! */}
        <img src={foto.urls.regular} alt={foto.alt_description}/>
        <p className='fechar' onClick={(()=> setFotoAmpliada(null))}>Fechar</p>
      </div>

    </div>
  )
}

export default FotoAmpliada