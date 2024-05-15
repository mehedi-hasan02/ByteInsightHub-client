import BlogCart from "../Home/BlogCart";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";


const AllBlogs = () => {
    const [filter, setFilter] = useState('')
    const [searchText, setSearchText] = useState('')
    const [search, setSearch] = useState('')


    const url = `https://blog-server-side-phi.vercel.app/allBlogs?filter=${filter}&search=${search}`

    const { data: blogs, isLoading } = useQuery({
        queryKey: ['blogs', filter, search],
        queryFn: async () => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        },
        enabled: filter !== null && search !== null
    });

    const handleSearch = e => {
        e.preventDefault()

        setSearch(searchText)
    }

    const handleReset = () => {
        setFilter('')
        setSearch('')
        setSearchText('')
    }

    if(isLoading)return <div className="text-center"><span className="loading loading-spinner loading-md"></span></div>

    return (
        <div className="mb-10">
            <div className="text-center mt-10 mb-8 space-y-3">
                <h1 className="text-5xl font-bold">All Blogs</h1>
                <p className="w-3/4 mx-auto">Delve into a Wealth of Knowledge: Explore Our Diverse Collection of Blogs Covering a Wide Range of Topics, from Science and Technology to Culture and Beyond.</p>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between mb-10 md:px-2 gap-2">
                <div className="text-center lg:text-left">
                    <select
                        onChange={e => {
                            setFilter(e.target.value)
                        }}
                        value={filter}
                        name='category'
                        id='category'
                        className='border p-4 rounded-lg'
                    >
                        <option value=''>Filter By Category</option>
                        <option value='Robotic'>Robotic</option>
                        <option value='Artificial Intelligence'>Artificial Intelligence</option>
                        <option value='Machine Learning'>Machine Learning</option>
                        <option value='Data Science'>Data Science</option>
                    </select>
                </div>
                <div className="flex flex-col lg:flex-row md:flex-row gap-3">
                    <form onSubmit={handleSearch}>
                        <div className='flex p-1 overflow-hidden border rounded-lg w-[300px] md:w-[330px] lg:w-[330px] mx-auto focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                onChange={e => setSearchText(e.target.value)}
                                value={searchText}
                                name='search'
                                placeholder='Enter blog Title'
                                aria-label='Enter blog Title'
                            />

                            <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                                Search
                            </button>
                        </div>
                    </form>
                    <button onClick={handleReset} className='btn'>
                        Reset
                    </button>
                </div>
            </div>



            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-1 md:px-2'>
                {
                    blogs?.map(blog => <BlogCart key={blog._id} blog={blog}></BlogCart>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;