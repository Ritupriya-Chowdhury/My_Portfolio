import { useSelector } from "react-redux";
import img1 from "../../../assets/Images/projects/night-queen-glow.vercel.app_(Nest Hub Max) (2).png";
import img2 from "../../../assets/Images/projects/Screenshot (37).png";
import img3 from "../../../assets/Images/projects/stalwart-lebkuchen-71fb6b.netlify.app_(Nest Hub) (1).png";
import img4 from "../../../assets/Images/projects/fractos-client.vercel.app_(Nest Hub Max).png";
import { Link } from "react-router-dom";

const MyRecentProjects = () => {
  const theme = useSelector((state) => state.theme.theme);

  // Sample project data
  const projects = [
    {
      id: 1,
      name: "NightQueenGlow",
      image: img1, 
      technology:
        "React-Vite, react-router-dom, react-hook-form, tailwind, DaisyUi, react-icons, react swiper,react-paginate, react-rating, sweetalert2, react-chartjs-2",
    },
    {
      id: 2,
      name: "RPCarRes",
      image: img2,
      technology:
        "React-Vite, Typescript, react-router-dom, react-hook-form, tailwind, react-helmet-async, react-icons, aos, react-redux, redux toolkit , react swiper, redux-persist, sonner",
    },
    {
      id: 3,
      name: "RPCamper",
      image: img3,
      technology:
        "React-Vite, Typescript, react-router-dom, react-hook-form, redux, tailwind,"
    },
    {
      id: 4,
      name: "Fractos",
      image: img4,
      technology:
        "Next.js , Mongoose, JWT, MongoDB, firebase , tailwind, HTML, CSS",
    },
  ];

  return (
    <div
      className={`${theme === "dark" ? "bg-black" : "bg-slate-50"} py-8`}
      id="projects"
    >
      <div>
        <p className="font-bold text-3xl text-[#FC4319] text-center py-4">
          My Projects
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 py-4 lg:py-8 gap-4 lg:gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${
              theme === "dark"
                ? "text-white bg-gray-800"
                : "text-gray-900 bg-white"
            } rounded-lg shadow-md p-4`}
          >
          <div className="">
          <img
              src={project.image}
              alt={project.name}
              className="rounded-md w-[500px] md:w-[670px] lg:w-[600px] h-64 md:h-[700px] 
              lg:h-96 overflow-x-auto mx-auto object-cover mb-8"
            />
          </div>
            <h3 className="font-semibold text-xl mb-4">{project.name}</h3>
            <p className="text-sm mb-4"><strong>Technology:</strong> {project.technology}</p>
           <div className="flex justify-center my-8">
           <Link
                to={`/all-projects/${project.id}`}
                className="hover:bg-[#FC4319] border border-[#FC4319] font-semibold hover:text-white px-4 py-2 rounded bg-white text-[#FC4319]"
              >
                Details
              </Link>
           </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-4">
      <Link
                to="/all-projects"
                className="hover:bg-[#FC4319] border border-[#FC4319] font-semibold hover:text-white px-4 py-2 rounded bg-white text-[#FC4319]"
              >
                VIew All
              </Link>
      </div>
    </div>
  );
};

export default MyRecentProjects;
