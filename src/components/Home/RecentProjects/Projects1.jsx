import { useSelector } from "react-redux";
import project1 from "../../../assets/Images/projects/night-queen-glow.vercel.app_(Nest Hub Max).png";
import { Link } from "react-router-dom";

const Projects1 = () => {
    const theme = useSelector((state) => state.theme.theme);
    return (
        <div
            className={`${theme === "dark"
                    ? "bg-gray-950 text-white"
                    : "bg-orange-100 text-black "
                } py-4 mx-4 rounded-lg`}
        >
            <div className="py-4 px-4">
                <div className="flex justify-between">
                    <p className="lg:text-xl text-lg font-bold py-2">NightQueenGlow</p>
                    <p
                        className="  font-bold text-[#FC4319] ml-4 
                            p-2 border border-[#FC4319] rounded-lg"
                    >
                        21 Dec, 2024-28 Dec, 2024
                    </p>
                </div>

                <div className="h-96 overflow-y-auto my-4">
                    <img src={project1} alt="Night Queen Glow" className="w-full" />
                </div>
                <div>
                    <p className="font-semibold  text-base ">
                        Night Queen Glow is a fully responsive and feature-rich e-commerce
                        platform designed for selling beauty and cosmetic products. This
                        project demonstrates expertise in modern web development practices,
                        secure authentication, and dashboard management for multiple user
                        roles.
                    </p>
                    <div className="flex justify-between  my-4">
                        <div>
                            <Link to="https://github.com/Ritupriya-Chowdhury/NightQueenGlow-Client">
                                <div  className=" text-lg font-bold text-[#FC4319] text-center
                            p-2 border border-[#FC4319] rounded-lg hover:bg-[#FC4319] hover:text-white w-36">Client Site</div>
                            </Link>
                        </div>
                        <div>
                            <Link to="https://github.com/Ritupriya-Chowdhury/NightQueenGlow-Server">
                                <div className=" text-lg font-bold text-[#FC4319] text-center
                            p-2 border border-[#FC4319] rounded-lg hover:bg-[#FC4319] hover:text-white w-36">Server Site</div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center my-4">
                        <Link to="https://night-queen-glow.vercel.app/">
                            <div className="px-6 py-3 bg-white text-[#FC4319] font-bold rounded-lg 
                            shadow-lg w-36 text-center  border border-[#FC4319] hover:bg-[#FC4319] hover:text-white">
                                Live Host
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects1;
