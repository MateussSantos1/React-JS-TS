import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import FetchPosts from './components/FetchPosts'
import AxiosPosts from './components/AxiosPosts'
import PostManager from './components/PostManager'
function App() {


  return (
    <BrowserRouter>

      {/* 1 - GET com Fetch e Axios :*/}

      <h1>Get com Fetch e Axios :</h1>
      <div>
      <Link to='/fetch-posts'>Fetch Posts</Link>
      <Link to='/axios-posts'>Axios Posts</Link>
      </div>

    {/* 2 - Continuando Requisições - POST e UPDATE/PUT   */}

    <div>
      <Link to="/posts">Gerenciar Posts</Link>
    </div>



    <Routes>

        {/* 1 - GET com Fetch e Axios :*/}
        
        <Route path='/fetch-posts' element={<FetchPosts/>}></Route>
        <Route path='/axios-posts' element={<AxiosPosts/>}></Route>
    
     {/* 2 - Continuando Requisições - POST e UPDATE/PUT   */}

      <Route path='/posts' element={<PostManager/>}></Route>
    
    </Routes>

    </BrowserRouter>
  )
}

export default App
