// Generics

// Meio que abre o leque, permite usar por exemplo, uma função e essa 
//função poderá receber diversos tipos de variáveis, ela não irá se 
//restringir a um tipo, como um valor somente inteiro ou somente string !!



// o "<T>" determina o tipo genérico"


//Pode retornar uma string ou outro tipo de dado como no exemplo:
//function getArray<T>(items: T[]) : string [] {}

function getArray<T>(items: T[]) : T[] {

    return new Array<T>().concat(items)

    //concat meio que une o novo Array e os items, que estão sendo passados
}


let numberArray = getArray([1, 2, 3, 4])

let stringArray = getArray(["Mateus", "José", "Paulo"])

console.log(numberArray, stringArray)


// Restringir Tipos:

//aceita 2 objetos genéricos que independem de suas propiedades


//poderia ser string ou  outro dado, mas n faria sentido, pois a ideia mesmo e tornar a propedade generica !!:
//function merge <T extends string, U extends string> (obj1: T, obj2: U){

function merge <T extends object, U extends object> (obj1: T, obj2: U){
    return{
        ...obj1,
        ...obj2,
        //essas 2 linhas acima vão mesclar o objeto em um só
    }
}

    //juntando os 2 objetos: 
    const result = merge(
        {nome: "Mateus", age: 50}
        ,{job: "Progamador", isActive: true}
    )


    console.log(result)
