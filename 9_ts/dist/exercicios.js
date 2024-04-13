// EX 1:
// Criar interface (é um type)  veiculo, um
//Criar função que tenha um veiculo como argumento e imprima a sua descrição:
const carrodoJoao = {
    marca: "Volkswagem",
    modelo: "Jetta",
    ano: 2020,
};
function imprimeDescVeiculo(veiculo) {
    console.log(`A marca do carro é ${veiculo.marca} já o modelo do seu carro é ${veiculo.modelo} - Ano ${veiculo.ano}`);
}
imprimeDescVeiculo(carrodoJoao);
// 2 - Crie uma função genérica que retorne o primeiro item de uma array:
function primeiroElemento(array) {
    return array[0];
}
const algunsNumeros = [15, 25, 32, 54, 75];
primeiroElemento(algunsNumeros);
console.log(primeiroElemento(algunsNumeros));
const banana = {
    id: 1,
    nome: "Banana",
    quantidade: 15
};
function congelaProduto(produto) {
    return produto;
    //ou pra reforçar:
    //return Object.freeze(produto);
}
const bread = {
    id: 3,
    nome: "bread",
    quantidade: 10,
};
const congelaBread = congelaProduto(bread);
//Atualizar quant de produto:
function atualizarQuantProduto(produto, novoQuant) {
    return Object.assign(Object.assign({}, produto), { quantidade: novoQuant });
}
const atualizarPao = atualizarQuantProduto(bread, 777);
//Atualizar quant de produto COM PARTIAL:
function atualizarQuantidadeProduto(produto, novoQuant) {
    return Object.assign(Object.assign({}, produto), novoQuant);
}
const atualizarPaoSEMPartial = atualizarQuantProduto(bread, 177);
const atualizarPaocomPartial = atualizarQuantidadeProduto(bread, { quantidade: 211 });
console.log(atualizarPaoSEMPartial);
console.log(atualizarPaocomPartial);
