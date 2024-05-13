import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Component/Layout/MainLayout";
import Home from "../../Component/Home/Home";
import Login from "../../Component/Login/Login";
import Register from "../../Component/Register/Register";
import Error from "../../Component/Error/Error";
import AddBlog from "../../Component/AddBlog/AddBlog";
import BlogDetails from "../../Component/Home/BlogDetails";
import AllBlogs from "../../Component/AllBlogs/AllBlogs";
import FeatureBlogs from "../../Component/FeatureBlogs/FeatureBlogs";
import Wishlist from "../../Component/Wishlist/Wishlist";
import UpdateBlog from "../../Component/Home/UpdateBlog";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import ScienceDetails from "../../Component/Home/Science/ScienceDetails";
import TechDetails from "../../Component/Home/TrendTech/TechDetails";


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
            element: <Register></Register>,
        },
        {
          path: '/addBlog',
          element: <PrivateRoutes><AddBlog></AddBlog></PrivateRoutes>,
        },
        {
          path: '/blogDetails/:id',
          element: <PrivateRoutes><BlogDetails></BlogDetails></PrivateRoutes>,
          loader: ({params})=>fetch(`https://blog-server-side-phi.vercel.app/blogs/${params.id}`,{credentials: 'include'})
        },
        {
          path: '/allBlogs',
          element: <AllBlogs></AllBlogs>,
        },
        {
          path: '/featureBlogs',
          element: <FeatureBlogs></FeatureBlogs>,
        },
        {
          path: '/wishlist/:email',
          element: <Wishlist></Wishlist>,
          loader:({params})=>fetch(`https://blog-server-side-phi.vercel.app/wishlist/${params.email}`),
        },
        {
          path: '/updateBlog/:id',
          element: <PrivateRoutes><UpdateBlog></UpdateBlog></PrivateRoutes>,
          loader:({params})=>fetch(`https://blog-server-side-phi.vercel.app/blogs/${params.id}`),
        },
        {
          path: '/scienceDetails/:id',
          element: <PrivateRoutes><ScienceDetails></ScienceDetails></PrivateRoutes>,
          loader: ({params})=>fetch(`https://blog-server-side-phi.vercel.app/${params.id}`)
        },
        {
          path: '/techDetails/:id',
          element: <PrivateRoutes><TechDetails></TechDetails></PrivateRoutes>,
          loader: ({params})=>fetch(`https://blog-server-side-phi.vercel.app/trendBlogs/${params.id}`)
        }
      ]
    },
  ]);

  export default router;