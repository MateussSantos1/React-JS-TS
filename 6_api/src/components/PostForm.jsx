import {useState} from 'react'
import axios from 'axios'

const PostForm = ({onSucess}) => {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newPost = {title, body, userId: 1}


        try {
          
            const response = await axios.post(
              "https://jsonplaceholder.typicode.com/posts"
              , newPost);


            // adicionar post na lista
            onSucess (response.data, "add");




        } catch (error) {
          console.log("Error ao enviar postagem: ", error)
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

    </form>
  )
}

export default PostForm