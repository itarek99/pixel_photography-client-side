const ReviewCard = ({ review }) => {
  const { name, photo, review_text } = review;

  return (
    <div className='bg-neutral p-6 rounded-2xl mb-6'>
      <div className='flex'>
        <div className='shrink-0 mr-4'>
          <img className='h-16 w-16 object-cover rounded-full' src={photo} alt='' />
        </div>
        <div>
          <p className='font-bold text-lg leading-6 mb-2'>{name}</p>
          <p>{review_text}</p>
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;
