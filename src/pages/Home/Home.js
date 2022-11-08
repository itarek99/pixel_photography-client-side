import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData } from 'react-router-dom';
import About from './components/About';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';

const Home = () => {
  const services = useLoaderData();

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
