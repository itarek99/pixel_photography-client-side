import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {
  const review = useLoaderData();
  const navigate = useNavigate();
  const { _id, review_text } = review;

  const handleUpdate = (e) => {
    e.preventDefault();
    const text = e.target.text.value;

    fetch(`https://pixel-server.vercel.app/review/${_id}`, {
      method: 'PATCH',
      body: JSON.stringify({ review_text: text }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          e.target.reset();
          toast.success('Review Updated!');
          navigate('/reviews');
        }
      });
  };

  return (
    <div className='container mx-auto h-[88vh] flex items-center justify-center px-2'>
      <form onSubmit={handleUpdate} className='max-w-lg w-full mx-auto'>
        <div className='form-control'>
          <label className='label mb-2 font-bold'>
            <span className='label-text text-xl'>Review Text</span>
          </label>
          <textarea
            name='text'
            defaultValue={review_text}
            rows={7}
            className='textarea py-3 textarea-bordered'
          ></textarea>
        </div>
        <button className='btn mt-5 w-full'>Update Review</button>
      </form>
    </div>
  );
};
export default Update;
