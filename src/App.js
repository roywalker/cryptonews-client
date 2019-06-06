import React, { useContext } from 'react';
import Sidebar from './components/sidebar/Sidebar.js';
import Stories from './components/stories';
import Comments from './components/comments';
import Header from './components/header';
import Login from './components/forms/Login';
import Logout from './components/auth/Logout';
import Register from './components/forms/Register';
import AddNews from './components/forms/AddNews';
import { UserContext } from './components/auth/AuthContext';
import { Route, Redirect } from 'react-router-dom';

function App() {
  const [user] = useContext(UserContext);

  return (
    <div className='App'>
      <div className='main-column'>
        <Header />
        <Route exact path='/' component={Stories} />
        <Route path='/n/:slug' component={Comments} />
        <Route
          path='/login'
          render={() => (user.isLoggedIn ? <Redirect to='/' /> : <Login />)}
        />
        <Route
          path='/register'
          render={() => (user.isLoggedIn ? <Redirect to='/' /> : <Register />)}
        />
        <Route
          path='/add'
          render={() => (user.isLoggedIn ? <AddNews /> : <Login />)}
        />
        <Route
          path='/logout'
          render={() => (user.isLoggedIn ? <Logout /> : <Redirect to='/' />)}
        />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
