import React, { useState } from 'react';
import registerImage from '../../assets/images/register.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../actions/auth';
import './Auth.scss';
const Register = ({ history }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const dispatch = useDispatch();
  const submitRegister = (e) => {
    e.preventDefault();
    dispatch(
      register(
        { firstName, lastName, email, gender, password, avatar },
        history
      )
    );
  };
  return (
    <div id='auth-container'>
      <div id='auth-card'>
        <div className='card-shadow'>
          <div id='image-section'>
            <img src={registerImage} alt='register' />
          </div>
          <div id='form-section'>
            <h2>Sign Up</h2>
            <form onSubmit={submitRegister}>
              <div className='input-field mb-1'>
                <input
                  placeholder='First name'
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  type='text'
                />
              </div>
              <div className='input-field mb-1'>
                <input
                  placeholder='Last name'
                  onChange={(e) => setlastName(e.target.value)}
                  value={lastName}
                  type='text'
                />
              </div>
              <div className='input-field mb-1'>
                <input
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type='email'
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
              <div className='input-field mb-1'>
                <select
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                  type='text'
                >
                  <option>Male</option>
                  <option>Famale</option>
                </select>
              </div>
              <div className='input-field mb-1'>
                <input
                  type='file'
                  placeholder='photo'
                  onChange={(e) => setAvatar(e.target.value)}
                  value={avatar}
                />
              </div>
              <button>Register</button>
              <p>
                alredy have account? <Link to='/login'>Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
