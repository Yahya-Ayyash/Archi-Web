

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Villa Riverside",
      description: "A tranquil riverside villa offering breathtaking views, serene surroundings, and modern comforts. Perfect for relaxation and unforgettable escapes amidst nature's beauty",
      image: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-mble/tix-hotel/images-web/2023/01/12/8e6ce55f-836d-40fd-a3c6-246649104361-1673517234276-3e0f790661b8b05f9630e7410807527e.jpg", // Replace with actual image URLs
    },
    {
      id: 2,
      title: "Relaxing Villa",
      description: "A peaceful retreat, this relaxing villa blends modern luxury with serene ambiance, offering lush surroundings, cozy interiors, and the perfect escape from everyday life",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/606732343.jpg?k=4c937c3f5065606f709639aa6bc0fd4f3261ca035b278d3ff7c1b354ae0119cb&o=&hp=1", // Replace with actual image URLs
    },
    {
      id: 3,
      title: "Relaxing Night",
      description: "A soothing evening surrounded by tranquility, soft lighting, and gentle ambiance, perfect for unwinding and embracing a peaceful night's rest.",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/577033372.jpg?k=7f1ba1cd52decbb50cb55c5033d724399a9acd2d1b3f819993953085ef47dcbe&o=&hp=1", // Replace with actual image URLs
    },
  ];

  return (
    <section className="py-16 bg-gray-100" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
