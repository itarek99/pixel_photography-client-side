import { useEffect } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData, useLocation } from 'react-router-dom';
import useDynamicTitle from '../../hooks/useDynamicTitle';
import About from './components/About';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';

const Home = () => {
  const services = useLoaderData();
  const { pathname } = useLocation();

  useDynamicTitle('Pixel - Photography Home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main>
      <Hero />
      <Services services={services} />
      <About />
      <Showcase />
    </main>
  );
};
export default Home;
