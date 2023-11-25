import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Packages from "../Packages/Packages";


const Home = () => {
    return (
        <div className="space-y-3 md:space-y-10">
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Packages></Packages>
        </div>
    );
};

export default Home;