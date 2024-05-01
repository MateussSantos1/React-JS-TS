import { Nome } from "../Nome"
import { useContext } from "react"
import { UsuarioContext } from "../../contexts/usuario"


export function Alunos(){
    const {qtdAluno, mudaNome} = useContext(UsuarioContext);

    return(
        <div>
            <h3>
                Quantidade de alunos: {qtdAluno}
            </h3>
            <button onClick={() => mudaNome("Mateus")}>Mudar Nome</button>
            <br />
            <hr />
            <Nome />
        </div>
    )

}

export default Alunos