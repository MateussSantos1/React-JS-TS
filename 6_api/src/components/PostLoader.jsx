import {useState, useEffect} from 'react'

import axios from 'axios'

// Para trazer o Id:
import {useParams} from 'react-router-dom'


const PostLoader = () => {


    const[post, setPost] = useState(null)
    const[loading, setLoading] = useState(false)
    const[error, setError] = useState("")
    const [sucess, setSucess] = useState("")
    const {postId}  = useParams()

    useEffect(() =>{

        const fetchPost = async() => {

        setLoading(true)
            setError("")
            setSucess("")


            //como eu posso gerar um propio erro? :



        try {


            //como eu posso gerar uma  mensagem propia de erro? ::: 
            if(postId > 500){

                //setPost pra zerar o valor de post selecionado
                setPost(null)
                throw new Error("Não Existe :(")
            }

            // Tentando um GET !!!

            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`
        );


        setPost (response.data);
        
        setSucess("Post Carregado com Sucesso !!!")
        

        } catch (error) {
            setError("Falha ao carregar post: " + error.message)
        }
            finally {
        //se ele chegar até aqui, é porque ou deu erro ou a API já está exibindo os dados
        //logo define o estado de "carregamento" como 'falso', pois ja se conclui se deu certo ou deu falha !!!!
        
        setLoading(false);
            }
        }


        // Chamar a função:

        fetchPost();

    }, [postId])
//enquanto não se carrega os dados obtidos da api, pelo postId, essa função acima é executada  

  return (
    <div>
        <h1>Post: {postId}</h1>
        {loading && <p>Carregando......</p>}
        {sucess && <p style={{color: "green"}}>{sucess}</p>}
        {error && <p style={{color: "red"}}>{error}</p>}
        {post && (
        <div>

            <h2>{post.title}</h2>
            <p>{post.body}</p>

        </div>
        )}
        </div>
  )
}

export default PostLoader