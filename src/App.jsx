import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Posts } from './pages/Posts';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="navbar">
        <ul className="navbar__links">
          <a href="/about">About this App</a>
          <a href="/posts">Posts</a>
        </ul>
      </div>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
};
