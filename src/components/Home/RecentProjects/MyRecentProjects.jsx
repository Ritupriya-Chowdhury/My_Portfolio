import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img1 from "../../../assets/Images/projects/night-queen-glow.vercel.app_(Nest Hub Max) (2).png";
import img2 from "../../../assets/Images/projects/car-rental-reservation-system-six.vercel.app_(Nest Hub Max).png";
import img3 from "../../../assets/Images/projects/stalwart-lebkuchen-71fb6b.netlify.app_(Nest Hub) (1).png";
import img4 from "../../../assets/Images/projects/fractos-client.vercel.app_(Nest Hub Max).png";

const MyRecentProjects = () => {
  const theme = useSelector((state) => state.theme.theme);

  // Sample project data
  const projects = [
    {
      id: 1,
      name: "NightQueenGlow",
      image: img1, // Use the imported image directly
      description:
        "NightQueenGlow is a beauty product e-commerce platform with buyer, seller, and admin dashboards, featuring Firebase Authentication and JWT authorization. Built with React, TypeScript, Node.js, MongoDB, and Tailwind CSS, it ensures a secure and seamless experience.",
      serverSite:
        "https://github.com/Ritupriya-Chowdhury/NightQueenGlow-Server",
      clientSite:
        "https://github.com/Ritupriya-Chowdhury/NightQueenGlow-Client",
      liveHost: "https://night-queen-glow.vercel.app/",
    },
    {
      id: 2,
      name: "RPCarRes",
      image: img2,
      description:
        "A car reservation platform enabling users to book cars as per their preferences, with admin roles for managing cars, bookings, and users. Built using React, TypeScript, Node.js, Mongoose, Redux, and Tailwind CSS for a streamlined experience.",
      serverSite:
        "https://github.com/Ritupriya-Chowdhury/car-Car-Rental-Reservation-System",
      clientSite:
        "https://github.com/Ritupriya-Chowdhury/Car-Rental_Reservation_Client",
      liveHost: "https://car-rental-reservation-system-six.vercel.app/",
    },
    {
      id: 3,
      name: "RPCamper",
      image: img3,
      description:
        "A camper shop website offering a wide range of camping equipment for adventure enthusiasts. Users can browse products, manage items (add, update, delete), and add products to their cart.",
      serverSite: "https://github.com/Ritupriya-Chowdhury/RpCamper-Server",
      clientSite: "https://github.com/Ritupriya-Chowdhury/RpCamper-Client",
      liveHost: "https://stalwart-lebkuchen-71fb6b.netlify.app/",
    },
    {
      id: 4,
      name: "Fractos",
      image: img4,
      description:
        "Fractos is an educational platform designed for students to attend live mock exams and analyze performance. It includes dashboards for users, teachers, and admins, enabling features like course creation and question management. Built with Next.js, Mongoose, Firebase, JWT, and Tailwind CSS for an interactive learning experience.",
      serverSite: "https://github.com/shamimhossain515419/fractos-client",
      clientSite: "https://github.com/shamimhossain515419/fractos-client",
      liveHost: "https://fractos-client.vercel.app/",
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
              className="rounded-md w-[500px] md:w-[670px] lg:w-[600px] h-64 md:h-[700px] lg:h-96 overflow-x-auto mx-auto object-cover mb-4"
            />
          </div>
            <h3 className="font-semibold text-xl mb-2">{project.name}</h3>
            <p className="text-sm mb-4">{project.description}</p>
            <div className="flex justify-between">
              <Link
                to={project.serverSite}
                className="hover:bg-[#FC4319] border border-[#FC4319] font-semibold hover:text-white px-4 py-2 rounded bg-white text-[#FC4319]"
              >
                Server Site
              </Link>
              <Link
                to={project.liveHost}
                className="bg-[#FC4319] text-white px-4 py-2 rounded hover:px-6 hover:text-xl"
              >
                Live Host
              </Link>
              <Link
                to={project.clientSite}
                className="hover:bg-[#FC4319] border border-[#FC4319] font-semibold hover:text-white px-4 py-2 rounded bg-white text-[#FC4319]"
              >
                Client Site
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRecentProjects;
