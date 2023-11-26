import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import JoinAsEmployee from "../Pages/JoinAsEmployee/JoinAsEmployee";
import JoinAsAdmin from "../Pages/JoinAsAdmin/JoinAsAdmin";
import Login from "../Pages/Login/Login";

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
        }
      ]
    },
  ]);

export default router;