import { useLoaderData } from 'react-router-dom';
import Carousel from '../Banner/Carousel';
import BlogCart from './BlogCart';

const Home = () => {

    const blogs = useLoaderData();

    return (
        <div>
            <div className='mt-10'>
                <Carousel></Carousel>
                <div>
                    <h1>Recent Blogs</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        blogs.map(blog=><BlogCart key={blog._id} blog={blog}></BlogCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;