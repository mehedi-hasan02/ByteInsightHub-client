import { useLoaderData } from 'react-router-dom';
import Carousel from '../Banner/Carousel';
import BlogCart from './BlogCart';
import Swal from 'sweetalert2';
import newsletterImg from '../../assets/newsletter.png'

const Home = () => {

    const blogs = useLoaderData();

    const handelNewsletter = e =>{
        e.preventDefault();
        const form = e.target;

        Swal.fire({
            title: "Thank you for subscribing to our newsletter!",
            text: "You clicked the button!",
            icon: "success"
          });
        
          form.reset();
    }

    return (
        <div>
            <div className='mt-10'>
                <Carousel></Carousel>
                <div>
                    <h1>Recent Blogs</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        blogs?.slice(0, 6).map(blog => <BlogCart key={blog._id} blog={blog}></BlogCart>)
                    }
                </div>

                {/* newsletter section */}
                <div className='bg-gradient-to-r from-cyan-500 to-blue-500 mt-10 mb-10 p-24 text-center space-y-3 rounded-xl'>
                    <div>
                        <img src={newsletterImg} alt="" className='h-[100px] mx-auto'/>
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-5xl text-white font-bold'>Subscribe Newsletter</h1>
                        <p className='text-2xl w-1/2 mx-auto'>You will never miss our latest blog.Our newsletter is once a week, every friday</p>
                    </div>
                    <div className='w-1/2 mx-auto'>
                        {/* <form className="input input-bordered flex items-center gap-2 relative">
                            <input type="text" className="grow " placeholder="abc@gmail.com" required/>
                            <input type='submit' value='Subscribe' className="btn absolute right-0 bg-pink-400 text-white  hover:bg-pink-400"/>
                            <button className="btn absolute right-0 text-white bg-pink-400 hover:bg-pink-400">Subscribe</button>
                        </form> */}
                        <form onSubmit={handelNewsletter} className="input input-bordered flex items-center gap-2 relative">
                            <input type="email" className="grow" placeholder="abc@gmail.com" required />
                            <button className="btn absolute right-0 text-white bg-pink-400 hover:bg-pink-400">Subscribe</button>
                        </form>

                    </div>
                    <div>
                        <p>We promise not to spam you!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;