import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

async function loginUser(credentials, navigate) {
  return fetch('api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(res => res.json())
    .then(data => {
      console.log('login data: ', data);
      if (data === 'user authenicated!') {
        navigate(-1); // go back to the previous page
      }
    })
 }

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser({
      email,
      password
    }, navigate);
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <Link to='/signup'>
        <p>Sign up</p>
      </Link>
    </div>
  )
}