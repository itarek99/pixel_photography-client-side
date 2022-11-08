import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Service = () => {
  const service = useLoaderData();
  const { _id, img, title, details } = service;
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const review_text = form.review.value;

    const review = { service_id: _id, review_text, name: user.displayName, email: user.email, photo: user.photoURL };

    console.log(review);
  };
  return (
    <div className='container mx-auto px-2'>
      <div className='my-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-0 lg:gap-x-12 gap-y-12 items-center'>
          <div className='w-full'>
            <img className='rounded-2xl w-full' src={img} alt={title} />
          </div>
          <div className='col-span-2'>
            <h2 className='text-4xl font-bold mb-4'>{title}</h2>
            <p className='mb-8'>{details}</p>
            <button className='btn w-36'>Book Now</button>
          </div>
        </div>
      </div>

      <div className='my-12'>
        <h2 className='text-4xl font-bold mb-4'>Reviews</h2>
        <div className='grid grid-cols-1  lg:grid-cols-3 gap-12'>
          <div className='col-span-2'>1</div>
          <div>
            <h4 className='text-center text-2xl font-bold mb-4'>Add A Review</h4>
            <form onSubmit={handleReview} className='card flex-shrink-0 w-full shadow-2xl bg-neutral'>
              <div className='card-body px-6'>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Review</span>
                  </label>
                  <textarea
                    rows={4}
                    name='review'
                    className='textarea textarea-bordered'
                    placeholder='your text'
                  ></textarea>
                </div>

                <div className='form-control mt-6'>
                  <button type='submit' className='btn btn-primary'>
                    Add Review
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
