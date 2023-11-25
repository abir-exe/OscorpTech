import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel className="text-center">
      <div className="hero">
        <img
          className="opacity-80"
          src="https://i.ibb.co/ZXcQJs0/japan.jpg"
        />
        <div className="hero-content border-y-2">
          <div className="space-y-4 text-start mr-60">
            <h1 className="text-5xl font-bold">Want to grow your business?</h1>
            <button className="btn btn-primary">Join As Admin</button>
          </div>
        </div>
      </div>
      <div className="hero">
        <img
          className="opacity-80"
          src="https://i.ibb.co/zmtntG8/teamwork.jpg"
        />
        <div className="hero-content  border-y-2">
          <div className="space-y-4 text-start mr-60">
            <h1 className="text-5xl font-bold">If You Are A Hard Worker, Join Us</h1>
            <button className="btn btn-primary">Join As Employee</button>
          </div>
        </div>
      </div>

      
    </Carousel>
  );
};

export default Banner;
