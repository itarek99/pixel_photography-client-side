import { Link } from 'react-router-dom';
import ServiceCard from '../../../components/ServiceCard/ServiceCard';

const Services = ({ services }) => {
  return (
    <div className='container mx-auto px-2 my-24'>
      <div className='text-center max-w-3xl mx-auto mb-12'>
        <h2 className='font-bold uppercase text-3xl mb-6'>My Services</h2>
        <p>
          I offer my clients a wide range of services in various directions. Someone thinks that a professional
          photographer should be focused on one type of photography, but for my practice I have gained enough experience
          to feel confident in several different directions.
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>

      <div className='mt-12 text-center'>
        <Link to='/services'>
          <button className='btn w-full max-w-xs'>Explore All Services</button>
        </Link>
      </div>
    </div>
  );
};
export default Services;
