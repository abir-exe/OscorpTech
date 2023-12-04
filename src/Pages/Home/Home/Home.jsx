
import useAdmin from "../../../Hooks/useAdmin";
import useAuth from "../../../Hooks/useAuth";
import AboutUs from "../AboutUs/AboutUs";
import AllUsers from "../AdminAvailableHome/AllUsers";
import LimitedStockItems from "../AdminAvailableHome/LimitedStockItems";
import PendingRequests from "../AdminAvailableHome/PendingRequests";
import ReturnAndNonReturn from "../AdminAvailableHome/ReturnAndNonReturn";
import TopMostRequestedItems from "../AdminAvailableHome/TopMostRequestedItems";
import UserReviews from "../AdminAvailableHome/UserReviews";
import Banner from "../Banner/Banner";
import Packages from "../Packages/Packages";
import FrequentlyRequestedItems from "../UserAvailAbleHome/FrequentlyRequestedItems/FrequentlyRequestedItems";
import MyCustomRequests from "../UserAvailAbleHome/MyCustomRequests/MyCustomRequests";
import MyMonthlyRequests from "../UserAvailAbleHome/myMonthlyRequests/MyMonthlyRequests";
import MyPendingRequests from "../UserAvailAbleHome/myPendingRequests/myPendingRequests";

const Home = () => {
  const { user } = useAuth();

  const [isAdmin] = useAdmin();


  return (
    <div>
      {
        isAdmin ?
        <div className="space-y-3 md:space-y-10">
          <PendingRequests></PendingRequests>
          <TopMostRequestedItems></TopMostRequestedItems>
          <LimitedStockItems></LimitedStockItems>
          <ReturnAndNonReturn></ReturnAndNonReturn>
          <AllUsers></AllUsers>
          <UserReviews></UserReviews>
        </div>
        :
      user ? (
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
