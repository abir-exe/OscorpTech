import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div className="space-y-3 md:space-y-10">
            <Banner></Banner>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;