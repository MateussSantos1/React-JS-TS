import React, { useContext } from "react";
import { MeuContexto } from "../contexts/MeuContext"; // Importar o provedor de contexto

// Componente que consome o contexto
const ComponenteFilho = () => {
  // Acessar o contexto
  const { mensagem, setMensagem } = useContext(MeuContexto);

  return (
    <div>
      <p>Oha o conteudo da nova mensagem: {mensagem}</p>
      <button onClick={() => setMensagem("Nova mensagem")}>
        Atualizar Mensagem
      </button>
    </div>
  );
};

export default ComponenteFilho;