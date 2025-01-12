import { useSelector } from "react-redux";
import Banner from "../components/Home/Banner";
import MySkills from "../components/Home/MySkills";
import AboutMe from "../components/Home/AboutMe";


const Home = () => {
    const theme = useSelector((state) => state.theme.theme);
    return (
        <div className={` ${theme==='dark'?'bg-black ':'bg-white '}`}>
            <Banner/>
            <MySkills/>
            <AboutMe/>
        </div>
    );
};

export default Home;