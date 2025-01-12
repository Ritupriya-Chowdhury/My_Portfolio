import { Link } from "react-router-dom";


const DesktopMenu = () => {
    return (
        <div>

            <ul className="hidden md:flex space-x-8">
                <li className="hover:bg-[#FC4319] hover:text-white p-2 rounded-lg font-semibold cursor-pointer">
                    <Link to='/projects'>My Projects</Link>
                </li>
                <li className="hover:bg-[#FC4319] hover:text-white p-2 rounded-lg font-semibold cursor-pointer">
                    <Link to='/resume'>Resume</Link>
                </li>
                <li className="hover:bg-[#FC4319] hover:text-white p-2 rounded-lg font-semibold cursor-pointer">
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default DesktopMenu;