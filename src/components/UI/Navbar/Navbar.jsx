import { Link } from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar__links">
        <Link to="/about">About this App</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/login">Log in</Link>
      </ul>
    </div>
  )
};
