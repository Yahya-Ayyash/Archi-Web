

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8" id="footer">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        <div>
          <h3 className="text-2xl font-bold mb-4">ArchiWeb</h3>
          <p className="text-gray-400">
          ArchiWeb blends creativity with functionality to turn your vision into reality. Specializing in interior and exterior design, they deliver tailored solutions that make your space both beautiful and personal.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Articles</h4>
          <ul>
            <li>7 Tips for Kids Friendly Interior</li>
            <li>Eco-friendly design</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Location</h4>
          <p>Berlin, Germany</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
