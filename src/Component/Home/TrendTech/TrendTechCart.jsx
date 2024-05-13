import { Link } from "react-router-dom";

const TrendTechCart = ({blog}) => {
    const { _id, title, image, category, short_description } = blog;
    return (
        <div className="w-full  overflow-hidden bg-white rounded-lg shadow-lg">
            <img className="object-cover object-center w-full h-56" src={image} alt="avatar" />

            <div className="flex items-center px-6 py-3 bg-gray-900">
                <h1 className="mx-3 text-lg font-semibold text-white">{category}</h1>
            </div>

            <div className="px-6 py-4">
                <div className="h-[180px]">
                    <h1 className="text-xl font-semibold  ">{title}</h1>
                    <p className="py-2 text-gray-700 dark:text-gray-400">{short_description}</p>
                </div>
                <div className="flex gap-5 items-center mt-4 text-center justify-center">
                    <Link to={`/techDetails/${_id}`}>
                        <button className="btn bg-green-400 text-white hover:bg-green-400">Details</button>
                    </Link>
                    {/* <Link to={`/wishlist/${users?.email}`}>
                        <button onClick={handelWishlist} className="btn bg-green-400 text-white hover:bg-green-400">Wishlist</button>
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default TrendTechCart;