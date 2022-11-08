import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const Showcase = () => {
  const showCaseImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1588544108061-3c44c505d45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1508435234994-67cfd7690508?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1465188035480-cf3a60801ea5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    },
  ];

  return (
    <PhotoProvider>
      <div className='container mx-auto px-2 my-24'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-medium mb-4'>SOME OF MY SHOTS</h2>
          <p>Photography is my passion and I love to turn ideas into beautiful things.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {showCaseImages.map((img) => (
            <PhotoView key={img.id} src={img.url}>
              <img className='cursor-pointer' src={img.url} alt='showcase' />
            </PhotoView>
          ))}
        </div>
      </div>
    </PhotoProvider>
  );
};
export default Showcase;
