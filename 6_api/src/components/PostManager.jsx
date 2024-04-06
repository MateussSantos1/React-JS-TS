import {useState, useEffect} from 'react';
import axios from 'axios';
import PostForm from './PostForm';


const PostManager = () => {


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


                setPosts (response.data.slice(0,5));

                //O "slice" limita a quantidade de dados exibidas !!!



            } catch (error) {
                setError(error.message)
            }
        }



        //Agora, executar a função: 
        fetchPosts();


    }, [])

  return (
    <div>
    <h1>Gerenciar Posts: </h1>
    <PostForm/>

        <h2>Postagens</h2>
        {
            posts.map((post) =>(

                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button>Editar</button>
                </div>

            ))
        }
    </div>
  )
}

export default PostManager