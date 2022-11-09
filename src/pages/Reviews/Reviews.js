import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Review from './components/Review';

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user.email]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure?');
    if (!confirmDelete) return;

    fetch(`http://localhost:5000/orders/${id}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then((data) => {
        const reviewsAfterDelete = reviews.filter((reviews) => reviews._id !== id);
        setReviews(reviewsAfterDelete);

        if (data.deletedCount > 0) {
          toast.error('Review Deleted', { duration: 1000 });
        }
      });
  };

  return (
    <div className='container mx-auto px-2 my-8 min-h-[70vh]'>
      <div className='max-w-4xl mx-auto'>
        {reviews.length === 0 ? (
          <div className='h-[70vh] flex items-center justify-center'>
            <p className='text-3xl uppercase font-bold'>No reviews were added</p>
          </div>
        ) : (
          <div>
            <h2 className='font-bold text-3xl mb-8'>My Reviews</h2>
            {reviews.map((review) => (
              <Review key={review._id} review={review} handleDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Reviews;
