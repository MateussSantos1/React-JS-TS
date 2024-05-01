import { Link } from "react-router-dom";

const Alunos = () => {
  return (
    <div>
      <div>
        <h1>LOGO</h1>
      </div>
      <h4>Quantidade de Alunos: {0}</h4>
      <h4>Relação de Alunos:</h4>
      <ul>
        <li>Exemplo 1</li>
        <li>Exemplo 2</li>
        <li>Exemplo 3</li>
      </ul>
      {/* Adicionando um link para a página de cadastro */}
      <Link to="/cadastro">
        <button type="submit">Cadastrar Aluno</button>
      </Link>
    </div>
  );
};

export default Alunos;
