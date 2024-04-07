import { useReducer, useEffect } from "react";
import axios from "axios";

// Redutor para lidar com as diferentes etapas do ciclo de vida de uma solicitação HTTP
const httpReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      // Quando uma solicitação é enviada, definimos loading como true e resetamos os dados e erros anteriores.
      return { data: null, error: null, loading: true };
    case "SUCCESS":
      // Quando a solicitação é bem-sucedida, atualizamos os dados com os recebidos, definimos o erro como null e loading como false.
      return { data: action.responseData, error: null, loading: false };
    case "ERROR":
      // Quando ocorre um erro na solicitação, definimos os dados como null, capturamos a mensagem de erro e definimos loading como false.
      return { data: null, error: action.errorMessage, loading: false };
    default:
      return state;
  }
};

// Custom hook para fazer solicitações HTTP
const useHttp = (url, method = "GET", body = null, dependencies = []) => {
  // Usando useReducer para gerenciar o estado da solicitação HTTP
  const [httpState, dispatch] = useReducer(httpReducer, {
    loading: false,
    data: null,
    error: null,
  });

  // useEffect para disparar a solicitação HTTP quando as dependências mudarem
  useEffect(() => {
    const fetchData = async () => {
      // Quando a solicitação é enviada, disparamos a action SEND para atualizar o estado.
      dispatch({ type: "SEND" });
      try {
        // Fazendo a solicitação usando axios e aguardando a resposta
        const response = await axios({ url, method, data: body });
        // Quando a resposta é recebida com sucesso, disparamos a action SUCCESS para atualizar o estado com os dados recebidos.
        dispatch({ type: "SUCCESS", responseData: response.data });
      } catch (error) {
        // Se ocorrer um erro na solicitação, disparamos a action ERROR para atualizar o estado com a mensagem de erro.
        dispatch({ type: "ERROR", errorMessage: "Algo deu errado!" });
      }
    };

    // Chamando a função fetchData para fazer a solicitação HTTP
    fetchData();
    // Dependências que podem acionar a execução dessa solicitação (ex: variáveis que podem mudar e influenciar a solicitação)
  }, dependencies);

  // Retornando o estado atual da solicitação HTTP
  return httpState;
};

export default useHttp;
