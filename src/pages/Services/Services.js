import { useContext, useEffect } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Services = () => {
  const services = useLoaderData();
  const { user } = useContext(AuthContext);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='container mx-auto px-2 my-8'>
      <div>
        <h2 className='text-3xl font-bold mb-6'>My All Services</h2>
      </div>
      <div className='mb-16'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8'>
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>

        {user?.uid ? (
          <div className='text-end '>
            <Link>
              <button className='btn w-full max-w-xs'>Add More Service</button>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Services;
