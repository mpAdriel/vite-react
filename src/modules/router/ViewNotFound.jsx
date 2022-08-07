import { Link } from 'react-router-dom';

// resources
import Routing from './Routing';

const ViewNotFound = () => {
  return (
    <div className='h-100-vh d-flex-center flex-column'>
      <div className='my-3 text-center'>
        <h1>404</h1>
        <h2 className='text-uppercase'>not found</h2>
      </div>
      <span>¡URL no encontrada, lo sentimos!</span>
      <Link className='btn btn-primary mt-3' to={Routing.home}>
        Ir al inicio
      </Link>
    </div>
  );
};

export default ViewNotFound;
