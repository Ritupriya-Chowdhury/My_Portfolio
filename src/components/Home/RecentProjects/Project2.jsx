import { useSelector } from "react-redux";
import project2 from "../../../assets/Images/projects/stalwart-lebkuchen-71fb6b.netlify.app_(Nest Hub Max) (1).png";
import { Link } from "react-router-dom";

const Projects2 = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-950 text-white"
          : "bg-orange-100 text-black "
      } py-4 mx-4 rounded-lg`}
    >
      <div className="py-4 px-4">
        <div className="flex justify-between ">
          <p className="lg:text-xl text-lg font-bold py-2">RpCamper</p>
          <p
            className=" font-bold text-[#FC4319] ml-4 
                            p-2 border border-[#FC4319] rounded-lg"
          >
            15 Aug 2024-30 Aug, 2024
          </p>
        </div>

        <div className="h-96 overflow-y-auto my-4">
          <img src={project2} alt="Night Queen Glow" className="w-full" />
        </div>
        <div className="my-2">
          <p className="font-semibold  text-base ">
            RpCamper is an e-commerce platform specializing in camper tools and
            outdoor equipment. This project served as a foundational experience
            for integrating state management using Redux and adopting TypeScript
            for improved code quality and scalability.
          </p>
          <div className="flex justify-between  my-4">
            <div>
              <Link to="https://github.com/Ritupriya-Chowdhury/RpCamper-Client">
                <div
                  className=" text-lg font-bold text-[#FC4319] text-center
                            p-2 border border-[#FC4319] rounded-lg hover:bg-[#FC4319] hover:text-white w-36"
                >
                  Client Site
                </div>
              </Link>
            </div>
            <div>
              <Link to="https://github.com/Ritupriya-Chowdhury/RpCamper-Server">
                <div
                  className=" text-lg font-bold text-[#FC4319] text-center
                            p-2 border border-[#FC4319] rounded-lg hover:bg-[#FC4319] hover:text-white w-36"
                >
                  Server Site
                </div>
              </Link>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <Link to="https://stalwart-lebkuchen-71fb6b.netlify.app/">
              <div
                className="px-6 py-3 bg-white text-[#FC4319] font-bold rounded-lg 
                            shadow-lg w-36 text-center  border border-[#FC4319] hover:bg-[#FC4319] hover:text-white"
              >
                Live Host
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects2;
