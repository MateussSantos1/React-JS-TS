import { createContext, useState, ReactNode } from "react";


type Tema = "claro" | "escuro";


interface TemaContexto {
    tema: Tema;
    alternarTema : () =>void;
}


export const TemaContext = createContext<TemaContexto | null>(null)


interface TemaProviderProps {
    children: ReactNode;
}

export const TemaProvider = ({children}: TemaProviderProps) =>{

    const [tema, setTema] = useState<Tema>("claro")

    const alternarTema = () => {
        

        //se tema atual for igual a claro, troque para escuro, caso contrário, troque para claro !!!
        setTema((temaAtual) => (temaAtual === 'claro' ? 'escuro' : 'claro'))
    }

    return(
        <TemaContext.Provider value={{tema, alternarTema}}>
            {children}
        </TemaContext.Provider>
    )
}