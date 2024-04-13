import React, { useState } from 'react';

type ItemCompra = {
    produto: string;
    quantidade: number;
}

const ListaCompras = () => {
    const [produto, setProduto] = useState<string>("");
    const [quantidade, setQuantidade] = useState<string>("");

    const [listagem, setListagem] = useState<ItemCompra[]>([]);

    const LidarProd = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProduto(event.target.value);
    }

    const LidarQuant = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantidade(event.target.value);
    }

    const adicionaProduto = (event: React.FormEvent) => {
        event.preventDefault();

        // Verifica se o nome do produto está preenchido
        if (!produto) {
            alert("Por favor, insira um nome válido!!!");
            return;
        }

        // Verifica se a quantidade é um número
        const quantidadeInt = parseInt(quantidade);
        if (isNaN(quantidadeInt)) {
            alert("Por favor, insira uma quantidade válida!!!");
            return;
        }

        // Adiciona o produto à lista
        setListagem([...listagem, { produto, quantidade: quantidadeInt }]);

        // Limpa os campos
        setProduto("");
        setQuantidade("");
    }

    return (
        <div>
            <h3>Adicionar Produtos: </h3>
            <form onSubmit={adicionaProduto}>
                <label>Produto: </label>
                <input type="text" value={produto} onChange={LidarProd} />
                <label> Quantidade: </label>
                <input type="text" value={quantidade} onChange={LidarQuant}/>
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

export default ListaCompras;
