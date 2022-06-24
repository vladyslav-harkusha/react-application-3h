import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AuthorizedContext } from './context';
import { Navbar } from './components/UI/Navbar/Navbar';
import { AppRouter } from './components/AppRouter';
import './styles/App.scss';

export const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuthorized(true);
    }
    setIsLoading(false);
  }, [])

  return (
    <AuthorizedContext.Provider value={{
      isAuthorized,
      setIsAuthorized,
      isLoading, 
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthorizedContext.Provider>
  );
};
