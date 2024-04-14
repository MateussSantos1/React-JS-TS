import { ContadorAcao } from "../types/acoes";

export const counterReducer = (estado: number, acao: ContadorAcao): number => {
//tipo da acao será dado no arquivo types/acoes


switch(acao.type){
    case "increment":
        return estado + 1;
    case "decrement":
        return estado -1;
    case "double":
        return estado * 2;
    case "resetar":
        return estado = 0;
    default:
        return estado;
}


}