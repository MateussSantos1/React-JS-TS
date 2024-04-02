import {useState, useEffect} from 'react'

const FetchPosts = () => {

    //JSON PLACEHOLDER !!!


    //id, tittle e body !!



    const [posts, setPosts] = useState([]);
    const[error, setError] = useState("");
  return (
    <div>
        <h1>Posts (Fetch API)</h1>
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