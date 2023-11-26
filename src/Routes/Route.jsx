import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import JoinAsEmployee from "../Pages/JoinAsEmployee/JoinAsEmployee";

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
        }
      ]
    },
  ]);

export default router;