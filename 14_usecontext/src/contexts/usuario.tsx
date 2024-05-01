import { ReactNode, createContext, useState} from 'react'

type UsuarioContextData = {

    aluno: string;
    qtdAluno: number;
    mudaNome: (nome: string) => void;
}

 
type UsuarioProviderProps = {
    children: ReactNode;
}



//COMO ASSIM CHILDREEEEEEEEEEEEEEN??????

//      é do tipo UsuarioContextData
export const UsuarioContext = createContext({} as UsuarioContextData) ;


function UserProvider({children}: UsuarioProviderProps){

    const [aluno, setAluno] = useState("Fulano da Silva")
    const [qtdAluno, setQtdAluno] = useState(40)

    function mudaNome(nome: string){
        setAluno(nome)
    }



    return(
        <UsuarioContext.Provider value={{aluno, qtdAluno, mudaNome}}>
            {children}
        </UsuarioContext.Provider>
    )

}

export default UserProvider;