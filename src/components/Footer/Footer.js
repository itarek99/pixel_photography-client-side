import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='py-10  bg-neutral text-neutral-content '>
      <div className='footer container mx-auto px-2'>
        <div>
          <p className='font-bold text-3xl'>Pixel Photography</p>
          <p> &copy; 2022-2023 Pixel Photography, All Rights Reserved.</p>
        </div>
        <div>
          <span className='footer-title'>Social</span>
          <div className='grid grid-flow-col gap-4'>
            <a className='text-3xl' href='/'>
              <FaFacebookSquare />
            </a>
            <a className='text-3xl' href='/'>
              <FaInstagramSquare />
            </a>
            <a className='text-3xl' href='/'>
              <FaYoutubeSquare />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
