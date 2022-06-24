import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/UI/Navbar/Navbar';
import { privateRoutes, publicRoutes } from './router';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {privateRoutes.map((route, index) => 
          <Route 
            key={index} 
            path={route.path} 
            element={route.element} 
          />
        )}

        {publicRoutes.map((route, index) => 
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
