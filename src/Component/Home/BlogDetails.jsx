import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const BlogDetails = () => {
    const blogDetails = useLoaderData();
    const { users } = useContext(AuthContext);
    const [allComment, setAllComment] = useState([]);
    const name = users?.displayName;
    const image = users?.photoURL;

    const handelComment = e => {
        e.preventDefault();
        if(users?.email === blogDetails?.writerEmail)
            {
                return Swal.fire({
                    title: "Can not comment on own blog",
                    text: "You clicked the button!",
                    icon: "warning"
                  });
            }
        const form = e.target;
        const comment = form.comment.value;
        const blogID = blogDetails?._id;

        const commentData = { name, image, comment, blogID };

        fetch('http://localhost:8000/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    useEffect(() => {
        fetch(`http://localhost:8000/comment/${blogDetails?._id}`)
            .then(res => res.json())
            .then(data => {
                setAllComment(data);
            })
    }, [])



    return (
        <div>
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
            <div>
                <form onSubmit={handelComment} className="relative">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Comment</span>
                    </label>
                    <textarea name="comment" placeholder="Add comment" className="textarea border-b-2 border-black w-full h-[50px]" required></textarea>
                    <button className="btn absolute right-0 text-white bg-red-500 hover:bg-red-500">Add Comment</button>
                </form>
            </div>
            <div className="mt-5 mb-5">
                {
                    allComment.map(comment =>
                        <div key={comment?._id} className="flex items-center gap-x-5 space-y-5">
                            <img className="object-cover w-16 h-16 rounded-full bg-cover bg-center" src={comment?.image} alt=""/>

                                <div className="">
                                    <h1 className="text-xl font-semibold  capitalize ">{comment?.name}</h1>
                                    <p className="text-base ">{comment?.comment}</p>
                                </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BlogDetails;