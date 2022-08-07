import { Navigate } from 'react-router-dom';

// views
import HomeView from '../home/HomeView';

// resources
import Routing from './Routing';

const PrivateRoute = ({
  user,
  needLogin,
  needLogout,
  redirectPath = needLogin ? Routing.login : Routing.home,
  children,
}) => {
  if (!user && needLogin) {
    return <Navigate replace to={redirectPath} />;
  }

  if (user && needLogout) {
    return <Navigate replace to={redirectPath} />;
  }

  return children || <HomeView />;
};

export default PrivateRoute;
