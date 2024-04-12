// Interface -- Mapeamento de campos:

interface Usuario{
    id: number;
    nome: string;
    isActive: boolean;
}


const meuUser: Usuario = {
    id: 1,
    nome: "Mateus",
    isActive: false,
}

console.log(meuUser)


// Classes:

// classe implementada com base no que a interface requere
class Person implements Usuario{

    id: number;
    nome: string;
    isActive: boolean;

    constructor(id: number, nome: string, isActive: boolean){
        this.id = id;
        this.nome = nome;
        this.isActive = isActive;

    }

    // Método Saudação :
    Saudacao(){
        console.log(`Olá, eu sou ${this.nome}`)
    }
            // OU

    NovatoBemVindo(isNew: boolean){
        if(isNew){
            console.log(`PRIMEIRAMENTE, bem vindo ${this.nome}!!!`)
        }
    }
}

const DadosPessoa = new Person(88, "Matteus", true)
console.log(DadosPessoa)
DadosPessoa.Saudacao();
DadosPessoa.NovatoBemVindo(true)
// Chama o método com os dados do objeto DadosPessoa da classe Person !!!