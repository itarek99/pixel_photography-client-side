import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import useDynamicTitle from '../../hooks/useDynamicTitle';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const { pathname } = useLocation();

  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  useDynamicTitle('Pixel - Services');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='container mx-auto px-2 my-8 min-h-screen'>
      <div>
        <h2 className='text-3xl font-bold mb-6'>My All Services</h2>
      </div>

      <div className='mb-16'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8'>
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>
      {loading ? <LoadingSpinner /> : null}
    </div>
  );
};
export default Services;
