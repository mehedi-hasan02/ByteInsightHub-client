import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const WishlistCart = ({cartData,refetch}) => {
    const { _id,wishlistID,title,image,category,short_description } = cartData;

    const handelRemoveWishlist = (id)=>{
        fetch(`https://blog-server-side-phi.vercel.app/wishlist/${id}`,{
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0)
                {
                    toast.success("Remove successful")
                    refetch()
                    // const remaining = wishlistData.filter(data => data._id !== id);
                    // setWishlistData(remaining);
                }
                
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
                    <Link to={`/blogDetails/${wishlistID}`}>
                        <button className="btn bg-green-400 text-white hover:bg-green-400">Details</button>
                    </Link>
                    <Link >
                        <button onClick={()=>handelRemoveWishlist(_id)} className="btn bg-green-400 text-white hover:bg-green-400">Remove Wishlist</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WishlistCart;