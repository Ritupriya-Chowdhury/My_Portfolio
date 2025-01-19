import { Link } from "react-scroll";

const DesktopMenu = () => {
  return (
    <div>
      <ul className="hidden lg:flex space-x-8">
        <li >
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
           <div className="hover:bg-[#FC4319] hover:text-white p-2 rounded-lg font-semibold cursor-pointer">
           Home
           </div>
          </Link>
        </li>
        <li >
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="hover:bg-[#FC4319] hover:text-white p-2 rounded-lg font-semibold cursor-pointer">
            My Skills
            </div>
          </Link>
        </li>
        <li >
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
            <div className="hover:bg-[#FC4319] hover:text-white p-2 rounded-lg font-semibold cursor-pointer">
            About me
            </div>
          </Link>
        </li>
        <li >
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="hover:bg-[#FC4319] hover:text-white p-2 rounded-lg font-semibold cursor-pointer">
            My Projects
            </div>
          </Link>
        </li>
        <li >
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="hover:bg-[#FC4319] hover:text-white p-2 rounded-lg font-semibold cursor-pointer">
            Contact
            </div>
          </Link>
        </li>
       
      </ul>
      
    </div>
  );
};

export default DesktopMenu;
