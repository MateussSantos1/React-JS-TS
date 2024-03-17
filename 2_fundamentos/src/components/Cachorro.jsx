//DESESTRUTURAÇÃO DE OBJETOS!!!
const Cachorro =  ({nome, raca}) => {
//Coloca as variaveis entre chaves dentro dos parenteses!!! 
//props.nome vira diretamente nome !!!
  return (
    <p>O Cachorro se chama {nome} e é da raca {raca}</p>
  )
}

export default Cachorro