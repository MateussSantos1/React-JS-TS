import React from 'react'

const SearchBar = ({setQuery, setCategoria, setAtivaPesquisa}) => {

const categorias = [
  "Natureza",
  "Pessoas",
  "Mundo Tech",
  "Animais",
  "Esportes"
]

  return (
    <div className="search-bar">

      <input type="text"  placeholder='Pesquisar' onChange={(e) => setQuery(e.target.value)}/>
      <button onClick={() => setAtivaPesquisa(true)}>Pesquisar</button>
      <select onChange={(e) => {
        setCategoria(e.target.value)
        setAtivaPesquisa(true)
      }}>
      {categorias.map((categoria) =>(

        <option key={categoria}  value={categoria}>{categoria}</option>

      ))}
      </select>
      </div>
  )
}

export default SearchBar