import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Component/Layout/MainLayout";
import Home from "../../Component/Home/Home";
import Login from "../../Component/Login/Login";
import Register from "../../Component/Register/Register";
import Error from "../../Component/Error/Error";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children: [
        {
            path: '/',
            element:<Home></Home>,
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: 'register',
            element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;