import BlogCart from "../Home/BlogCart";
import { useEffect, useState } from "react";
import axios from "axios";


const AllBlogs = () => {
    const [filter, setFilter] = useState('')
    const [blogs, setBlogs] = useState([]);
    const [searchText, setSearchText] = useState('')
    const [search, setSearch] = useState('')
    // const allBlogs = useLoaderData();


    const url = `http://localhost:8000/allBlogs?filter=${filter}&search=${search}`
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(url)
            setBlogs(data)
        }
        getData()
    }, [filter,search])

    const handleSearch = e => {
        e.preventDefault()
    
        setSearch(searchText)
      }

      const handleReset = () => {
        setFilter('')
        // setSort('')
        setSearch('')
        setSearchText('')
      }


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
            <form onSubmit={handleSearch}>
                <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                    <input
                        className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                        type='text'
                        onChange={e => setSearchText(e.target.value)}
                        value={searchText}
                        name='search'
                        placeholder='Enter Job Title'
                        aria-label='Enter Job Title'
                    />

                    <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                        Search
                    </button>
                </div>
            </form>
            <button onClick={handleReset} className='btn'>
            Reset
          </button>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    blogs.map(blog => <BlogCart key={blog._id} blog={blog}></BlogCart>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;