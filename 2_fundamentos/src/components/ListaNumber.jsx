import React from 'react'

const ListaNumber = ({numeros}) => {
    // nao usamos estruturas de loop ( while, for ...)

    // metodos array - filter, map, reduce ....

    // chaves - key - identificador unico pra cada elemento
  return (

    // POR ENQUANTO USAMOS INDEX COMO KEY PRIMARIAAAAAAA
    <ul>{numeros.map((numero, index) => (
        <li key={index}>{numero}</li>
    ))

    }</ul>
  );
};

export default ListaNumber;