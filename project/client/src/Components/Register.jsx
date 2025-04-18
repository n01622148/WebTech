import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const[username,setUsername] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  
  const registerFunc = async(e) => {
    e.preventDefault()
    const payload = { username,email,password };
    try {
        const response = await fetch(`http://localhost:8000/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
        console.log(response)
        const data = await response.json();
        console.log("Responses And stuff",response.ok)
        console.log(response)

      if (response.ok) {
        alert("Registration successful!");
        setEmail("");
        setUsername("");
        setPassword("");
        navigate("/login");
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
        console.error("Error registering account:", error);
    }
    

  }

    return (
      <div className="page">
          <h2>Register</h2>
          <form onSubmit={(e) => {(registerFunc(e))}}>
              <label>Username : </label>
              <input className='UsernameInput' type='text'
                value={username}
                onChange={(event) => {setUsername(event.target.value)}}></input>
              <br/>
              <label>Email : </label>
              <input className='EmailInput' type='text'
                value={email}
                onChange={(event) => {setEmail(event.target.value)}}></input>
              <br/>
              <label>Password :  </label>
              <input className='PasswordInput' type='password'
               value={password}
               onChange={(event) => {setPassword(event.target.value)}}></input>
              <br/>
              <button type='submit'>Register</button>
          </form>
      </div>
    );
  }
  
  export default Register;