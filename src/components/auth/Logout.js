import { useContext } from 'react';
import { UserContext } from '../auth/AuthContext';

const Logout = () => {
  const [, setUser] = useContext(UserContext);
  setUser(false);

  return null;
};

export default Logout;
