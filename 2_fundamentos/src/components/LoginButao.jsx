

const LoginButao = ({logado}) => {
    //  Entrar -> Pra quem tá deslogado
    //  Sair -> Pra quem tá logado
  return (
    <div>{logado ? <button>Sair</button> : <button>Entrar</button>}</div>
  )
}

export default LoginButao