// Exercício 2: Lista Dinâmica com Estado e Props

// Enunciado:
// Crie um componente ListaDeCompras que permita adicionar itens a uma lista de compras. 
// O componente deve conter um input para inserir o nome do item e um botão para adicionar o item à lista.
// A lista de itens deve ser renderizada abaixo do formulário de adição.

// Vou pegar os dados do forms e depos juntar tudo numa array :)


import React, { useState } from 'react'


type ItemCompra = {
    produto: string;
    quantidade: number;
}



const ListaCompras = () => {

    const[produto, setProduto] = useState<string>("")
    const[quantidade, setQuantidade] = useState<number>(0)


    //criando uma array, com base na tipagem de um item do carrinho:

    const[listagem, setListagem] = useState<ItemCompra[]>([])

    
const LidarProd = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProduto(event.target.value)
}

const LidarQuant = (event: React.ChangeEvent<HTMLInputElement>) => {
    const quantidadeInt= parseInt(event.target.value)
    setQuantidade(quantidadeInt)
}



    const adicionaProduto = (event: React.FormEvent) =>{

        event.preventDefault()

        if (!produto || !quantidade) return; // Evita adicionar itens vazios à lista


        //traz o que já tinha na listagem e, no final, adciciona os produtos e quantidades
        setListagem([...listagem, {produto, quantidade}])

        //Limpar os Campos:

        setProduto("")
        setQuantidade(0)

    }



  return (
    <div>
        <h3>Adicionar Produtos: </h3>
        <form onSubmit={adicionaProduto}>
            <label>Produto: </label>
            <input type="text" onChange={LidarProd} />
            <label> Quantidade: </label>
            <input type="text" onChange={LidarQuant}/>
            <button type='submit'> Adicionar</button>
        </form>
        <h2>Lista de Compras: </h2>

        <ul>
                {listagem.map((item, id) => (
                    <li key={id}>
                        {item.produto} - Quantidade: {item.quantidade}
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default ListaCompras