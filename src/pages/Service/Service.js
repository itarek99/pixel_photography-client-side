import { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReviewCard from './Components/ReviewCard';

const Service = () => {
  const service = useLoaderData();
  const { _id, img, title, details } = service;
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/?service_id=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [_id]);

  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const review_text = form.review.value;
    const review = {
      service_id: _id,
      review_for: title,
      review_text,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    };

    setReviews([...reviews, review]);
    form.reset();

    fetch(`http://localhost:5000/reviews`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(review),
    });
  };
  return (
    <div className='container mx-auto px-2'>
      <div className='my-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 items-center'>
          <div className='w-full'>
            <img className='rounded-2xl w-full' src={img} alt={title} />
          </div>
          <div className='lg:col-span-2'>
            <h2 className='text-4xl font-bold mb-4'>{title}</h2>
            <p className='mb-8'>{details}</p>
            <button className='btn w-36'>Book Now</button>
          </div>
        </div>
      </div>

      <div className='my-20'>
        <div className='grid grid-cols-1  lg:grid-cols-5 gap-12'>
          <div className='lg:col-span-3'>
            <h2 className='text-4xl font-bold mb-8'>Reviews</h2>
            <div>
              {reviews.map((review) => (
                <ReviewCard key={review._id} review={review} />
              ))}
            </div>
          </div>
          <div className='lg:col-span-2 max-w-md w-full mx-auto'>
            <h4 className='text-2xl font-bold mb-4'>Add A Review</h4>
            {user?.uid ? (
              <form onSubmit={handleAddReview} className=' card flex-shrink-0 w-full shadow-2xl bg-neutral'>
                <div className='card-body px-6'>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Review</span>
                    </label>
                    <textarea
                      rows={4}
                      name='review'
                      className='textarea textarea-bordered'
                      placeholder='your message...'
                    ></textarea>
                  </div>

                  <div className='form-control mt-6'>
                    <button type='submit' className='btn btn-primary'>
                      Add Review
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div>
                You must be{' '}
                <Link className='underline' to='/login'>
                  logged in
                </Link>{' '}
                to post a review.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
