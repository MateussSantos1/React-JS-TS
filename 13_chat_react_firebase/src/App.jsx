import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import "./App.css"
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth} from "./services/firebaseConfig"
import { addDoc, collection, limit, orderBy, query, serverTimestamp } from 'firebase/firestore'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { useRef, useState } from 'react'
import { app, databaseApp } from './services/firebaseConfig'
export const App = () => {
  const[user] = useAuthState(auth)
  return (
    <div className="App">
      <header>
        <h1>React Chat</h1>
        <SignOut/>
      </header>
      <section>

        {/* se tiver logado, mostra o chat, se nao, mostra o componente para logar ! */}
        {user ? <ChatRoom/> : <SignIn/>}
      </section>
    </div>
  )
}


// Salas de conversa:
export const ChatRoom = () => {

const rolagem = useRef()

  //Referencia da tabela message
  const messageRef = collection(databaseApp, 'messages')


  //ordenando as mensagens pela ordem de envio/criacao
  const QueryMessages = query(messageRef, orderBy("createdAt"), limit(300))

  const [messages] = useCollectionData(QueryMessages, { idField: 'id' });


  const [formValue, setFormValue] = useState("")

  const sendMessage = async (e) => {
    e.preventDefault()

    const {photoURL, uid} = auth.currentUser;

    await addDoc(messageRef, {
      text: formValue,
      uid,
      photoURL,
      createdAt: serverTimestamp()
    })
    setFormValue("")

    //scroll do chat: 
    rolagem.current.scrollIntoView({behavior: 'smoot'})
  }


    return(
      <>
      <main>
        {messages && messages.map((msg, index) =>
        (<ChatMessage key={index} message = {msg}/>))}
        <div ref={rolagem}></div>
      </main>

          <form onSubmit={sendMessage}>
          <input type="text" value={formValue} onChange={e => setFormValue(e.target.value)}></input>
          <button>Enviar</button>

          </form>

      
      </>
    )
}

//MENSAGEM : 

export const ChatMessage = (props) => {
  const {text, photoURL, uid} = props.message;
  

  //estilo do css, se for minha mensagem tem um estilo
  // sinao for tem outro
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} />
      <p>{text}</p>
    </div>
  )
}


// LOGAR:

export const SignIn = () => {
  const[SignInWithGoogle] = useSignInWithGoogle(auth)
  return (
    <button
    className='sign-in'
    onClick={() => SignInWithGoogle()}
    >Logar com Google</button>
  )
}

//DESLOGAR

export const SignOut= () => {
  return auth.currentUser && <button className='sign-out' onClick={() => auth.signOut()}>Sair</button>
}
