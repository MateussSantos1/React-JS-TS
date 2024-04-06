import {useState, useEffect} from 'react'
import axios from 'axios'
const AxiosPosts = () => {

    //JSON PLACEHOLDER !!!


    //id, tittle e body !!



    const [posts, setPosts] = useState([]);
    const[error, setError] = useState("");


    // UseEffects pra requisitar os Posts quando a página é carregadaa!!!
    useEffect(() => {

        const fetchPosts = async () => {
            try {
                
// Tentando um GET !!!

                const response = await axios.get("https://jsonplaceholder.typicode.com/posts"
                );

                

                //const data = await response.json();           
                // AXIOS NAO PRECISA DISSO ^^


                setPosts (response.data);


            } catch (error) {
                setError(error.message)
            }
        }



        //Agora, executar a função: 
        fetchPosts();


    }, [])


  return (
    <div>
        <h3>Posts (Axios API)</h3>
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

export default AxiosPosts;