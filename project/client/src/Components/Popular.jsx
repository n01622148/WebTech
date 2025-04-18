import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import '../App.css';

const Popular = () => {
  const [posts, setPosts] = useState([]);
  const { isAuthenticated, userName } = useAuth();
  const [userId, setUserId] = useState(''); // State to hold the user ID

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode the JWT token to extract user info
      setUserId(decodedToken.userId); // Assuming the token has the userId field
    }
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}popular`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const deltePost = async(post) => {
    console.log(userId)

    if (!window.confirm("Are you sure you want to delete this post?")) return;
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}delete/${post._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Send token in the Authorization header
        },
      });
      if (response.ok) {
        alert("Post deleted successfully!");
        window.location.reload();
      } else {
        alert("Failed to delete the post. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting the post:", error);
    }
  };

  const likePost = async(post) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}like/${post._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Send token in the Authorization header
        },
        body: JSON.stringify({userId}),
      });
      window.location.reload();

      if (!response.ok) {
        alert("Failed to like the post. Please try again.");
      }
    } catch (error) {
      console.error("Error liking the post:", error);
    }
  };

  const dislikePost = async(post) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}dislike/${post._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Send token in the Authorization header
        },
        body: JSON.stringify({userId}),
      });
      window.location.reload();

      if (!response.ok) {
        alert("Failed to like the post. Please try again.");
      }
    } catch (error) {
      console.error("Error liking the post:", error);
    }
  };
  return (
    <div className="page">
      <h2>Popular</h2>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <div className="list">
          {posts.map((post) => (
            <div key={post._id} className="card">
              <h4>{post.author}</h4>
              <p className="cardtext">{post.content}</p>
              {/* <p>{post._id}</p> */}
              <div className="buttons">
                <button onClick={() => likePost(post)}>Like</button>
                <span>   {post.likeby.length}   </span>
                <button onClick={() => dislikePost(post)}>Dislike</button>

              {post.authorID.toString() == userId.toString()?(
                <button variant="contained" className="delete" onClick={() => deltePost(post)}>Delete</button>
              ):(
                <></>
              )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Popular;