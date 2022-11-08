import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Review = ({ review }) => {
  const { review_for, review_text, service_id } = review;

  return (
    <div className='bg-neutral mb-6 p-8 rounded-2xl'>
      <h3 className='text-xl font-bold flex items-center mb-2'>
        <span className='mr-2'>{review_for}</span>
        <Link className='text-base' to={`/services/${service_id}`}>
          <FaExternalLinkSquareAlt />
        </Link>
      </h3>
      <p>{review_text}</p>
    </div>
  );
};
export default Review;
