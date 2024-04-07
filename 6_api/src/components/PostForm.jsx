import {useEffect, useState} from 'react'
import axios from 'axios'

const PostForm = ({post, onSucess}) => {


  //funcao pra limpar o form apos atualziar algooo
  const LimpaForm = () =>{
    setTitle("");
    setBody("");
  }

  // checa se existe post
    const [title, setTitle] = useState(post?.title || "")
    const [body, setBody] = useState(post?.body ||"")

useEffect(() => {

  // checa se existe post
  if(post) {
    setTitle(post.title)
    setBody(post.body)
  }

}, [post])


    const handleSubmit = async (e) => {
        e.preventDefault()

        const newPost = {title, body, userId: 1}


        try {
          
          if(post){
            //put -- atualizar -- update !!!
            const response = await axios.put(
              `https://jsonplaceholder.typicode.com/posts/${post.id}`
              , newPost);

              //atualizar post na lista
              onSucess (response.data, "update");

          }
          else {
            const response = await axios.post(
              "https://jsonplaceholder.typicode.com/posts"
              , newPost);


            // adicionar post na lista
            onSucess (response.data, "add");
          }


          //--Limpando o form após possíveis mudanças: 
          LimpaForm();




        } catch (error) {
          console.log("Error ao enviar postagem: ", error)
        }

    }

    const handleDelete = async() => {
      try {
          
          //put -- deletar -- delete !!!
           await axios.put(
            `https://jsonplaceholder.typicode.com/posts/${post.id}`)

            //deletar post na lista
            onSucess (post, "delete");
            
          //--Limpando o form após possíveis mudanças: 
          LimpaForm();
        }







       catch (error) {
        console.log("Error ao deletar postagem: ", error)
      }
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
        <input type="text" value={title} placeholder='Digite o título'  
        onChange={(e)=> setTitle(e.target.value)}/>
        </div>

        <div>
            {/* OnChange muda conforme o usuario digita !! */}

            <textarea value={body } onChange={(e) => setBody(e.target.value)} placeholder='Digite a descrição : '></textarea>
        </div>

        <button type='submit'>Enviar</button>

        {/* QUando o post existir:  */}

      {post && (<button type='button' onClick={handleDelete} style={{backgroundColor : 'red', color: 'white'}}>Deletar</button>)}
    </form>
  )
}

export default PostForm