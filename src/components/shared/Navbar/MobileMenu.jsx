import { Link } from "react-scroll";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { useSelector } from "react-redux";


const MobileMenu= () => {
    const theme = useSelector((state) => state.theme.theme);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false);
    return (
        <div className="block lg:hidden">
             {/* Mobile Menu Icon */}
          <button
            className="mt-2 text-2xl"
            onClick={toggleDrawer}
            aria-label="Toggle Menu"
          >
            <FiMenu />
          </button>

           {/* Drawer */}
      {drawerOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeDrawer}
          ></div>

          {/* Drawer Content */}
          <div
            className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full  shadow-md z-50 
          ${
            theme === "dark"
              ? "bg-black  "
              : "bg-white border-b border-gray-300"
          } `}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <button
                className="text-2xl text-[#FC4319]"
                onClick={closeDrawer}
                aria-label="Close Menu"
              >
                <IoClose />
              </button>
            </div>
            <ul className="flex flex-col mt-4 space-y-4 px-4">
              <li onClick={closeDrawer}>
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={closeDrawer}
                >
                  <div className="text-[#FC4319] hover:bg-[#FC4319] hover:text-white p-2 w-40 rounded-lg font-semibold   cursor-pointer ">
                    Home
                  </div>
                </Link>
              </li>
              <li onClick={closeDrawer}>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeDrawer}
                >
                  <div className="text-[#FC4319] hover:bg-[#FC4319] hover:text-white p-2 w-40 rounded-lg font-semibold   cursor-pointer ">
                    My Skills
                  </div>
                </Link>
              </li>
              <li onClick={closeDrawer}>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeDrawer}
                >
                  <div className="text-[#FC4319] hover:bg-[#FC4319] hover:text-white p-2 w-40 rounded-lg font-semibold   cursor-pointer ">
                    About Me
                  </div>
                </Link>
              </li>
              <li onClick={closeDrawer}>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeDrawer}
                >
                  <div className="text-[#FC4319] hover:bg-[#FC4319] hover:text-white p-2 w-40 rounded-lg font-semibold   cursor-pointer ">
                    My Projects
                  </div>
                </Link>
              </li>
              <li onClick={closeDrawer}>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeDrawer}
                >
                  <div className="text-[#FC4319] hover:bg-[#FC4319] hover:text-white p-2 w-40 rounded-lg font-semibold   cursor-pointer ">
                    Contact
                  </div>
                </Link>
              </li>
             
            </ul>
          </div>
        </>
      )}
            
        </div>
    );
};

export default MobileMenu;