import hero_bg from '../../../assets/image/hero_bg.jpg';

const Hero = () => {
  const hero = {
    backgroundImage: `url(${hero_bg})`,
  };

  return (
    <div className='hero h-[88vh]' style={hero}>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-4xl'>
          <h1 className='mb-5 text-5xl font-bold'>WELCOME! I'M TAREK</h1>
          <p className='mb-5 text-xl'>
            I'm freelance photographer specializing in people & portrait photography, based in London. Photography is my
            passion and I love to turn ideas into beautiful things. Looking for a caring, fun, passionate and creative
            photographer? It's me!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
