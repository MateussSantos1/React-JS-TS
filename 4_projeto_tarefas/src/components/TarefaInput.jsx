import React, { useState } from 'react';

const TarefaInput = ({ onAddTarefa }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar se existe um texto no que foi enviado
    if (input.trim()) {
      onAddTarefa(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='Adicionar Nova Tarefa :' 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button type='submit'>Adicionar</button>
    </form>
  );
};

export default TarefaInput;
