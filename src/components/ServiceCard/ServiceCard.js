import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { img, title, details } = service;
  return (
    <PhotoProvider>
      <div className='card bg-neutral shadow-xl'>
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
                <span>[{<Link className='underline'>read more</Link>}]</span>
              </>
            ) : (
              details
            )}
          </p>
          <div className='card-actions w-full mt-6'>
            <button className='btn btn-primary w-full'>Explore Now</button>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};
export default ServiceCard;
