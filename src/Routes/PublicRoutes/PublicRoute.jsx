import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Component/Layout/MainLayout";
import Home from "../../Component/Home/Home";
import Login from "../../Component/Login/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element:<Home></Home>,
        },
        {
            path: '/login',
            element: <Login></Login>
        }
      ]
    },
  ]);

  export default router;