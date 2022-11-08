const About = () => {
  return (
    <div className='container mx-auto px-2 my-24'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 items-center'>
        <div className='order-last lg:order-first col-span-2'>
          <p className='uppercase font-bold'>Few Words About Me</p>
          <h3 className='text-4xl lg:text-5xl uppercase font-bold mb-6'>Nice to meet you</h3>
          <p className='mb-6'>
            Nice to meet you, friend! My name is Andrew Shade. I'm a professional photographer from Denver, state
            Colorado. I hope, that you will enjoy with my photo portfolio and after that we can create something great
            together!
          </p>
          <p>
            Through the lens the world looks different and i would like to show you this difference. I learned that from
            age 10, when I was first time take photos on manual camera with my Dad. After that with years of practice
            and tons of experience I learned the techniques, that helps me in my work with modern brands and companies.
            And all of this may be yours, just get in touch.
          </p>
        </div>
        <div>
          <img
            className='w-full'
            src='https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='owner'
          />
        </div>
      </div>
    </div>
  );
};
export default About;
