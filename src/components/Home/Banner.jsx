import { useSelector } from "react-redux";
import MyImg from "../../assets/Images/Untitled design.png"
import { Link } from "react-router-dom";

const Banner = () => {
    const theme = useSelector((state) => state.theme.theme);
    return (
        <div className={`${theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-orange-100 text-black'} 
        py-24 lg:py-0 lg:pt-20 min-h-screen`} id="hero">
            <div className="bg-gradient-to-r  p-8 lg:p-16 ">
                <div className=" mx-auto flex flex-col lg:flex-row items-center gap-4">
                    {/* About Section  */}
                    <div className="text-center lg:text-left lg:flex-1 lg:w-[200px] lg:my-12 ">
                        <p className="text-[#FC4319] font-semibold text-3xl ">Hello, I&apos;m </p>
                        <h1 className="text-4xl md:text-5xl font-bold mt-6">Ritupriya Chowdhury</h1>
                        <p className="my-8 md:my-12 lg:my-8 text-lg  font-semibold lg:w-96">
                            I&apos;ve been learning web development for three years. 
                            Now, I&apos;m searching for a job or internship in this field. 
                           I&apos;m a dedicated worker, a quick learner, and I enjoy teamwork.
                        </p>
                        <div className="flex justify-center lg:justify-normal">
                            <Link to="/projects"><div className=" 
                            px-6 py-3 bg-white text-[#FC4319] font-bold rounded-lg shadow-lg w-44
                        border border-[#FC4319] hover:bg-[#FC4319] hover:text-white">
                            View My Work
                        </div></Link>
                        </div>
                    </div>
                    {/* Profile Picture  */}
                    <div className="flex-shrink-0 order-first lg:order-none lg:mr-28">
                        <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto">
                            <img
                                src={MyImg}
                                alt="Ritupriya Chowdhury&apos;s Photo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;