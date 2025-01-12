import { useSelector } from "react-redux";
import MyImg from "../../assets/Images/Untitled design.png"

const Banner = () => {
    const theme = useSelector((state) => state.theme.theme);
    return (
        <div className={`${theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-white text-black'} pt-20`}>
            <div className="bg-gradient-to-r  p-8 md:p-16 ">
                <div className=" mx-auto flex flex-col md:flex-row items-center gap-4">
                    {/* About Section  */}
                    <div className="text-center md:text-left md:flex-1 lg:w-[200px]  ">
                        <p className="text-[#FC4319] font-semibold text-3xl">Hello, I&apos;m </p>
                        <h1 className="text-4xl md:text-5xl font-bold mt-6">Ritupriya Chowdhury</h1>
                        <p className="my-8 text-lg font-semibold lg:w-96">
                            I&apos;ve been learning web development for three years. 
                            Now, I&apos;m searching for a job or internship in this field. 
                           I&apos;m a dedicated worker, quick learner, and enjoy teamwork.
                        </p>
                        <button className=" px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100">
                            View My Work
                        </button>
                    </div>
                    {/* Profile Picture  */}
                    <div className="flex-shrink-0 order-first md:order-none lg:mr-28">
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