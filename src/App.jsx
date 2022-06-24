import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/UI/Navbar/Navbar';
import { routes } from './router';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {routes.map((route, index) => 
          <Route 
            key={index} 
            path={route.path} 
            element={route.element} 
          />
        )}
      </Routes>
    </BrowserRouter>
  );
};
