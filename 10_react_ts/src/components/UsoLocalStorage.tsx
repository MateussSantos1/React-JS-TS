import useLocalStorage from '../hooks/useLocalStorage'

const UsoLocalStorage = () => {
    const [nome, setNome] = useLocalStorage("nome", "");
  return (
    <div>
      <h3>Use LocalStorage (Ver mais sobre custom hookss!!!)</h3>
    <input
      type="text"
      value={nome}
      onChange={(e) => setNome(e.target.value)}
    />
    <p>O nome armazenado é: {nome}</p>
  </div>

  )
}

export default UsoLocalStorage