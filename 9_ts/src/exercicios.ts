// EX 1:
// Criar interface (é um type)  veiculo, um
//Criar função que tenha um veiculo como argumento e imprima a sua descrição:



interface Veiculo{
    marca: string;
    modelo: string;
    ano: number;
}

const carrodoJoao : Veiculo = {
    marca: "Volkswagem",
    modelo: "Jetta",
    ano: 2020,
}



function imprimeDescVeiculo(veiculo: Veiculo) :void{
    console.log(`A marca do carro é ${veiculo.marca} já o modelo do seu carro é ${veiculo.modelo} - Ano ${veiculo.ano}`)
}

imprimeDescVeiculo(carrodoJoao);





// 2 - Crie uma função genérica que retorne o primeiro item de uma array:


function primeiroElemento<T>(array: T[]) : T{
    return array[0]
}

const algunsNumeros = [15, 25, 32, 54, 75];

primeiroElemento(algunsNumeros)

console.log(primeiroElemento(algunsNumeros))



// 3 --- Criar um tipo PRODUTOO e criar uma funcao congelaProduto que torna os dados dese produto imutável

type Produto = {
    id: number,
    nome: string,
    quantidade: number
}

const banana: Produto = {
    id: 1,
    nome: "Banana",
    quantidade: 15
}


function congelaProduto(produto: Produto): Readonly<Produto> {
    return produto;
    //ou pra reforçar:
    //return Object.freeze(produto);
}


const bread :  Produto = {
    id: 3,
    nome: "bread",
    quantidade: 10,
}

const congelaBread = congelaProduto(bread);



//Atualizar quant de produto:

function atualizarQuantProduto(produto : Produto, novoQuant : number) : Produto {

    return{...produto, quantidade: novoQuant};
}

const atualizarPao = atualizarQuantProduto(bread, 777)


//Atualizar quant de produto COM PARTIAL:


function atualizarQuantidadeProduto(produto : Produto, novoQuant : Partial<Produto>) : Produto {

    return{...produto, ...novoQuant};
}

const atualizarPaoSEMPartial = atualizarQuantProduto(bread, 177)
const atualizarPaocomPartial = atualizarQuantidadeProduto(bread, {quantidade: 211})



console.log(atualizarPaoSEMPartial)
console.log(atualizarPaocomPartial)