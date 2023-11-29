import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import JoinAsEmployee from "../Pages/JoinAsEmployee/JoinAsEmployee";
import JoinAsAdmin from "../Pages/JoinAsAdmin/JoinAsAdmin";
import Login from "../Pages/Login/Login";
import MyAssets from "../Pages/UserAvailAblePages/MyAssets/MyAssets";
import MyTeam from "../Pages/UserAvailAblePages/MyTeam/MyTeam";
import RequestForAnAsset from "../Pages/UserAvailAblePages/RequestForAnAsset/RequestForAnAsset";
import MakeACustomRequest from "../Pages/UserAvailAblePages/MakeACustomRequest/MakeACustomRequest";
import Profile from "../Pages/UserAvailAblePages/Profile/Profile";
import AssetList from "../Pages/AdminAvailablePages/AssetList/AssetList";
import AddAnAsset from "../Pages/AdminAvailablePages/AddAnAsset/AddAnAsset";
import AllRequests from "../Pages/AdminAvailablePages/AllRequests/AllRequests";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/joinAsEmployee',
          element: <JoinAsEmployee></JoinAsEmployee>
        },
        {
          path: '/joinAsAdmin',
          element: <JoinAsAdmin></JoinAsAdmin>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path: '/myAssets',
          element: <MyAssets></MyAssets>
        },
        {
          path: '/myTeam',
          element: <MyTeam></MyTeam>
         
        },
        {
          path: '/requestForAnAsset',
          element: <RequestForAnAsset></RequestForAnAsset>
        },
        {
          path: '/makeACustomRequest',
          element: <MakeACustomRequest></MakeACustomRequest>
        },
        {
          path: '/profile',
          element: <Profile></Profile>
        },
        {
          path: '/admin/assetList',
          element: <AssetList></AssetList>
        },
        {
          path: '/admin/addAnAsset',
          element: <AddAnAsset></AddAnAsset>
        },
        {
          path: '/admin/allRequests',
          element: <AllRequests></AllRequests>
        }
        
      ]
    }
    
  ]);

export default router;