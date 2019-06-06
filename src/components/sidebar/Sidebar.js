import React, { useContext } from 'react';
import Box from './Box';
import Footer from './Footer';
import AddButton from './AddButton';
import { Link } from 'react-router-dom';
import { UserContext } from '../auth/AuthContext';

const Sidebar = () => {
  const [user] = useContext(UserContext);

  return (
    <aside>
      <AddButton />

      <Box>
        {user.isLoggedIn ? (
          <>
            <Link to={'/account'}>{user.username}</Link>
            <Link to={'/logout'}>Logout</Link>
          </>
        ) : (
          <>
            <Link to={'/login'}>Log in</Link>
            <Link to={'/register'}>Register</Link>
          </>
        )}
      </Box>

      <Box heading='Popular'>
        <a href='http://'>Today</a>
        <a href='http://'>This week</a>
        <a href='http://'>This month</a>
        <a href='http://'>All time</a>
      </Box>

      <Box heading='Tags'>
        <a href='http://'>/bitcoin</a>
        <a href='http://'>/ethereum</a>
        <a href='http://'>/ieos</a>
        <a href='http://'>/regulations</a>
        <a href='http://'>/securities</a>
      </Box>

      <Footer />
    </aside>
  );
};

export default Sidebar;
