import React from 'react';
// import { useSelector } from 'react-redux';
import Navbar from '../navbar/Navbar';
import './Chat.scss';
const Chat = () => {
  // const user = useSelector((state) => state.auth);
  return (
    <div id='chat-container'>
      <Navbar />
      <div id='chat-wrap'>demi</div>
    </div>
  );
};

export default Chat;
