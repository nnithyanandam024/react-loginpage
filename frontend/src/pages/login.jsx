import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Particles from './Particles.jsx';



const StyledWrapper = styled.div`
  button {
    font: inherit;
    background-color: #f0f0f0;
    border: 0;
    color: #242424;
    border-radius: 0.5em;
    font-size: 1.35rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 0.375em 11rem;
    font-weight: 600;
    text-shadow: 0 0.0625em 0 #fff;
    box-shadow: inset 0 0.0625em 0 0 #f4f4f4, 0 0.0625em 0 0 #efefef,
      0 0.125em 0 0 #ececec, 0 0.25em 0 0 #e0e0e0, 0 0.3125em 0 0 #dedede,
      0 0.375em 0 0 #dcdcdc, 0 0.425em 0 0 #cacaca, 0 0.425em 0.5em 0 #cecece;
    transition: 0.15s ease;
    cursor: pointer;
  }
  button:active {
    translate: 0 0.225em;
    box-shadow: inset 0 0.03em 0 0 #f4f4f4, 0 0.03em 0 0 #efefef,
      0 0.0625em 0 0 #ececec, 0 0.125em 0 0 #e0e0e0, 0 0.125em 0 0 #dedede,
      0 0.2em 0 0 #dcdcdc, 0 0.225em 0 0 #cacaca, 0 0.225em 0.375em 0 #cecece;
  }`;


  const Login = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
  
      const handleSubmit = async (e) => {
          e.preventDefault();
  
          try {
              const response = await fetch('http://localhost:4000/api/register', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ email, password }),
              });
  
              const data = await response.json();
              if (response.ok) {
                  alert(data.message);
                  setEmail('');
                  setPassword('');
              } else {
                  alert(data.message);
              }
          } catch (error) {
              console.error('Error:', error);
              alert('Something went wrong!');
          }
      };
  
      return (
          <div className="login-container">
              <h2>Login</h2>
              <form onSubmit={handleSubmit}>
                  <div>
                      <label>Email:</label>
                      <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                      />
                  </div>
                  <div>
                      <label>Password:</label>
                      <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                      />
                  </div>
                  <StyledWrapper>
                  <button type="submit">Submit</button>
                  </StyledWrapper>
              </form>
          </div>
      );
  };
  
  export default Login;
  
