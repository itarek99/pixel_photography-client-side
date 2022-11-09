const AddService = () => {
  return (
    <div className='container h-[88vh] mx-auto px-2 mt-8'>
      <div className='flex items-center justify-center h-full '>
        <div className='card w-full max-w-xl mx-auto shadow-2xl bg-neutral -mt-16'>
          <form className='card-body pb-4'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input type='text' placeholder='email' name='email' className='input input-bordered' />
              </div>

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Price</span>
                </label>
                <input type='number' placeholder='0' className='input input-bordered' />
              </div>
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Service Photo URL</span>
              </label>
              <input type='text' placeholder='service photo' name='photo' className='input input-bordered' />
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Details</span>
              </label>
              <textarea rows={4} name='details' className='textarea textarea-bordered' placeholder='details'></textarea>
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
