import {useState} from 'react'
import axios from 'axios'

const PostForm = () => {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
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