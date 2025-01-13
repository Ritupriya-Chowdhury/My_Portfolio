import { useEffect, useState } from 'react';
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../redux/slices/themeSlice';
import DesktopMenu from './DesktopMenu';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  // Set the theme on the body based on the current theme
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <header className={` text-[#FC4319]
    ${theme === 'dark' ? 'bg-gray-900  ' : 'bg-white border-b border-gray-300'} 
    shadow-md w-full  fixed top-0 z-50 justify-between items-center `}>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Logo />
        <div className='flex space-x-8'>
          {/* Desktop Links */}
          <DesktopMenu />

          {/* Mobile Menu Icon */}
          <button
            className="block md:hidden text-2xl"
            onClick={toggleDrawer}
            aria-label="Toggle Menu"
          >
            <FiMenu />
          </button>
          <button
            onClick={() => dispatch(toggleTheme())}
            className={`text-2xl p-2 bg-white text-[#FC4319]  ${theme === 'dark' ? '' : ''}  
            rounded-full shadow-md hover:bg-gray-100 transition`}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
        </div>
      </nav>

      {/* Drawer */}
      {drawerOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeDrawer}
          ></div>

          {/* Drawer Content */}
          <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full  shadow-md z-50 
          ${theme === 'dark' ? 'bg-black  ' : 'bg-white border-b border-gray-300'} `}>
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
              <li
                className="text-[#FC4319] hover:bg-[#FC4319] hover:text-white p-2 w-40 rounded-lg font-semibold   cursor-pointer "
                onClick={closeDrawer}
              >
               <Link to='/projects'>My Projects</Link>
              </li>
              <li
                className="text-[#FC4319] hover:bg-[#FC4319] hover:text-white p-2 w-40 rounded-lg font-semibold  cursor-pointer"
                onClick={closeDrawer}
              >
               <Link className='/resume'>Resume</Link>
              </li>
             
            </ul>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
