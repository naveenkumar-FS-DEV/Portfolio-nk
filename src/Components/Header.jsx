import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header
        className="flex justify-between items-center text-pink-700 p-6 fixed top-0 left-0 z-50 w-full"
        style={{ backgroundColor: "#F3EBE9" }}
      >
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {/* Hamburger Icon */}
            <div className="w-6 h-0.5 bg-pink-700 mb-1"></div>
            <div className="w-6 h-0.5 bg-pink-700 mb-1"></div>
            <div className="w-6 h-0.5 bg-pink-700"></div>
          </button>
        </div>
        <nav
          className={`absolute top-16 left-0 right-0 bg-gray-50 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          } md:static md:block md:bg-transparent md:top-auto md:left-auto md:right-auto`}
        >
          <ul className="flex flex-col md:flex-row md:justify-center items-center gap-4 p-4 md:p-0 font-bold">
            <Link
              to="home"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              spyThrottle={500}
            >
              <li className="hover:border-b-4 hover:border-pink-700 cursor-pointer">
                Home
              </li>
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              spyThrottle={500}
            >
              <li className="hover:border-b-4 hover:border-pink-700 cursor-pointer">
                Skills
              </li>
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              spyThrottle={500}
            >
              <li className="hover:border-b-4 hover:border-pink-700 cursor-pointer">
                Projects
              </li>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              spyThrottle={500}
            >
              <li className="hover:border-b-4 hover:border-pink-700 cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
