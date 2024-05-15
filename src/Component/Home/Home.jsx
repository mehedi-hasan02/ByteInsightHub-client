import Carousel from '../Banner/Carousel';
import BlogCart from './BlogCart';
import Swal from 'sweetalert2';
import newsletterImg from '../../assets/newsletter.png'
import { useQuery } from '@tanstack/react-query';
import ScienceCart from './Science/ScienceCart';
import { motion } from 'framer-motion';
import TrendTechCart from './TrendTech/TrendTechCart';

const Home = () => {

    const { data: blogs, isLoading } = useQuery({
        queryKey: ['recentHomeBlogs'],
        queryFn: async () => {
            const res = await fetch('https://blog-server-side-phi.vercel.app/blogs');
            return res.json();
        }
    })

    const { data: scienceBlogs } = useQuery({
        queryKey: ['scienceData'],
        queryFn: async () => {
            const res = await fetch('https://blog-server-side-phi.vercel.app/scienceBlogs');
            return res.json();
        }
    })
    const { data: techBlogs } = useQuery({
        queryKey: ['techBlogs'],
        queryFn: async () => {
            const res = await fetch('https://blog-server-side-phi.vercel.app/trendBlogs');
            return res.json();
        }
    })

    const handelNewsletter = e => {
        e.preventDefault();
        const form = e.target;

        Swal.fire({
            title: "Thank you for subscribing to our newsletter!",
            text: "You clicked the button!",
            icon: "success"
        });

        form.reset();
    }

    if(isLoading) return <div className='text-center'><span className="loading loading-spinner loading-md"></span></div>

    return (
        <div>
            <div className='mt-10'>
                <Carousel></Carousel>
                <motion.div
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: '1',
                        delay: '.2'
                    }}
                    className='text-center mt-16 mb-10 space-y-5'>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>Recent Blogs</h1>
                    <p className='lg:w-3/4 mx-auto'>Stay Updated with the Latest in Tech! Explore our Recent Posts Section for the Newest Trends, Insights, and Innovations in Technology and Gadgets.</p>
                </motion.div>
                <motion.div
                    initial={{ y: 1000 }}
                    animate={{ y: 0 }}
                    transition={{
                        duration: '1',
                        delay: '.5'
                    }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-1 md:px-2'>
                    {
                        blogs?.slice(0, 6).map(blog => <BlogCart key={blog._id} blog={blog}></BlogCart>)
                    }
                </motion.div>

                {/* science section */}
                <motion.div
                    initial={{ x: 1000 }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: '1',
                        delay: '1'
                    }}
                    className='text-center mt-16 mb-10 space-y-5'>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>Science Post</h1>
                    <p className='lg:w-3/4 mx-auto'>Discover the latest insights, discoveries, and advancements in science with our science post section, where we explore the wonders of the natural world and cutting-edge research.</p>

                </motion.div>
                <motion.div
                    initial={{ y: -1000 }}
                    animate={{ y: 0 }}
                    transition={{
                        duration: '1',
                        delay: '1'
                    }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-1 md:px-2 lg:px-0'>
                    {
                        scienceBlogs?.map(blog => <ScienceCart key={blog._id} blog={blog}></ScienceCart>)
                    }
                </motion.div>

                <motion.div
                    initial={{ x: 1000 }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: '1',
                        delay: '1'
                    }}
                    className='text-center mt-16 mb-10 space-y-5'>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>Tech Trends & Innovations</h1>
                    <p className='lg:w-3/4 mx-auto'>Explore the cutting edge in our Tech Trends & Innovations section. Discover the latest breakthroughs shaping technology's future. From AI to biotech, we highlight emerging trends, innovative products, and expert insights in 40 words or less.</p>
                </motion.div>

                <motion.div
                    initial={{ y: -1000 }}
                    animate={{ y: 0 }}
                    transition={{
                        duration: '1',
                        delay: '1'
                    }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-1 md:px-2 lg:px-0'>
                    {
                        techBlogs?.map(blog => <TrendTechCart key={blog._id} blog={blog}></TrendTechCart>)
                    }
                </motion.div>

                {/* newsletter section */}
                <motion.div
                    initial={{ x: -10000 }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: '2',
                        delay: '1'
                    }}
                    className='bg-gradient-to-r from-cyan-500 to-blue-500 mt-10 mb-10 p-5 md:p-16 lg:p-24 text-center space-y-3 rounded-xl'>
                    <div>
                        <img src={newsletterImg} alt="" className='h-[100px] mx-auto' />
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-2xl md:text-3x llg:text-5xl text-white font-bold'>Subscribe Newsletter</h1>
                        <p className='lg:text-2xl lg:w-1/2 mx-auto'>You will never miss our latest blog.Our newsletter is once a week, every friday</p>
                    </div>
                    <div className='w-full lg:w-1/2 mx-auto'>
                        <form onSubmit={handelNewsletter} className="input input-bordered flex items-center gap-2 relative">
                            <input type="email" className="grow" placeholder="abc@gmail.com" required />
                            <button className="btn absolute right-0 text-white bg-pink-400 hover:bg-pink-400">Subscribe</button>
                        </form>

                    </div>
                    <div>
                        <p>We promise not to spam you!</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;