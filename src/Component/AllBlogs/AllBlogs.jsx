import { useLoaderData } from "react-router-dom";
import BlogCart from "../Home/BlogCart";
import { useEffect, useState } from "react";
import axios from "axios";


const AllBlogs = () => {
    const [filter, setFilter] = useState('')
    const [blogs, setBlogs] = useState([]);
    // const allBlogs = useLoaderData();


    const url = `http://localhost:8000/allBlogs?filter=${filter}`
    useEffect(() => {
        const getData = async () => {
          const { data } = await axios(url)
          setBlogs(data)
        }
        getData()
      }, [filter])
    

    return (
        <div>
            <div>
                <h1>All Blogs</h1>
            </div>
            <div>
            <select
              onChange={e => {
                setFilter(e.target.value)
                // setCurrentPage(1)
              }}
              value={filter}
              name='category'
              id='category'
              className='border p-4 rounded-lg'
            >
              <option value=''>Filter By Category</option>
              <option value='Robotics'>Robotics</option>
              <option value='Big Data'>Big Data</option>
              <option value='Machine Learning'>Machine Learning</option>
            </select>
          </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    blogs.map(blog=><BlogCart key={blog._id} blog={blog}></BlogCart>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;