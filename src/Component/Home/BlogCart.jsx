import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const BlogCart = ({ blog }) => {
    const {users} = useContext(AuthContext);
    const { _id,title,image,category,short_description } = blog;

    const handelWishlist = ()=>{
        const email = users?.email;
        const wishlistData = {email,title,image,category,short_description};
        
        fetch('http://localhost:8000/wishlist',{
        method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(wishlistData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }


    return (
        <div className="w-full  overflow-hidden bg-white rounded-lg shadow-lg">
            <img className="object-cover object-center w-full h-56" src={image} alt="avatar" />

            <div className="flex items-center px-6 py-3 bg-gray-900">
                <h1 className="mx-3 text-lg font-semibold text-white">{category}</h1>
            </div>

            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold  ">{title}</h1>
                <p className="py-2 text-gray-700 dark:text-gray-400">{short_description}</p>
                <div className="flex gap-5 items-center mt-4 ">
                    <Link to={`/blogDetails/${_id}`}>
                        <button className="btn bg-green-400 text-white hover:bg-green-400">Details</button>
                    </Link>
                    <Link to={`/wishlist/${users?.email}`}>
                        <button onClick={handelWishlist} className="btn bg-green-400 text-white hover:bg-green-400">Wishlist</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCart;