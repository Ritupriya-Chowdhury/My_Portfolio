import { useSelector } from "react-redux";
import Banner from "../components/Home/Banner";


const Home = () => {
    const theme = useSelector((state) => state.theme.theme);
    return (
        <div className={`min-h-screen ${theme==='dark'?'bg-black ':'bg-white '}`}>
            <Banner/>
        </div>
    );
};

export default Home;