
import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import PhotoList from './components/PhotoList'
import FotoAmpliada from './components/FotoAmpliada'
function App() {

  const [query, setQuery] = useState("")
  const[categoria, setCategoria] = useState("")
  const [fotos, setFotos] = useState([])

const  fetchData = async({query}, {categoria}) =>{

  const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY

  const response = await axios.get('https://api.unsplash.com/photos/random', {
    params: {
      client_id: apiKey,
      count: 10
    }
  }

)
//após receber o response, preenche o setFotos com o response.data
setFotos ( response.data)

console.log(response)

}

useEffect (()=>{
  fetchData(query, categoria)
}, []

)

  return (
    <div className='container'>
<SearchBar/>
<PhotoList fotos={fotos}/>
<FotoAmpliada/>

    </div>
  )
}

export default App
