import { BrowserRouter, Routes, Route } from 'react-router-dom';

// views
import HomeView from '../home/HomeView';
// components
import PrivateRoute from './PrivateRoute';
// resources
import Routing from './Routing';
import ViewNotFound from './ViewNotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME */}
        <Route
          element={
            <PrivateRoute
              needLogin={false}
              needLogout={false}
              redirectPath={false}
              user={false}
            >
              <HomeView />
            </PrivateRoute>
          }
          path={Routing.home}
        />

        {/* 404 */}
        <Route
          element={
            <PrivateRoute
              needLogin={false}
              needLogout={false}
              redirectPath={false}
              user={false}
            >
              <ViewNotFound />
            </PrivateRoute>
          }
          path={Routing.view404}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
