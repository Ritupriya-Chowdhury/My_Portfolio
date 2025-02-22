import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img1 from "../assets/Images/projects/car-rental-reservation-system-six.vercel.app_(Nest Hub Max) (1).png";
import img2 from "../assets/Images/projects/night-queen-glow.vercel.app_(Nest Hub Max) (3).png";
import img3 from "../assets/Images/projects/stalwart-lebkuchen-71fb6b.netlify.app_(Nest Hub Max) (3).png";
import img4 from "../assets/Images/projects/fractos-client.vercel.app_(Nest Hub Max) (1).png";
import img5 from "../assets/Images/projects/glittery-clafoutis-4c5a22.netlify.app_(Nest Hub Max).png";
import img6 from "../assets/Images/projects/thunderous-wisp-b26591.netlify.app_(Nest Hub Max).png";

const projects = [
    {
        "id": 1,
        "name": "NightQueenGlow",
        "image": img2,
        "technology": "React-Vite, react-router-dom, react-hook-form, tailwind, DaisyUi, react-icons, react-swiper, react-paginate, react-rating, sweetalert2, react-chartjs-2",
        "details": "NightQueenGlow is a beauty product e-commerce platform with buyer, seller, and admin dashboards, featuring Firebase Authentication and JWT authorization. Built with React, TypeScript, Node.js, MongoDB, and Tailwind CSS, it ensures a secure and seamless experience.",
        "client": "https://github.com/Ritupriya-Chowdhury/NightQueenGlow-Client",
        "server": "https://github.com/Ritupriya-Chowdhury/NightQueenGlow-Server",
        "liveHost": "https://night-queen-glow.vercel.app/",
        "features": [
            "This site is an e-commerce platform based on beauty products.",
            "Firebase Authentication system used.",
            "JWT authorization implemented.",
            "Three dashboards implemented: Buyer, Seller, and Admin.",
            "Admin email: ritupriyabgc@gmail.com, password: Kala_vuna_1@",
            "Seller email: developerpriya96@gmail.com, password: Kala_vuna_2@"
        ]
    },
    {
        "id": 2,
        "name": "RPCarRes",
        "image": img1,
        "technology": "React-Vite, Typescript, react-router-dom, react-hook-form, tailwind, react-helmet-async, react-icons, aos, react-redux, redux toolkit, react-swiper, redux-persist, sonner, express, mongoose, typescript, cors, dotenv, eslint, prettier, http-status, bcrypt, ts-node-dev, Jsonwebtoken.",
        "details": "RPCarRes is a car reservation website where users can book cars according to their schedule. It includes an admin panel for managing cars, bookings, and users, ensuring a smooth rental experience.",
        "client": "https://github.com/Ritupriya-Chowdhury/Car-Rental_Reservation_Client",
        "server": "https://github.com/Ritupriya-Chowdhury/car-Car-Rental-Reservation-System",
        "liveHost": "https://car-rental-reservation-system-six.vercel.app/",
        "features": [
            "A car reservation website where users can book cars according to their wishes.",
            "Two user roles: Admin and User.",
            "Admin can manage cars, bookings, and users.",
            "Users can book cars based on their preferred schedule.",
            "JWT authentication and protected routes.",
            "Admin email: web@programming-hero.com, password: ph-password"
        ]
    },
    {
        "id": 3,
        "name": "RPCamper",
        "image": img3,
        "technology": "React-Vite, Typescript, react-router-dom, react-hook-form, redux, tailwind, DaisyUi, rsuite, aos",
        "details": "A camper shop website offering a wide range of camping equipment for adventure enthusiasts. Users can browse products, manage items (add, update, delete), add products to their cart, and pay in cash.",
        "client": "https://github.com/Ritupriya-Chowdhury/RpCamper-Client",
        "server": "https://github.com/Ritupriya-Chowdhury/RpCamper-Server",
        "liveHost": "https://stalwart-lebkuchen-71fb6b.netlify.app/",
        "features": [
            "Users can see and browse all available camping products.",
            "Users can manage products (add, update, delete).",
            "Add products to their cart.",
            "Cash payment option available."
        ]
    },
    {
        "id": 4,
        "name": "Fractos",
        "image": img4,
        "technology": "React-Vite, Typescript, react-router-dom, react-hook-form, tailwind, redux-toolkit, react-icons, chart.js, express, mongoose, JWT, bcrypt, cors, dotenv, eslint, prettier",
        "details": "Fractos is an educational platform targeting students, offering live mock exams and performance analysis. It features dashboards for students, teachers, and admins, allowing teachers to create courses and add new questions.",
        "client": "https://github.com/Ritupriya-Chowdhury/Fractos-Client",
        "server": "https://github.com/Ritupriya-Chowdhury/Fractos-Server",
        "liveHost": "https://fractos.vercel.app/",
        "features": [
            "An educational platform targeting students.",
            "Students can attend live mock exams and analyze their performance.",
            "Three dashboards: User Dashboard, Teacher Dashboard, and Admin Dashboard.",
            "Teachers can start new courses and add new questions.",
            "Admin email: shamim5154@gmail.com, password: Shamim5154@",
            "Teacher email: aminulislam@gmail.com, password: aminulislam@gmal.comE2"
        ]
    },
    {
        "id": 5,
        "name": "Japanese Manga Anime Toy Shop",
        "image": img5,
        "technology": "React, Express, MongoDB, Tailwind, daisyUi, react-router-dom, react-icons, nodeJs, JWT Authentication",
        "details": "This site is focused on Japanese Manga anime. As a fan of Japanese manga and anime, I showcase various manga anime character toys. Users can add toys for sale, delete sold-out toys, and browse a variety of toys. I also include anime-related news.",
        "client": "https://github.com/Ritupriya-Chowdhury/Toy_Shop_Client",
        "server": "https://github.com/Ritupriya-Chowdhury/Toy_Shop_Server",
        "liveHost": "https://glittery-clafoutis-4c5a22.netlify.app/",
        "features": [
            "Users can add toys for sale.",
            "Users can delete sold-out toys.",
            "Wide variety of manga anime character toys available.",
            "Anime-related news section.",
            "User can log in using email: anika@gmail.com and password: 123456."
        ]
    },
    {
        "id": 6,
        "name": "SurTaal Music",
        "image": img6,
        "technology": "React, Express, MongoDB, Tailwind, daisyUi, react-router-dom, react-icons, nodeJs, JWT Authentication, helmet, Axios secure, tanstack query",
        "details": "SurTaal Music is an online platform where users can enroll in music classes. Students can select and join classes after payment, instructors can add new courses, and admins manage the entire system, including assigning roles.",
        "client": "https://github.com/Ritupriya-Chowdhury/SurTaal_Music_Client",
        "server": "https://github.com/Ritupriya-Chowdhury/SurTaal_Music_Server",
        "liveHost": "https://thunderous-wisp-b26591.netlify.app/",
        "features": [
            "Students can select and enroll in music classes after payment.",
            "Instructors can add new music classes.",
            "Admins can manage the entire platform and assign roles (Student, Instructor, Admin).",
            "Admins can promote a student or instructor to an admin.",
            "Admin email: ritupriy@gmail.com, password: R123t$"
        ]
    }
]

