import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Details from '../pages/details';
import Home from '../pages/home';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home/>
          }
          >
        </Route>

        <Route
          path="/cadastro"
          element={
            <Details/>
          }
          >
        </Route>

        <Route
          path="/editar/:id"
          element={
            <Details/>
          }
          >
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };

