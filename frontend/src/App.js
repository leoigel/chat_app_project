import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Chat from './components/chat/Chat';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PrivateRoute from './Routes/PrivateRoute';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faSmile,faImage} from '@fortawesome/free-regular-svg-icons';
import {faSpider,faEllipsisV,faUserPlus,faSignOutAlt,faTrash,faCaretDown,faUpload,faTimes,faBell} from '@fortawesome/free-solid-svg-icons'
import './App.scss';

library.add(faSmile,faImage,faSpider,faEllipsisV,faUserPlus,faSignOutAlt,faTrash,faCaretDown,faUpload,faTimes,faBell);

const App = () => {
  return (
    <div className="App">
      <Router>
        <PrivateRoute exact path='/' component={Chat}/>
        {/* <Route exact path='/' component={Chat}/> */}
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
      </Router>
    </div>
  );
}

export default App;
