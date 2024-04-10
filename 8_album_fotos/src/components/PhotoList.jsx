import React from 'react'
import Foto from './Foto'
const PhotoList = ({fotos}) => {
  return (
    <div className="album">
      {fotos.map((foto) => (

        <Foto key={foto.id} dados={foto}/>
      ))}
    </div>
  )
}

export default PhotoList