import { useContext } from 'react';
import { AuthorizedContext } from '../../../context';
import { Link } from 'react-router-dom';
import { MyButton } from '../button/MyButton';

import './Navbar.scss';

export const Navbar = () => {
  const { isAuthorized, setIsAuthorized } = useContext(AuthorizedContext);

  const logout = () => {
    setIsAuthorized(false);
    localStorage.removeItem('auth')
  }

  return (
    <div className="navbar">
      {isAuthorized &&
        <MyButton onClick={logout}>
          Exit
        </MyButton>
      }

      <ul className="navbar__links">
        <Link to="/about">About this App</Link>
        <Link to="/posts">Posts</Link>
      </ul>
    </div>
  )
};