const ProjectDetails = () => {
    const { id } = useParams();
    const theme = useSelector((state) => state.theme.theme);
    const project = projects.find((proj) => proj.id === parseInt(id));
  
    if (!project) {
      return <div className="text-center mt-20 text-2xl">Project not found</div>;
    }
  
    return (
      <div
        className={`min-h-screen px-4 md:px-8 py-24 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}
      >
        <div className=" mx-auto flex flex-col lg:flex-row   rounded-lg  px-6 md:px-10">
          {/* Left side - Image */}
          <div className=" md:mx-8 my-8  overflow-y-auto h-[350px] md:h-[820px]">
            <img
              src={project.image}
              alt={project.name}
              className="w-[600px]  "
            />
          </div>
  
          {/* Right side - Details */}
          <div className="lg:w-2/3 md:pl-8  py-8">
            <h2 className="text-3xl font-bold  text-[#FC4319]">{project.name}</h2>
            <p className={`text-lg   mt-4 ${theme === "dark"? "text-gray-400": "text-gray-700"}`}>{project.details}</p>
            <p className="text-md font-semibold mt-6">Technologies: {project.technology}</p>
  
            <div className="mt-8 flex">
              {/* Key Features Section */}
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-semibold">Key Features:</h3>
                <ul className={`list-disc pl-6 space-y-2  ${theme === "dark"? "text-gray-400": "text-gray-700"}`}>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
  
              {/* Links Section */}
              <div className=" ml-4">
                <h3 className="text-xl font-semibold mb-4">Links:</h3>
                <div className="">
                    <div className="mb-4">
                    <Link
                    to={project.client}
                    target="_blank"
                    
                    
                  >
                    <div className="bg-white text-[#FC4319] text-center py-3 w-32 rounded-lg font-semibold  
                    hover:bg-[#FC4319] hover:text-white border border-[#FC4319] transition">
                    Client Repo
                    </div>
                  </Link>
                    </div>
                  
                  {project.server && (
                   <div className="mb-4">
                     <Link
                      to={project.server}
                      target="_blank"
                     
                      rel="noopener noreferrer"
                    >
                      <div  className="bg-white text-[#FC4319] text-center py-3 w-32 rounded-lg font-semibold  
                    hover:bg-[#FC4319] hover:text-white border border-[#FC4319] transition">
                      Server Repo
                      </div>
                    </Link>
                   </div>
                  )}
                 <div className="mb-4">
                 <Link
                    to={project.liveHost}
                    target="_blank"
                   
                    rel="noopener noreferrer"
                  >
                    <div className="bg-white text-[#FC4319] text-center py-3 w-32 rounded-lg font-semibold  
                    hover:bg-[#FC4319] hover:text-white border border-[#FC4319] transition">
                    Live Preview
                    </div>
                  </Link>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectDetails;
