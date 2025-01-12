import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import {
    SiJavascript,
    SiMongodb,
    SiMongoose,
    SiTypescript,
} from "react-icons/si";
import { TbBrandNodejs, TbBrandRedux } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { useSelector } from "react-redux";

const MySkills = () => {
    const theme = useSelector((state) => state.theme.theme);
    return (
        <div className={`${theme === "dark" ? "bg-black" : "bg-slate-50 "} py-8 `}>
            <div>
                <p className="font-bold text-3xl lg:text-5xl text-[#FC4319] text-center py-4">
                    My Skills
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 py-4 lg:py-8">
                <div
                    className={`md:border-r-2  px-8 lg:px-16 py-4
                ${theme === "dark"
                            ? "text-white border-gray-400"
                            : "text-black border-gray-800"
                        }`}
                >
                    <p className="text-2xl lg:text-3xl font-bold">Technical Skills</p>
                    <div className="py-4 ">
                        <p className="lg:text-xl text-lg font-bold py-2 ">
                            Experience I Have
                        </p>
                        <div className="grid grid-cols-3  gap-2 py-4 font-bold">
                            <div className="border border-[#FC4319] p-2 text-center rounded-lg">
                                <p className="mx-8 lg:mx-12 text-3xl text-[#FC4319]">
                                    <FaHtml5 />
                                </p>
                                <p className="text-lg">HTML</p>
                            </div>
                            <div className="border border-blue-600 p-2 text-center rounded-lg">
                                <p className="mx-8 lg:mx-12 text-3xl text-blue-600">
                                    <FaCss3Alt />
                                </p>
                                <p className="text-lg">CSS</p>
                            </div>
                            <div className="border border-yellow-500 p-2 text-center rounded-lg">
                                <p className="mx-8 lg:mx-12 text-3xl text-yellow-500">
                                    <SiJavascript />
                                </p>
                                <p className="text-lg">JavaScript</p>
                            </div>
                            <div className="border border-blue-700 p-2 text-center rounded-lg">
                                <p className="mx-8 lg:mx-12 text-3xl text-blue-700">
                                    <SiTypescript />
                                </p>
                                <p className="text-lg">Typescript</p>
                            </div>
                            <div className="border border-indigo-500 p-2 text-center rounded-lg">
                                <p className="mx-8 lg:mx-12 text-3xl text-indigo-500">
                                    <TbBrandRedux />
                                </p>
                                <p className="text-lg">Redux</p>
                            </div>
                            <div className="border border-sky-500 p-2 text-center rounded-lg">
                                <p className="mx-8 lg:mx-12 text-3xl text-sky-500">
                                    <RiTailwindCssFill />
                                </p>
                                <p className="text-lg">Tailwind</p>
                            </div>
                            <div className="border border-green-500 p-2 text-center rounded-lg">
                                <p className="mx-8 lg:mx-12 text-3xl text-green-500">
                                    <TbBrandNodejs />
                                </p>
                                <p className="text-lg">node.js</p>
                            </div>
                            <div className="border border-green-700 p-2 text-center rounded-lg">
                                <p className="mx-8 lg:mx-12 text-3xl text-green-700">
                                    <SiMongodb />
                                </p>
                                <p className="text-lg">MongoDB</p>
                            </div>
                            <div className="border border-red-500 p-2 text-center rounded-lg">
                                <p className="mx-8 lg:mx-12 text-3xl text-red-500">
                                    <SiMongoose />
                                </p>
                                <p className="text-lg">Mongoose</p>
                            </div>
                        </div>
                    </div>
                    <div className="pb-4">
                        <p className="lg:text-xl text-lg font-bold py-2 ">Coding Skill</p>
                        <p className="font-semibold lg:text-lg text-base py-2">
                            Proficient in programming languages C and C++, with a strong
                            foundation in Data Structures and Object-Oriented Programming
                            (OOP). Achieved a Codeforces rating of 700+.
                        </p>
                    </div>
                </div>
                <div
                    className={`px-8 lg:px-16 py-4
                    ${theme === "dark" ? "text-white " : "text-black "} `}
                >
                    <p className="lg:text-3xl text-2xl font-bold">
                        Education & Certification
                    </p>
                    <div className="pt-4">
                        <div className="flex ">
                            <p className="lg:text-xl text-lg font-bold py-2">
                                Bachelor Of Science
                            </p>
                            <p
                                className="lg:text-xl text-lg font-bold text-[#FC4319] ml-4 
                            p-2 border border-[#FC4319] rounded-lg"
                            >
                                2020-2023
                            </p>
                        </div>
                        <p className="font-semibold lg:text-lg text-base ">
                            Completed Bachelor of Science in Computer Science and Engineering
                            (CSE) from BGC Trust University Bangladesh in December 2023.
                        </p>
                        <p className="font-semibold lg:text-lg text-base py-2">
                            CGPA: 3.36/4
                        </p>
                    </div>
                    <div className="py-2">
                        <div className="flex py-2">
                            <p className="lg:text-xl text-lg font-bold py-2">Certification</p>
                            <p
                                className="lg:text-xl text-lg font-bold text-[#FC4319] ml-4 
                            p-2 border border-[#FC4319] rounded-lg"
                            >
                                May 2022-Jan 2023
                            </p>
                        </div>
                        <p className="font-semibold lg:text-lg text-base ">
                            Complete Web Development Course with Jhankar Mahbub.
                        </p>
                        <p className="font-semibold lg:text-lg text-base py-2">
                            Programming Hero.
                        </p>
                    </div>
                    <div className="py-2">
                        <p className="lg:text-xl text-lg font-bold py-2">Language Skill</p>

                        <p className="font-semibold lg:text-lg text-base ">
                            Bangla: Native
                        </p>
                        <p className="font-semibold lg:text-lg text-base ">
                            English: Communicative
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkills;
