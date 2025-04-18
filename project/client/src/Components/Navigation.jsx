// components/Navigation.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navigation = () => {
  const navigate = useNavigate();
  const { isAuthenticated, userName } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <header className="navigation">
      <nav>
      {isAuthenticated ? (
          <>
            <span className="navname">{userName}</span>
          </>
        ) : (
          <>
          </>
        )}
        <Link className="navname" to="/">Trending</Link> 
        <Link className="navname" to="/Popular">Popular</Link> 
        {isAuthenticated ? (
          <>
            <Link className="navname" to="/CreatePost">Post</Link> 
            <button className="navname" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link className="navname" to="/register">Register</Link>  
            <Link className="navname" to="/login">Login</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
