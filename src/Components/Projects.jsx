import image1 from "../assets/foodybuddy.png";
import image2 from "../assets/youtube ui.png";
import image3 from "../assets/panel website ui.png";
import image4 from "../assets/coming soon.jpg"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles


const Projects = () => {
  const projectsData = [{
    id: 1,
    title: "Food Ordering Site",
    image: image1,
    description: "Developed a food ordering platform using ReactJS and Redux Toolkit, integrating Swiggy API for real-time data. Optimized performance for fast load times and a smooth user experience through scalable state management.",
    github: "https://github.com/naveenkumar-FS-DEV/foodybuddy.git",
    Live: "https://foodybuddy.vercel.app/"
  },
  {
    id: 2,
    title: "Youtube UI",
    image: image2,
    description: "Created a YouTube interface using React and Tailwind CSS, allowing users to effortlessly explore and watch videos. Integrated real-world YouTube API data with dynamic routing for seamless searching, viewing, and navigation.",
    github: "https://github.com/naveenkumar-FS-DEV/Youtube-site.git",
    Live: "https://youtube-site-seven.vercel.app/"
  },
  {
    id: 3,
    title: "Solar Panel site",
    image: image3,
    description: "Created a solar panel manufacturing website using ReactJS and Tailwind CSS with responsive components for Home, About, Products, and Contact. Implemented React Router for seamless navigation. Optimized the design for a modern user experience.",
    github: "https://github.com/naveenkumar-FS-DEV/panelboard-website.git",
    Live: "https://panelboard-website.vercel.app/"
  },
  {
    id: 4,
    title: "Food Ordering Site",
    image: image4,
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  }
];

useEffect(() => {
        AOS.init(); // Initialize AOS without any options
      }, []);

  return (
    <div className="py-2" style={{backgroundColor: "#EEDCDA"}} id="projects">
      <h2 className="text-center text-pink-700 text-2xl font-semibold mt-5">Projects</h2>
      <section className="mt-5 flex justify-center items-center gap-10 p-10 flex-wrap">
        {projectsData.map(project => (
          <div key={project.id} className="card w-72 shadow-2xl rounded-none" data-aos="zoom-in" data-aos-duration="1500">
            <figure>
              <img
                src={project.image}
                alt={project.title} className="p-3 bg-gray-50 h-48"/>
            </figure>
            <div className="card-body bg-gray-50">
              <h2 className="card font-bold text-lg">{project.title}</h2>
              <p style={{fontSize: "12px"}}>{project.description}</p>
              <div className="card-actions flex justify-between">
                <button className="bg-black p-1 px-3 text-white"><a href={project.github}>Github</a></button>
                <button className="bg-black p-1 text-white"><a href={project.Live}>Live Demo</a></button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;