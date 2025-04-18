import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from "../hooks/useAuth";

function CreatePost() {
  const navigate = useNavigate();
  const[content,setContent] = useState("")
  const { isAuthenticated, userName } = useAuth();
  const PostFunc = async(e) => {
    e.preventDefault()
    const token = localStorage.getItem('authToken');
    const payload = { userName, content };
    try {
        // alert(content)
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}create`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(payload),
          });
        console.log(response)
        navigate("/");
    } catch (error) {
        console.error("Error uploading posting :", error);
    }
  }

    return (
      <div className="page">
        {isAuthenticated ? (
          <>
            <form onSubmit={(e) => {(PostFunc(e))}}>
            <textarea className='Content' type='text'
              value={content}
              maxLength={150}
              onChange={(event) => {setContent(event.target.value)}}></textarea>
            <br/>
            <br/>
            <button type='submit'>Post</button>
          </form>
          </>
        ) : (
          <>
            <h1>Sign in before making posts</h1>
          </>
        )}
      </div>
    );
  }
  
  export default CreatePost;