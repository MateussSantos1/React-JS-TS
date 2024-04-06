import {useState, useEffect} from 'react'

const FetchPosts = () => {

    //JSON PLACEHOLDER !!!


    //id, tittle e body !!



    const [posts, setPosts] = useState([]);
    const[error, setError] = useState("");


    // UseEffects pra requisitar os Posts quando a página é carregadaa!!! // use effect dispara a requisição
    useEffect(() => {

        const fetchPosts = async () => {
            try {
                
// Tentando um GET !!!

                const response = await fetch("https://jsonplaceholder.typicode.com/posts"
                );

                // console.log(response);

                const data = await response.json();           
                // JSON transforma os dados da const em um conjunto de objetos !!!

                setPosts (data);


            } catch (error) {
                setError(error.message)
            }
        }



        //Agora, executar a função: 
        fetchPosts();


    }, [])


  return (
    <div>
        <h3>Posts (Fetch API)</h3>
        {error ? (<p>Erro: {error}</p>) : (
            posts.map((post) =>(

                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>

            ))
        )}    
    </div>
  )
}

export default FetchPosts