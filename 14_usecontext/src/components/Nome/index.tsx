import { UsuarioContext } from "../../contexts/usuario"

import { useContext } from "react"

export function Nome () {
const {aluno} = useContext(UsuarioContext)

  return (
    <div>Aluno: {aluno}</div>
  )
}

export default Nome