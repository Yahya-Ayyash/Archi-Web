

const Testimonials = () => {
  const reviews = [
    {
      name: "James William",
      text: "ArchiWeb transformed my space into something truly remarkable. Their professionalism and creativity are unmatched",
      image: "https://i.kym-cdn.com/entries/icons/facebook/000/044/009/donny_savage.jpg", // Replace with actual image URLs
    },
    {
      name: "Michael Wickinson",
      text: "The team at ArchiWeb brought my vision to life effortlessly. I couldn’t be happier with the results—they exceeded every expectation.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPTXiXagdLNh1EVZ3-OL40IxdQyJ3AyQ6L4g&s", // Replace with actual image URLs
    },
    {
      name: "Vasili Petrov",
      text: "From start to finish, the experience with ArchiWeb was incredible. Their designs are innovative, and the attention to detail is outstanding!",
      image: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg", // Replace with actual image URLs
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
            <p className="text-gray-600 leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
