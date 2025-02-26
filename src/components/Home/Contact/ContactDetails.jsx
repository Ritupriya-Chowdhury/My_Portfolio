import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { useSelector } from "react-redux";


const ContactDetails = () => {
    const theme = useSelector((state) => state.theme.theme);
    return (
        <div className={`${theme === "dark" ? "bg-gray-900" : "bg-slate-50 "} p-2  md:p-4 py-8 rounded-lg`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                <div className="flex ">
                   <div className="border border-[#FC4319] p-2 text-3xl text-[#FC4319] w-12 h-12 rounded-full"><FaWhatsapp /></div>
                   <div className={` ml-2 ${theme === "dark" ? "text-white" : "text-black "} font-bold md:text-base text-sm`}>
                    <p>Whats app</p>
                    <p>+880 16215 79052</p>
                    </div> 
                </div>
                <div className="flex">
                   <div  className="border border-[#FC4319]  p-2 text-3xl text-[#FC4319] w-12 h-12 rounded-full"><MdOutlineMailOutline /></div>
                   <div className={` ml-2 ${theme === "dark" ? "text-white" : "text-black "} font-bold 
                   md:text-base text-sm`}>
                    <p>Email</p>
                    <p>developerpriya96@gmail.com</p>
                    </div> 
                </div>
                <div className="flex">
                   <div className="border border-[#FC4319]  p-2  text-3xl text-[#FC4319] w-12 h-12 rounded-full">
                   <IoLocationOutline /></div>
                   <div className={` ml-2 ${theme === "dark" ? "text-white" : "text-black "} font-bold md:text-base text-sm`}>
                    <p>Location</p>
                    <p>Chattogram, Bangladesh</p>
                    </div> 
                </div>

            </div>
            
        </div>
    );
};

export default ContactDetails;