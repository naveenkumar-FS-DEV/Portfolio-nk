import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles


const Skills = () => {
    const skillList = [
        {
            name: "HTML"
        },
        {
            name: "CSS"
        },
        {
            name: "BOOTSTRAP"
        },
        {
            name: "TAILWIND CSS"
        },
        {
            name: "DAISY UI"
        },
        {
            name: "JAVASCRIPT"
        },
        {
            name: "REACTJS"
        },
        {
            name: "NODEJS"
        },
        {
            name: "EXPRESS JS"
        },
        {
            name: "MONGODB"
        }
    ];

    useEffect(() => {
        AOS.init(); // Initialize AOS without any options
      }, []);

  return (
    <div className="p-10 bg-gray-50" id="skills">
        <h1 className="text-center text-2xl font-semibold py-8">Skills</h1>
      <section className="mt-5 pb-12 flex justify-center items-center flex-wrap gap-10" data-aos="fade-up-right" data-aos-duration="1500">
        {
            skillList.map(skill =>(
                <>
                <button className="btns text-white px-6 py-3 font-medium rounded">{skill.name}</button>
                </>
            ))
        }
      </section>
    </div>
  )
}

export default Skills
