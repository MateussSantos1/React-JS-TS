import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import PhotoList from './components/PhotoList';
import FotoAmpliada from './components/FotoAmpliada';

function App() {
  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fotos, setFotos] = useState([]);
  const [fotoAmpliada, setFotoAmpliada] = useState(null);
  const [ativaPesquisa, setAtivaPesquisa] = useState(false);
  
  const fetchData = async (query, categoria) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
    let searchQuery = query;

    if (query && categoria) {
      searchQuery = `${query} ${categoria}`;
    } else if (categoria) {
      searchQuery = categoria;
    }

    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        client_id: apiKey,
        query: searchQuery
      }
    });

    setFotos(response.data.results);
    return
  };

  useEffect(() => {
    fetchData(query, categoria);
  }, [query, categoria]);

  useEffect(() => {
    if (ativaPesquisa) {
      fetchData(query, categoria);
      setAtivaPesquisa(false);
    }
  }, [ativaPesquisa, query, categoria]);

  return (
    <div className='container'>
      <SearchBar setQuery={setQuery} setCategoria={setCategoria} setAtivaPesquisa={setAtivaPesquisa} />
      <PhotoList fotos={fotos} setFotoAmpliada={setFotoAmpliada} />

      {/* Se houver uma foto ampliada, o componente 'FotoAmpliada' será renderizado */}
      {fotoAmpliada && (
        <FotoAmpliada foto={fotoAmpliada} setFotoAmpliada={setFotoAmpliada} />
      )}
    </div>
  );
}

export default App;
