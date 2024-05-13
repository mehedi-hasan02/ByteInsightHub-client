import { useParams } from "react-router-dom";
import WishlistCart from "./WishlistCart";
import { useQuery } from "@tanstack/react-query";


const Wishlist = () => {
    const { email } = useParams();

    const { data: wishlistData } = useQuery({
        queryKey: ['wishlistData', email],
        queryFn: async () => {
            const res = await fetch(`https://blog-server-side-phi.vercel.app/wishlist/${email}`);
            return res.json();
        }
    })


    return (
        <div className="lg:mt-10 mb-5">
            <div className="text-center space-y-3 mb-8">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Wishlist</h1>
                <p className="lg:w-2/3 mx-auto">Create your personalized wishlist and save your favorite reads for later, ensuring you never miss out on articles that captured your interest, and revisit them anytime with ease.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-1 md:px-2 lg:px-0 min-h-[580px]'>
                {
                    wishlistData?.map(cartData => <WishlistCart key={cartData._id} cartData={cartData}></WishlistCart>)
                }
            </div>
        </div>
    );
};

export default Wishlist;