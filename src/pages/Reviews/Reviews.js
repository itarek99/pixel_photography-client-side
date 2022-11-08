import { useContext, useEffect, useState } from 'react';
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

  return (
    <div className='container mx-auto px-2 my-12'>
      <div className='max-w-4xl mx-auto'>
        {reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};
export default Reviews;
