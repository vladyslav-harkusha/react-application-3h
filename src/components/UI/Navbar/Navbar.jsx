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
          <Link to="/react-application-3h/about">About</Link>
        </li>

        <li className="navbar__link">
          <Link to="/react-application-3h/posts">Posts (with pagination)</Link>
        </li>

        <li className="navbar__link">
          <Link to="/react-application-3h/posts_infinity_scroll">Posts (infinity scroll)</Link>
        </li>
      </ul>
    </div>
  )
};
