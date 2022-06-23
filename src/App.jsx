import './styles/App.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { About } from './pages/About';
import { Posts } from './pages/Posts';
import { Navbar } from './components/UI/Navbar/Navbar';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
};
