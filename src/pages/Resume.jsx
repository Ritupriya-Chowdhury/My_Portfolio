import { useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleTheme } from "../redux/slices/themeSlice";

const Resume = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  // Apply the current theme to the document's root
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const handleDownloadResume = () => {
    const downloadLink =
      "https://drive.google.com/uc?export=download&id=1UvSE6981k5SaZFAQNMiCDIbqdGAV_KMl";
    const link = document.createElement("a");
    link.href = downloadLink;
    link.download = "Ritupriya_Resume.pdf";
    link.click();
  };

  return (
    <div
      className={` min-h-screen overflow-y-auto ${
        theme === "dark" ? "bg-gray-900" : "bg-orange-100"
      }`}
    >
      <div className="flex justify-between items-center mb-6 p-8 ">
        <div>
          <Link to="/">
            <div
              className="border border-[#FC4319] bg-white text-sm md:text-base text-[#FC4319]
            px-2 md:px-4 py-2 rounded-lg font-semibold text-center hover:bg-[#FC4319] hover:text-white"
            >
              Back to Home
            </div>
          </Link>
        </div>
        <div>
          <button
            onClick={() => dispatch(toggleTheme())}
            className={`text-2xl p-2 mx-2 bg-white text-[#FC4319] w-10 h-10 rounded-full shadow-md hover:bg-gray-100 transition`}
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>
        </div>
        <div>
          <button
            onClick={handleDownloadResume}
            className="border border-[#FC4319] text-sm md:text-base bg-white text-[#FC4319] px-2 md:px-4 md:py-2 py-1 rounded-lg font-semibold text-center hover:bg-[#FC4319] hover:text-white"
          >
            Download Resume
          </button>
        </div>
      </div>

      <div className="my-4 md:my-12 mx-4 md:mx-12 bg-white p-4 md:p-6 lg:p-12 ">
        <div className="flex justify-between ">
          <div>
            <p className="text-sm md:text-3xl text-blue-600 font-bold">
              Ritupriya Chowdhury
            </p>
            <div className="text-[8px] md:text-lg">
              <p>Mailing Address: 9 No, Kadhurkhil,</p>
              <p>Thana: Boalkhali, Dist: Chattogram,</p>
              <p>Bangladesh</p>
            </div>
          </div>
          <div className="text-[8px] md:text-lg">
            <div className="space-y-1 md:space-y-3">
              <p>Email: developerpriya96@gmail.com</p>
              <p>Contact: +880-16215-79052</p>
            </div>
            <div className="flex mt-1 md:mt-3">
              <div className="border-r-2 border-blue-600 pr-2">
                <Link to="http://www.linkedin.com/in/ritupriya-chowdhury-3769a4332">
                  <div className="text-blue-600 underline font-bold">
                    LinkedIn
                  </div>
                </Link>
              </div>
              <div className="border-r-2 border-blue-600 px-2">
                <Link to="https://github.com/Ritupriya-Chowdhury">
                  <div className="text-blue-600 underline font-bold">
                    Github
                  </div>
                </Link>
              </div>
              <div className="">
                <Link to="https://ritupriya.vercel.app/">
                  <div className="text-blue-600 underline font-bold pl-2">
                    Portfolio
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 pt-8 pb-2">
          <div>
            <p className="text-lg md:text-2xl font-bold mb-2 uppercase">
              Web Developer{" "}
            </p>
            <p className="text-[14px] md:text-base md:text-justify">
              Learned and practiced Web Software/Application Development. And
              I&apos;m currently seeking an internship or junior web
              Software/Application developer/support job. I&apos;m a quick
              learner and I love to learn and apply new things. I always enjoy
              teamwork.{" "}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-lg md:text-2xl font-bold mb-2 uppercase">
              Skills:{" "}
            </p>
            <div className="text-[14px] md:text-base md:text-justify">
              <p>
                <strong>Core Languages:</strong> C, C++, Python, OOP, DS,
                Algorithms.
              </p>
              <p>
                <strong>Front End:</strong> HTML, CSS, JavaScript, TypeScript,
                Redux.
              </p>
              <p>
                <strong>Back End:</strong> node.js, express, MongoDB, mongoose.
              </p>
              <p>
                <strong>Frameworks:</strong> React.js, Bootstrap, Tailwind.
              </p>
              <p>
                <strong>Tools:</strong> VS Code, Chrome Dev Tool, Git, Firebase.
              </p>
              <p>
                <strong>Languages:</strong> Bangla (native), English
                (communicative).
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-lg md:text-2xl font-bold mb-2 uppercase">
              Projects & Team Work
            </p>
            <div>
              <div className="flex justify-between">
                <div>
                  <p className="text-sm md:text-xl font-bold mb-2">
                    NightQueenGlow - E-Commerce
                  </p>
                </div>
                <div className="flex ">
                  <div className="h-5 border-r-2 border-blue-600 pr-2 text-[10px] md:text-base">
                    <Link to="https://night-queen-glow.vercel.app/">
                      <div className="text-blue-600 underline font-bold">
                        Live Host
                      </div>
                    </Link>
                  </div>
                  <div className="border-r-2 h-5 border-blue-600 px-2 text-[10px] md:text-base">
                    <Link to="https://github.com/Ritupriya-Chowdhury/NightQueenGlow-Client">
                      <div className="text-blue-600 underline font-bold">
                        Client Site
                      </div>
                    </Link>
                  </div>
                  <div className="h-5 text-[10px] pl-2 md:text-base">
                    <Link to="https://github.com/Ritupriya-Chowdhury/NightQueenGlow-Server">
                      <div className="text-blue-600 underline font-bold">
                        Server Site
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <p className="mb-1 text-[14px] md:text-base">
                <strong>Time:</strong> 12/21/2024 to 12/28/2024
              </p>
              <div>
                <ul className="list-disc ml-5 text-[14px] md:text-base">
                  <li>
                    This site is an e-commerce site based on beauty products.
                  </li>
                  <li>Firebase Authentication system used.</li>
                  <li>JWT authorization implemented.</li>
                  <li>
                    &quot;Buyer,&quot; &quot;seller,&quot; and &quot;admin&quot;
                    are three dashboards implemented.
                  </li>
                </ul>
                <p>
                  Admin email: ritupriyabgc@gmail.com, password: Kala_vuna_1@
                </p>
                <p>
                  Seller email: developerpriya96@gmail.com, password:
                  Kala_vuna_2@
                </p>
                <p className="">
                  <strong>Technology:</strong> React.js,
                  node.js, mongodb, JWT, tailwind, HTML, CSS etc.
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between mt-2 ">
                <div>
                  <p className="text-sm md:text-xl font-bold mb-2">
                    RPCarRes - Car Reservation System Website
                  </p>
                </div>
                <div className="flex ">
                  <div className="h-5 border-r-2 border-blue-600 pr-2 text-[10px] md:text-base">
                    <Link to="https://car-rental-reservation-system-six.vercel.app/">
                      <div className="text-blue-600 underline font-bold">
                        Live Host
                      </div>
                    </Link>
                  </div>
                  <div className="h-5 border-r-2 border-blue-600 px-2 text-[10px] md:text-base">
                    <Link to="https://github.com/Ritupriya-Chowdhury/Car-Rental_Reservation_Client.git">
                      <div className="text-blue-600 underline font-bold">
                        Client Site
                      </div>
                    </Link>
                  </div>
                  <div className="h-5 pl-2 text-[10px] md:text-base">
                    <Link to="https://github.com/Ritupriya-Chowdhury/car-Car-Rental-Reservation-System.git">
                      <div className="text-blue-600 underline font-bold">
                        Server Site
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <p className="mb-1 text-[14px] md:text-base">
                <strong>Time:</strong> 09/23/2024 to 10/23/2024
              </p>
              <div>
                <ul className="list-disc ml-5 text-[14px] md:text-base">
                  <li>
                    It’s a car reservation website. Where a user can reserve a
                    car according to their wishes.
                  </li>
                  <li>
                    Here I make two roles. One is Admin, and another is User.
                  </li>
                  <li>Admin can manage cars, bookings, and users.</li>
                  <li>User can book car according to schedule.</li>
                </ul>
              </div>

              <p>
                Admin email: web@programming-hero.com, password: ph-password
              </p>
              <p className="">
                <strong>Technology:</strong> React.js , node.js, mongoose,
                typescript, redux, JWT, tailwind, HTML, CSS etc.
              </p>
            </div>
            <div>
              <div className="flex justify-between mt-2">
                <div>
                  <p className="text-sm md:text-xl font-bold mb-2">
                    Fractos - Educational Website
                  </p>
                </div>
                <div className="flex">
                  <div className="h-5 border-r-2 border-blue-600 pr-2 text-[10px] md:text-base">
                    <Link to="https://fractos-client.vercel.app/">
                      <div className="text-blue-600 underline font-bold">
                        Live Host
                      </div>
                    </Link>
                  </div>
                  <div className="border-r-2 h-5 border-blue-600 px-2 text-[10px] md:text-base">
                    <Link to="https://github.com/shamimhossain515419/fractos-client">
                      <div className="text-blue-600 underline font-bold">
                        Github
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <p className="mb-1 text-[14px] md:text-base">
                <strong>Time:</strong> 10/15/2023 to 11/16/2023
              </p>
              <div>
                <ul className="list-disc ml-5 text-[14px] md:text-base">
                  <li>
                    This site mainly an educational site the targeting user of
                    fractos is student.
                  </li>
                  <li>
                    Student can attend live mock exam and performance analysis.
                  </li>
                  <li>
                    User Dashboard Teacher Dashboard and Admin Dashboard are
                    implemented here.
                  </li>
                  <li>Teacher can Start New Course and Add New Question.</li>
                </ul>
                <p>
                  Teacher email: aminulislam@gmal.com password:
                  aminulislam@gmal.comE2
                </p>
                <p>Admin email: shamim5154@gmail.com password: Shamim5154@</p>
                <p className="">
                  <strong>Technology:</strong> Next.js , Mongoose, JWT, firebase
                  , tailwind, HTML, CSS.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 py-2">
          <p className="text-lg md:text-2xl font-bold mb-2 uppercase">
            EDUCATION & CERTIFICATIONS
          </p>
          <div>
            <p className="text-[14px] md:text-base md:text-justify">
              <strong>
                Bachelor of Science (B.Sc), Computer Science & Engineering
              </strong>
            </p>
            <p className=" text-[14px] md:text-base">
              BGC Trust University Bangladesh
            </p>
            <p className=" text-[14px] md:text-base">2020-2023</p>
            <p className=" text-[14px] md:text-base">
              <strong>CGPA: 3.36/4.00</strong>
            </p>
          </div>
          <div>
            <p className="text-[14px] md:text-base md:text-justify">
              <strong>
                Complete Web Development Course with Jhankar Mahbub
              </strong>
            </p>
            <p className=" text-[14px] md:text-base">Programming Hero</p>
            <div className="flex ">
              <p className=" text-[14px] md:text-base">
                31 May 2022 - 01 January 2023
              </p>
              <p className="ml-4">
                <Link to="https://drive.google.com/file/d/1Oml2EbHqU9h_MAQwe-BxYwuxEncXYlbI/view">
                  <div className="text-blue-600 underline font-bold">
                    (Certificate Link)
                  </div>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
