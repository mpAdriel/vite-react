import { Link } from 'react-router-dom';

// resources
import Routing from './Routing';
import src404NotFound from '../../../public/svg/rocket.svg';

const ViewNotFound = () => {
  return (
    <div className='h-100-vh d-flex-center flex-column'>
      <div className='my-3 text-center'>
        <h1 className='m-0'>404</h1>
        <img
          width={100}
          className='my-3'
          height={100}
          src={src404NotFound}
          alt='img-404-not-found'
        />
        <h2 className='m-0 text-uppercase'>not found</h2>
      </div>
      <span>¡URL no encontrada, lo sentimos!</span>
      <Link className='btn btn-dark mt-3' to={Routing.home}>
        Ir al inicio
      </Link>
    </div>
  );
};

export default ViewNotFound;
