import React from 'react'
import { useNavigate } from 'react-router-dom';
import login from '../login';
import csslogin from '../csslogin.css';

function Login () {
  let navigate = useNavigate();
  return (
    <form>
      <input type='text' placeholder='Username' />
      <input type='text' placeholder='Password' />
      <button onClick={() => {navigate('/Recibos')}}>Login</button>
    </form>
      
  );
}

export default Login;
