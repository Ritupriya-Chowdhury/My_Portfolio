import { useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../redux/slices/themeSlice";
import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  // Set the theme on the body based on the current theme
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <header
      className={` text-[#FC4319]
    ${theme === "dark" ? "bg-gray-900  " : "bg-white border-b border-gray-300"} 
    shadow-md w-full  fixed top-0 z-50 justify-between items-center `}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Logo />
        <div className="flex space-x-8">
          {/* Desktop Links */}
          <DesktopMenu />
          <div>
            <Link to="/resume">
              <div className="hover:bg-[#FC4319] text-xl lg:text-base hover:text-white px-2 py-1 lg:py-2 rounded-lg font-semibold cursor-pointer">
                Resume
              </div>
            </Link>
          </div>
          <MobileMenu />
          <button
            onClick={() => dispatch(toggleTheme())}
            className={`text-2xl px-2 bg-white text-[#FC4319]  ${
              theme === "dark" ? "" : ""
            }  
            rounded-full shadow-md hover:bg-gray-100 transition`}
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
