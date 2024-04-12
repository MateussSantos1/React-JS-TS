//OBS: Se ocorrer algum errona compiação, se corrige o arquivo TS e não o JS !!!!


// Tipos Básicos:


// 1 - Valor Booleano:

let estáAtivo : boolean;

estáAtivo = true;


// 2 - Valor Numérico:

let total: number = 777;

//ou

//let total: number
//total = 777


// 3 - Valor em Texto:
let meuNome: string = "Mateus";

//ou

//let meuNome: string
//meuNome = "Mateus"


// Consoles dessa variaveis:


//Seus Tipos:
console.log(typeof estáAtivo)
console.log(typeof meuNome)
console.log(typeof total)


//Seus Valores:

console.log(estáAtivo)
console.log(meuNome)
console.log(total)


//INFERÊNCIA DE TIPOS:

//O TS já pode definir o tipo da variável com base no primeiro valor recebido por ela:

let idade = 25
let segundoNome = "Carvalho"
// Já se define automaticamente como um número





//ARRAY's e OBJETOS:


// ARRAY's:

let numeros : number[] = [1,2,3,4,5,6,7]
//NOME      : TIPO    = [ITEM DA LISTA]

// OBJETOS:

let usuario : {name: string; age: number} = {
    name : "Mateuss",
    age: 20
}

console.log(`Meu nome é ${usuario.name} e eu tenho ${usuario.age} anos !!!`)


// let pessoa = {
//     nome: "Mateus",
//     idade: 25
// }



//TUPLAS:
//RGB [n, n, n]

let rgb: [number, number, number] = [255, 0, 0]


console.log(`Gosto da cor RGB: [${rgb}]`)




//Funções: 

function Saudacoes (nome: string) {
    return `Olá, ${nome} !!!`
}

console.log(Saudacoes("Mateus"))




// Enum :

enum Direction{
    Up,
    Down,
    Left,
    Right,
    Lateral,
}




function getDirecaoMensagem(direction: Direction) : string{

    switch (direction) {

        case Direction.Up: 
           return "Vai pra Cima !!!"

           case Direction.Down: 
           return "Vai pra Baixo !!!"

           case Direction.Left: 
           return "Vai pra Esquerda !!!"

           case Direction.Right: 
           return "Vai pra Direita !!!"

        case Direction.Lateral: 
        return "Fagner !!!!"

           default:
            return "Ficou parado !!!"

    }


}


console.log(`O comando é: `  + getDirecaoMensagem(Direction.Up))
console.log(`O comando é:` + getDirecaoMensagem(Direction.Down))