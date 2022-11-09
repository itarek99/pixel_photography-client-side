import toast from 'react-hot-toast';
import useDynamicTitle from '../../hooks/useDynamicTitle';

const AddService = () => {
  useDynamicTitle('Add Service');

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const img = form.photo.value;
    const details = form.details.value;
    const service = { title, price, img, details };

    fetch(`http://localhost:5000/services`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('New Service Added!', { duration: 2000 });
          form.reset();
        }
      });
  };

  return (
    <div className='container h-[88vh] mx-auto px-2 mt-8'>
      <div className='flex items-center justify-center h-full '>
        <div className='card w-full max-w-xl mx-auto shadow-2xl bg-neutral -mt-16'>
          <form onSubmit={handleAddService} className='card-body pb-4'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Title</span>
                </label>
                <input type='text' placeholder='title' name='title' className='input input-bordered' required />
              </div>

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Price</span>
                </label>
                <input type='number' placeholder='0' name='price' className='input input-bordered' required />
              </div>
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Service Photo URL</span>
              </label>
              <input type='text' placeholder='service photo' name='photo' className='input input-bordered' required />
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Details</span>
              </label>
              <textarea rows={4} name='details' className='textarea textarea-bordered' placeholder='details' required />
            </div>
            <div className='form-control my-6'>
              <button type='submit' className='btn btn-primary'>
                Add Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddService;
