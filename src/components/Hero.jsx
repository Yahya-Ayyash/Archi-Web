

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center relative flex items-center"
      style={{ backgroundImage: "url('https://sheararchitecturaldesign.co.uk/wp-content/uploads/2022/05/Why-Is-An-Architectural-Design-Consultation-Important-For-Your-New-Home-1080x675.jpg.webp')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative text-white max-w-2xl px-6 md:px-12 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Best Solution For Your Home</h1>
        <p className="text-lg md:text-xl">
        Transform your living spaces with innovative designs and expert craftsmanship. At ArchiWeb, we create homes that inspire, combining aesthetics and functionality to suit your lifestyle. Discover the perfect solutions for your dream home today
        </p>
      </div>
    </section>
  );
};

export default Hero;
