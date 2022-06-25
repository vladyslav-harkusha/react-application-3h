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
        <li className="navbar__link">
          <Link to="/about">About this App</Link>
        </li>

        <li className="navbar__link">
          <Link to="/posts">Posts</Link>
        </li>

        <li className="navbar__link">
          <Link to="/posts_infinity_scroll">Posts (infinity scroll)</Link>
        </li>
      </ul>
    </div>
  )
};
