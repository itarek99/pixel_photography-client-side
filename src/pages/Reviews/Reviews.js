import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useDynamicTitle from '../../hooks/useDynamicTitle';
import Review from './components/Review';

const Reviews = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noReview, setNoReview] = useState(false);
  useDynamicTitle('My Reviews');

  useEffect(() => {
    fetch(`https://pixel-server.vercel.app/reviews/?email=${user.email}`, {
      headers: { authorization: `Bearer ${localStorage.getItem('genius-token')}` },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return userLogOut();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
        setLoading(false);
        if (data.length === 0) {
          setNoReview(true);
        }
      });
  }, [user.email, setLoading, userLogOut]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure?');
    if (!confirmDelete) return;

    fetch(`https://pixel-server.vercel.app/reviews/${id}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then((data) => {
        const reviewsAfterDelete = reviews.filter((reviews) => reviews._id !== id);
        setReviews(reviewsAfterDelete);
        if (reviewsAfterDelete.length === 0) {
          setNoReview(true);
        }
        if (data.deletedCount > 0) {
          toast.error('Review Deleted', { duration: 1000 });
        }
      });
  };

  return (
    <div className='container mx-auto px-2 my-8 min-h-[75vh]'>
      {loading ? <LoadingSpinner /> : null}
      <div className='max-w-4xl mx-auto'>
        {noReview ? (
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
