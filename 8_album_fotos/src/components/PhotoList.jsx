import React from 'react'
import Foto from './Foto'
const PhotoList = ({fotos, setFotoAmpliada}) => {
  return (
    <div className="album">
      {fotos.map((foto) => (

        <Foto key={foto.id} dados={foto} setFotoAmpliada={setFotoAmpliada}/>
      ))}
    </div>
  )
}

export default PhotoList