import React, { useState } from 'react';
import loginImage from '../../assets/images/login.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';
import './Auth.scss';
const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const submitLogin = async (e) => {
    e.preventDefault();
    dispatch(login({ email, password }, history));
  };
  return (
    <div id='auth-container'>
      <div id='auth-card'>
        <div className='card-shadow'>
          <div id='image-section'>
            <img src={loginImage} alt='login' />
          </div>
          <div id='form-section'>
            <h2>Welcome back</h2>
            <form onSubmit={submitLogin}>
              <div className='input-field mb-1'>
                <input
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type='text'
                />
              </div>
              <div className='input-field mb-1'>
                <input
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type='password'
                />
              </div>
              <button>Login</button>
              <p>
                Don't have account?<Link to='/register'>Register</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
