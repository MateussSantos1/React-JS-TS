import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Alunos  from './components/Aluno/index'
import  Nome  from './components/Nome/index'
import UserProvider from './contexts/usuario'
function App() {


  // return (
  //   <UserProvider>
  //     <div>
  //       <h1>Escola</h1>
  //       <br />

  //       <Alunos/>
  //     </div>
  //   </UserProvider>
  // )
return(
  <UserProvider>     
    {/* user provider pra usar o context */}


    
  <BrowserRouter>
  
  <Routes>

  <Route path = "/" element={<Alunos/>}></Route>
  <Route path = "/cadastro" element={<Nome/>}></Route>
  </Routes>
  
  
  
  
  
  
  
  </BrowserRouter>

  </UserProvider>


)
}
export default App
