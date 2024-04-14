import {useEffect, useState} from 'react'
import { Post } from '../types/postagens'
import axios from 'axios'

//EXPORTEIIIIII O TYPE EM UM UNICO ARQUIVOOOOO
// type Post = {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;

// }


const ExibirPostagens = () => {

    const [posts, setPosts] = useState<Post[]>([])
    const[carregando, setCarregando] = useState(true)


    useEffect(() => {

        const buscarPost = async () => {
            
            try {
                
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')


                //peguei os 5 primeiros dados da response(resposta)
                setPosts(response.data.slice(0, 5))

            } catch (error) {
                console.log(error)
            }   finally{
                setCarregando(false)
            }
        }

        buscarPost()

    },[])



  return (
    <div>
        <h2 style={{color: 'green'}}>Postagens a partir do AXIOS:</h2>
        {carregando ? (<div>
            <p>Carregando .....</p>
            <img src="https://tenor.com/b1wJQ.gif" alt="" />
        </div>)
        :
        (
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>

                    </li>
                ) )}
            </ul>
        )
    
    }

    </div>
  )
}

export default ExibirPostagens