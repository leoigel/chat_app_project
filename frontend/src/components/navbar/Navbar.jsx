import React, { Fragment, useState } from 'react';
import './Navbar.scss';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/auth';
import { updateUser } from '../../actions/userAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Model from '../model/Model';
const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setlastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [gender, setGender] = useState(user.gender);
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');

  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    const form = { firstName, lastName, email, gender, password, avatar };
    if (password.length > 0) {
      form.password = password;
    }
    const formData = new FormData();

    for (let key in form) {
      formData.append(key, form[key]);
    }
    dispatch(updateUser(formData)).then(() => setShowModal(false));
  };

  console.log(user);
  return (
    <div id='navbar' className='card-shadow'>
      <h2>Chat</h2>
      <div
        id='profile-menu'
        onClick={(e) => {
          setIsOpen(!isOpen);
        }}
      >
        <img src={user.avatar} alt='avatar' />
        <p>{user.firstName}</p>
        <div>
          <FontAwesomeIcon icon='caret-down' className='fa-icon' />
        </div>
        {isOpen && (
          <div id='profile-options'>
            <p onClick={() => setShowModal(true)}>Update Profile</p>
            <p onClick={() => dispatch(logout())}>Logout</p>
          </div>
        )}
        {showModal && (
          <Model click={() => setShowModal(false)}>
            <Fragment key='header'>Updade Profile</Fragment>
            <Fragment key='body'>
              <form onSubmit={submitForm}>
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
                    onChange={(e) => setAvatar(e.target.files[0])}
                    // value={avatar}
                  />
                </div>
              </form>
            </Fragment>
            <Fragment key='footer'>
              <button className='btn-success' onClick={submitForm}>
                Update
              </button>
            </Fragment>
          </Model>
        )}
      </div>
    </div>
  );
};

export default Navbar;
