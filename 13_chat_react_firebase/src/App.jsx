import {useSignInWithGoogle} from 'react-firebase-hooks/auth'

export const App = () => {
  return (
    <div className="app">
      <header>
        <h1>React Chat</h1>
        <SignOut/>
      </header>
    </div>
  )
}


// Salas de conversa:
export const ChatRoom = () => {
  return <h1>ChatRoom</h1>
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
  return <h1>SignOut</h1>
}