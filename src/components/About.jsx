

const About = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8" id="about">
        <img
          src="https://i.pinimg.com/736x/a5/f0/82/a5f08267398e67e560b02dd1ecc2ac1f.jpg"
          alt="About us"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
          At ArchiWeb, we bring your vision to life by crafting unique and inspiring spaces. Specializing in planning, interior, and exterior design, we combine innovation with practicality to create extraordinary environments. Our goal is to design homes and spaces that reflect your style and needs, delivering tailored solutions that elevate your living experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
