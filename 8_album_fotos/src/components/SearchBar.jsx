import React from 'react'

const SearchBar = () => {

const categorias = [
  "Natureza",
  "Pessoas",
  "Mundo Tech",
  "Animais",
  "Esportes"
]

  return (
    <div className="search-bar">

      <input type="text"  placeholder='pesquisar'/>
      <button>Pesquisar</button>
      <select>
      {categorias.map((categoria) =>(

        <option key={categoria}  value={categoria}>{categoria}</option>

      ))}
      </select>
      </div>
  )
}

export default SearchBar