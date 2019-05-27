import React from 'react';
import Sidebar from './components/sidebar';
import Stories from './components/stories';
import Comments from './components/comments';
import Header from './components/header';
import Login from './components/forms/Login';
import Register from './components/forms/Register';
import AddNews from './components/forms/AddNews';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <div className='main-column'>
        <Header />
        <Route exact path='/' component={Stories} />
        <Route path='/n/:slug' component={Comments} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/add' component={AddNews} />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
