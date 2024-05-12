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


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children: [
        {
            path: '/',
            element:<Home></Home>,
            // loader: ()=>fetch('http://localhost:8000/blogs'),
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
          element: <AddBlog></AddBlog>,
        },
        {
          path: '/blogDetails/:id',
          element: <BlogDetails></BlogDetails>,
          loader: ({params})=>fetch(`http://localhost:8000/blogs/${params.id}`)
        },
        {
          path: '/allBlogs',
          element: <AllBlogs></AllBlogs>,
          // loader: ()=> fetch('http://localhost:8000/allBlogs'),
        },
        {
          path: '/featureBlogs',
          element: <FeatureBlogs></FeatureBlogs>,
        },
        {
          path: '/wishlist/:email',
          element: <Wishlist></Wishlist>,
          loader:({params})=>fetch(`http://localhost:8000/wishlist/${params.email}`),
        },
        {
          path: '/updateBlog/:id',
          element: <UpdateBlog></UpdateBlog>,
          loader:({params})=>fetch(`http://localhost:8000/blogs/${params.id}`),
        }
      ]
    },
  ]);

  export default router;