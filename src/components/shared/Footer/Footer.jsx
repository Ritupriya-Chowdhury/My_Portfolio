import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiRefinedgithub } from "react-icons/si";
import { Link } from "react-router-dom";



const Footer = () => {

    return (
        <div className={`bg-black  text-white text-center py-4`}>

            <div className="flex justify-center pt-4 text-2xl space-x-8 ">
                <div>
                    <Link to="https://web.facebook.com/ritupriya.chowdhury.5">
                        <div className="border-2 rounded p-2 hover:bg-[#FC4319] hover:border-[#FC4319]">
                            <FaFacebookF />
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="https://www.linkedin.com/in/ritupriya-chowdhury-3769a4332">
                        <div className="border-2 rounded p-2 hover:bg-[#FC4319] hover:border-[#FC4319]">
                            <FaLinkedinIn />
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="https://github.com/Ritupriya-Chowdhury">
                        <div className="border-2 rounded p-2 hover:bg-[#FC4319] hover:border-[#FC4319]">
                            <SiRefinedgithub />
                        </div>
                    </Link>
                </div>
            </div>

            <p className="text-center opacity-70 py-4">© 2025 All Rights Reserved. Developed By Ritupriya</p>

        </div>
    );
};

export default Footer;