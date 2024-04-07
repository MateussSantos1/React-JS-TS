import {useState, useEffect} from 'react';
import axios from 'axios';
import PostForm from './PostForm';


const PostManager = () => {


    const [posts, setPosts] = useState([]);
    const[error, setError] = useState("");


    //EDITAR:
    const [selectedPosts, setSelectedPosts] = useState(null);
    const[isEditing, setIsEditing] = useState(false);




     // Funcao pra ajudar a modificar o CRUD:
    const handleSucess = (post, operation) => {
        if (operation == "add"){
            setPosts((currentPosts) => [post, ...currentPosts]);
        }
        
        else if(operation == "update") {
            //se o id bater, retorna o 'post' que é um novo valor para aquele posta, caso contrário ele retorna o 'p', que é o valor antigo !!!
            setPosts((currentPosts) => currentPosts.map((p) => p.id === post.id ? post : p));


            //finaliza o modo de edição:

        }


        else if(operation == "delete") {

            setPosts((currentPosts) => currentPosts.filter((p) => p.id !== post.id));
            // Isso mantém os ID diferentes, e apaga o que que pertence ao post selecionado !!!
            setSelectedPosts(null);
        }

        setIsEditing(false);
    }



    // UseEffects pra requisitar os Posts quando a página é carregadaa!!!
    useEffect(() => {

        const fetchPosts = async () => {
            try {
                
// Tentando um GET (Receber / Puxar as informações da API) !!!

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


    const handleEdit = (post) =>{
        setSelectedPosts(post)
        setIsEditing(true)
    }



    const handleCancelEdit = (post) =>{
        setSelectedPosts(null)
        setIsEditing(false)
    }

  return (
    <div>
    <h1>Gerenciar Posts: </h1>
    <PostForm post={isEditing ? selectedPosts : null } onSucess={handleSucess}/>
    {isEditing && <button onClick={handleCancelEdit}>Cancelar Edição</button>}
        <h2>Postagens</h2>
        {
            posts.map((post) =>(

                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button onClick={() => handleEdit(post)} >Editar</button>
                </div>

            ))
        }
    </div>
  )
}

export default PostManager