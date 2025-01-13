import { useSelector } from "react-redux";
import MyImg from "../../assets/Images/WhatsApp Image 2024-11-30 at 07.51.11.jpeg";

const AboutMe = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-950 text-white" : "bg-orange-100 text-black"
      } 
         py-8`}
    >
      <p className="font-bold text-3xl  text-[#FC4319] text-center py-4">
        More About Me
      </p>

      <div className="py-8 lg:flex">
        <div className="lg:w-1/3">
        <div className="lg:w-72 lg:h-72 w-80 h-80 rounded-full overflow-hidden mx-auto lg:mt-12">
          <img
            src={MyImg}
            alt="Ritupriya Chowdhury's Photo"
            className="w-full h-full object-cover"
          />
        </div>
        </div>

        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="border-b border-gray-500 py-4 mx-4">
                    <p className="text-2xl font-bold text-[#FC4319] pb-2">Name</p>
                    <p className="text-2xl font-semibold py-2">Ritupriya Chowdhury</p>
                </div>
                <div className="border-b border-gray-500 py-4 mx-4">
                    <p className="text-2xl font-bold text-[#FC4319] pb-2">Email</p>
                    <p className="text-2xl font-semibold py-2">ritupriyabgc@gmail.com</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="border-b border-gray-500 py-4 mx-4">
                    <p className="text-2xl font-bold text-[#FC4319] pb-2">Phone</p>
                    <p className="text-2xl font-semibold py-2">+880 16215 79052</p>
                </div>
                <div className="border-b border-gray-500 py-4 mx-4">
                    <p className="text-2xl font-bold text-[#FC4319] pb-2">Address</p>
                    <p className="text-2xl font-semibold py-2">Chattogram, Bangladesh</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="border-b border-gray-500 py-4 mx-4">
                    <p className="text-2xl font-bold text-[#FC4319] pb-2">Nationality</p>
                    <p className="text-2xl font-semibold py-2">Bangladeshi</p>
                </div>
                <div className="border-b border-gray-500 py-4 mx-4">
                    <p className="text-2xl font-bold text-[#FC4319] pb-2">Hobbies</p>
                    <p className="text-2xl font-semibold py-2">Watching animation and reading nobel</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
