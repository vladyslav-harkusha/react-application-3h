import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthorizedContext } from '../context';
import { privateRoutes, publicRoutes } from '../router';
import { Loader } from './UI/Loader/Loader';

export const AppRouter = () => {
  const {isAuthorized, isLoading} = useContext(AuthorizedContext);
  console.log(isAuthorized, isLoading);

  if (isLoading) {
    return <Loader />
  }

  return (
    isAuthorized
      ?
      <Routes>
        {privateRoutes.map((route, index) =>
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        )}
      </Routes>
      :
      <Routes>
        {publicRoutes.map((route, index) =>
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        )}
      </Routes>
  );
};