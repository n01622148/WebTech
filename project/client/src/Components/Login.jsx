import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  
  const loginFunc = async(e) => {
    e.preventDefault()
    const payload = { email,password };
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (response.ok) {
        // Save the token to localStorage
        localStorage.setItem('authToken', result.token);
        navigate("/"); // Redirect to homepage or dashboard
      } else {
        alet(result.message || 'Login failed.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in. Please try again.');
    }
  };

    return (
      <div className="page">
          <h2>Log in</h2>
          <form onSubmit={(e) => {(loginFunc(e))}}>
              <label for='EmailInput' >Email : </label>
              <input className='EmailInput' type='text'
                value={email}
                onChange={(event) => {setEmail(event.target.value)}}
                required
                />
              <br/>
              <label for='PasswordInput'>Password :  </label>
              <input className='PasswordInput' type='password'
               value={password}
               onChange={(event) => {setPassword(event.target.value)}}
               required
               />
              <br/>
              <button type='submit'>Login</button>
          </form>
      </div>
    );
  }
  
  export default Login;