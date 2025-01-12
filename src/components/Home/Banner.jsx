

const Banner = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 md:p-16 text-white">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
                    {/* About Section  */}
                    <div className="text-center md:text-left md:flex-1">
                        <h1 className="text-4xl md:text-5xl font-bold">Hi, I&apos;m Ritupriya Chowdhury</h1>
                        <p className="mt-4 text-lg">
                            I&apos;ve been learning web development for three years. Now, I&apos;m searching for a job or internship in this field. I&apos;m a dedicated worker, quick learner, and enjoy teamwork.
                        </p>
                        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100">
                            View My Work
                        </button>
                    </div>
                    {/* Profile Picture  */}
                    <div className="flex-shrink-0 order-first md:order-none">
                        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mx-auto">
                            <img
                                src="https://via.placeholder.com/200"
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