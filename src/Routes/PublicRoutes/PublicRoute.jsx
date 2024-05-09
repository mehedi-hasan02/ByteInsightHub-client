import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import MainLayout from "../../Component/Layout/MainLayout";
import Home from "../../Component/Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        }
      ]
    },
  ]);

  export default router;