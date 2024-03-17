const RenderCondicional = ({user}) => {
    //se houver usuario, exiba uma mensagem de boas vindas !!
  return (
    <div>
        {user && <h1>Bem vindo de volta, {user} !!!</h1>}
        {/* Checa se o USER existe e manda fazer uma coisa ( no caso, executar um h1 !!!) */}
    </div>);
  
};

export default RenderCondicional