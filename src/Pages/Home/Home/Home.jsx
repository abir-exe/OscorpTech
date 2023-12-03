
import useAuth from "../../../Hooks/useAuth";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Packages from "../Packages/Packages";
import FrequentlyRequestedItems from "../UserAvailAbleHome/FrequentlyRequestedItems/FrequentlyRequestedItems";
import MyCustomRequests from "../UserAvailAbleHome/MyCustomRequests/MyCustomRequests";
import MyMonthlyRequests from "../UserAvailAbleHome/myMonthlyRequests/MyMonthlyRequests";
import MyPendingRequests from "../UserAvailAbleHome/myPendingRequests/myPendingRequests";

const Home = () => {
  const { user } = useAuth();

  


  return (
    <div>
      {user ? (
        <div className="space-y-3 md:space-y-10">
            <MyCustomRequests></MyCustomRequests>
            <MyPendingRequests></MyPendingRequests>
            <MyMonthlyRequests></MyMonthlyRequests>
            <FrequentlyRequestedItems></FrequentlyRequestedItems>
        </div>
      ) : (
        <div className="space-y-3 md:space-y-10">
          <Banner></Banner>
          <AboutUs></AboutUs>
          <Packages></Packages>
        </div>
      )}
    </div>
  );
};

export default Home;
