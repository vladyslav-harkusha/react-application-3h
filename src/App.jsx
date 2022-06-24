import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/UI/Navbar/Navbar';
import { privateRoutes, publicRoutes } from './router';

export const App = () => {
  const isAuthorized = true;

  return (
    isAuthorized
      ? 
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
        </Routes>
      </BrowserRouter>
      
      : 
      <BrowserRouter>
        <Navbar />

        <Routes>
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
