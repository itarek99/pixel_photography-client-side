import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { _id, img, title, details, price } = service;
  return (
    <PhotoProvider>
      <div className='card bg-neutral shadow-xl'>
        <p className='absolute -top-4 -right-4 bg-accent h-20 w-20 text-2xl font-bold rounded-full flex items-center justify-center'>
          <span className='text-base font-medium -mt-1'>$</span>
          {price}
        </p>
        <figure className='px-6 pt-7'>
          <PhotoView src={img}>
            <img src={img} alt='Shoes' className='rounded-xl w-full aspect-video object-cover' />
          </PhotoView>
        </figure>
        <div className='card-body px-6'>
          <h2 className='card-title font-bold text-2xl'>{title}</h2>
          <p>
            {details.length >= 100 ? (
              <>
                {details.slice(0, 100) + '...'}
                <span>
                  [
                  {
                    <Link to={`/services/${_id}`} className='underline'>
                      read more
                    </Link>
                  }
                  ]
                </span>
              </>
            ) : (
              details
            )}
          </p>
          <div className='card-actions w-full mt-6'>
            <Link className='w-full' to={`/services/${_id}`}>
              <button className='btn btn-accent w-full'>View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};
export default ServiceCard;
