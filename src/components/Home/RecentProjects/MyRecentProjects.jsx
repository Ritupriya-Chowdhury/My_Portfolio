import { useSelector } from "react-redux";
import Projects1 from "./Projects1";
import Projects2 from "./Project2";


const MyRecentProjects = () => {
    const theme = useSelector((state) => state.theme.theme);
    return (
        <div className={`${theme === "dark" ? "bg-black" : "bg-slate-50 "} py-8 `}> 
         <div>
                <p className="font-bold text-3xl text-[#FC4319] text-center py-4">
                    My Recent Projects
                </p>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 py-4 lg:py-8 gap-4 lg:gap-2">
                <div>
                    <Projects1/>
                </div>
                <div>
                    <Projects2/>
                </div>
            </div>
            
        </div>
    );
};

export default MyRecentProjects;