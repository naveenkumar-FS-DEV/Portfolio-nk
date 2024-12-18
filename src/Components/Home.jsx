import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles


const Home = () => {

  useEffect(() => {
          AOS.init(); // Initialize AOS without any options
        }, []);
  

    return (
      <div className="home py-5" id="home">
        <main className="mt-32 grid grid-cols-1 md:grid-cols-2 place-items-center p-10 gap-20">
          <div className="one" data-aos="fade-right" data-aos-duration="1200">
            <p className="text-3xl font-bold">Hi There,</p>
            <p className="text-3xl font-bold">
              I'm <span className="text-pink-700">Naveen Kumar</span>
            </p>
            <p className="text-xl font-semibold">
              A passionate Full Stack Developer in MERN with experience in building responsive web applications.
            </p>
            <button className="text-pink-700 border-2 border-pink-700 px-5 py-2 mt-1 font-bold hover:bg-pink-700 hover:text-white"><a href="https://drive.google.com/file/d/1SOGowqfY52lfc0DnmzsPnh7E2wLaGeam/view?usp=drivesdk" target='_blank'>Resume</a></button>
          </div>
          <div className="two" data-aos="fade-left" data-aos-duration="1200">
            <img 
              src="https://portfolio-phi-ten-58.vercel.app/assets/myImage2-BkSNQ6Ui.png" 
              alt="myImg" 
              className="w-full h-auto bg-gray-100 rounded-2xl shadow-2xl" 
            />
          </div>
        </main>
      </div>
    );
  }
  
  export default Home;