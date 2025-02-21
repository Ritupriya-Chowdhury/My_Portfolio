import { Link } from "react-router-dom";
import img1 from "../assets/Images/projects/car-rental-reservation-system-six.vercel.app_(Nest Hub Max) (1).png"
import img2 from "../assets/Images/projects/night-queen-glow.vercel.app_(Nest Hub Max) (3).png"
import img3 from "../assets/Images/projects/stalwart-lebkuchen-71fb6b.netlify.app_(Nest Hub Max) (3).png"
import img4 from "../assets/Images/projects/fractos-client.vercel.app_(Nest Hub Max) (1).png"
import img5 from "../assets/Images/projects/glittery-clafoutis-4c5a22.netlify.app_(Nest Hub Max).png"
import img6 from "../assets/Images/projects/thunderous-wisp-b26591.netlify.app_(Nest Hub Max).png"




const AllProjects = () => {
    const projects = [
        {
          "id": 1,
          "name": "NightQueenGlow",
          "image":img2 ,
          "technology": "React-Vite, react-router-dom, react-hook-form, tailwind, DaisyUi, react-icons, react swiper, react-paginate, react-rating, sweetalert2, react-chartjs-2",
          "details": "NightQueenGlow is a beauty product e-commerce platform with buyer, seller, and admin dashboards, featuring Firebase Authentication and JWT authorization. Built with React, TypeScript, Node.js, MongoDB, and Tailwind CSS, it ensures a secure and seamless experience.",
          "client": "https://github.com/Ritupriya-Chowdhury/NightQueenGlow-Client",
          "server": "https://github.com/Ritupriya-Chowdhury/NightQueenGlow-Server",
          "liveHost": "https://night-queen-glow.vercel.app/",
          
        },
        {
          "id": 2,
          "name": "RPCarRes",
          "image": img1,
          "technology": "React-Vite, Typescript, react-router-dom, react-hook-form, tailwind, react-helmet-async, react-icons, aos, react-redux, redux toolkit , react swiper, redux-persist, sonner",
          "details": "A car reservation platform enabling users to book cars as per their preferences, with admin roles for managing cars, bookings, and users. Built using React, TypeScript, Node.js, Mongoose, Redux, and Tailwind CSS for a streamlined experience.",
          "client": "https://github.com/Ritupriya-Chowdhury/Car-Rental_Reservation_Client",
          "server": "https://github.com/Ritupriya-Chowdhury/car-Car-Rental-Reservation-System",
          "liveHost": "https://car-rental-reservation-system-six.vercel.app"
        },
        {
          "id": 3,
          "name": "RPCamper",
          "image": img3,
          "technology": "React-Vite, Typescript, react-router-dom, react-hook-form, redux, tailwind, DaisyUi, rsuite, aos",
          "details": "A camper shop website offering a wide range of camping equipment for adventure enthusiasts. Users can browse products, manage items (add, update, delete), and add products to their cart.",
          "client": "https://github.com/Ritupriya-Chowdhury/RpCamper-Client",
          "server": "https://github.com/Ritupriya-Chowdhury/RpCamper-Server",
          "liveHost": "https://stalwart-lebkuchen-71fb6b.netlify.app"
        },
        {
          "id": 4,
          "name": "Fractos",
          "image": img4,
          "technology": "Next.js , Mongoose, JWT, MongoDB, firebase , tailwind, HTML, CSS",
          "details": "Fractos is an educational platform designed for students to attend live mock exams and analyze performance. It includes dashboards for users, teachers, and admins, enabling features like course creation and question management. Built with Next.js, Mongoose, Firebase, JWT, and Tailwind CSS for an interactive learning experience.",
          "client": "https://github.com/shamimhossain515419/fractos-client",
          "server": "",
          "liveHost": "https://fractos-client.vercel.app/"
        },
        {
          "id": 5,
          "name": "Japanese Manga Anime Toy Shop",
          "image": img5,
          "technology": "React, Express, MongoDB, Tailwind, daisyUi,  react-router-dom, react-icons, nodeJs, JWT Authentication",
          "details": "To making this site I mainly focus on the Japanese Manga anime. Because I'm a fan fo Japanese Manga anime. So that, in this site I show some Manga Anime Character's Toys. User can add toy to sell. I show various kind of manga toys. user can delete toy which already sold out. I added some anime related news. Log in the account using email: anika@gmail.com. password: 123456",
          "client": "https://github.com/Ritupriya-Chowdhury/Toy_Shop_Client",
          "server": "https://github.com/Ritupriya-Chowdhury/Toy_Shop_Server",
          "liveHost": "https://glittery-clafoutis-4c5a22.netlify.app/"
        },
        {
          "id": 6,
          "name": "SurTaal Music",
          "image": img6,
          "technology": "React, Express, MongoDB, Tailwind, daisyUi,  react-router-dom, react-icons, nodeJs, JWT Authentication helmet, Axios secure, tanstack query",
          "details": "",
          "client": "https://github.com/Ritupriya-Chowdhury/SurTaal_Music_Client",
          "server": "https://github.com/Ritupriya-Chowdhury/SurTaal_Music_Server",
          "liveHost": "https://thunderous-wisp-b26591.netlify.app/"
        }
      ]
      ;
    
      return (
        <div className="min-h-screen bg-gray-100 p-6">
        
          <div className="grid grid-cols-1  gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg p-4  lg:flex"
              >
                <div className="mx-4 lg:mx-8 overflow-y-auto h-[300px] "><img
                  src={project.image}
                  alt={project.name}
                  className="w-[500px] md:w-[800px] lg:w-[500px]  object-cover rounded-md "
                /></div>
               <div className="mx-8">
               <h2 className="text-xl font-semibold mt-3">{project.name}</h2>
                <p className="text-lg text-gray-800 mt-1">{project.details}</p>
                <div className="mt-4 flex ">
                  <Link
                    to={`/projects/${project.id}`}
                    className="bg-blue-500 text-white px-3 py-2 mr-4 rounded-md text-sm hover:bg-blue-600"
                  >
                    View Details
                  </Link>
                  <Link
                    to={project.liveHost}
                    target="_blank"
                    className="bg-green-500 text-white px-3 py-2 rounded-md text-sm hover:bg-green-600"
                    rel="noopener noreferrer"
                  >
                    Live Preview
                  </Link>
                </div>
               </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

export default AllProjects;