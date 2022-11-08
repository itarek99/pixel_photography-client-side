import ServiceCard from './ServiceCard';

const Services = ({ services }) => {
  return (
    <div className='container mx-auto px-2 my-24'>
      <div className='text-center max-w-4xl mx-auto'>
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
    </div>
  );
};
export default Services;
