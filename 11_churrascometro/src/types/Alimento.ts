export type Alimento = "carne" | "linguica" | "frango" | "paodealho"





// Quantos gramas cada pessoa irá comer?? :
export const quantidadeporPessoas: Record<Alimento, number> = {

    carne: 500,
    linguica: 200,
    frango: 400,
    paodealho: 300,
}  

// Exportando os nomes dos alimentos (esses nomes formatados como Pão de Alho, serão foprmatados asssim, pois
//serão exibidos pra o Usuario !!! (front-end)

export const nomeAlimentos: Record<string, string> = {

    carne: "Carne",
    linguica: "Linguiça",
    frango: "Frango",
    paodealho: "Pão de Alho",


}
