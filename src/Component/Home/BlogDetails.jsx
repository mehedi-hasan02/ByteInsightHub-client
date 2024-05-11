import { Link, useLoaderData } from "react-router-dom";

const BlogDetails = () => {
    const blogDetails = useLoaderData();

    return (
        <section className="bg-white dark:bg-gray-900 mt-10 rounded-xl">
            <div className="container px-6 py-10 mx-auto">
                <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                    <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={blogDetails.image} alt="" />
                    <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                        <h1 className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
                            {blogDetails.title}
                        </h1>
                        <p className="dark:text-white">Category: {blogDetails.category}</p>

                        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                            <span>Shot Description:</span>
                            {
                                blogDetails.short_description
                            }
                        </p>
                        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                            <span>Long Description:</span>
                            {
                                blogDetails.long_description
                            }
                        </p>
                        <div className="mt-3">
                            <Link to='/'>
                                <button className="text-white bg-orange-500 p-2 rounded mr-5">Go to home</button>
                            </Link>
                            <Link to={`/updateBlog/${blogDetails._id}`}>
                                <button className="text-white bg-orange-500 p-2 px-3 rounded">Update</button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default BlogDetails;