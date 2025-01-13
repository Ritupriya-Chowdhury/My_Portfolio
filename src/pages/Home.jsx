import { useSelector } from "react-redux";
import Banner from "../components/Home/Banner";
import MySkills from "../components/Home/MySkills";
import AboutMe from "../components/Home/AboutMe";
import MyRecentProjects from "../components/Home/RecentProjects/MyRecentProjects";
import Contact from "../components/Home/Contact/Contact";


const Home = () => {
    const theme = useSelector((state) => state.theme.theme);
    return (
        <div className={` ${theme==='dark'?'bg-black ':'bg-white '}`}>
            <Banner/>
            <MySkills/>
            <AboutMe/>
            <MyRecentProjects/>
            <Contact/>
        </div>
    );
};

export default Home;