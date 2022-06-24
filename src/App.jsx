import './styles/App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { About } from './pages/About';
import { Posts } from './pages/Posts';
import { PostIdPage } from './pages/PostIdPage';
import { Error } from './pages/Error';
import { Navbar } from './components/UI/Navbar/Navbar';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostIdPage />} />
        <Route path="/error" element={<Error />} />
        <Route path="/" element={<Navigate to="/posts" replace />} />
        <Route path="/*" element={<Navigate to="/error" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
