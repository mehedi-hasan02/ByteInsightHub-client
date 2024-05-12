import { useParams } from "react-router-dom";
import WishlistCart from "./WishlistCart";
import { useQuery } from "@tanstack/react-query";


const Wishlist = () => {
    const { email } = useParams();
    // const listData = useLoaderData();
    // const [wishlistData, setWishlistData] = useState(listData);

    // const url = `http://localhost:8000/wishlist/${email}`
    // useEffect(()=>{
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setListData(data)
    //     })
    // },[])

    const { data: wishlistData } = useQuery({
        queryKey: ['wishlistData', email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:8000/wishlist/${email}`);
            return res.json();
        }
    })


    return (
        <div>
            <h1>Wishlist</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    wishlistData?.map(cartData => <WishlistCart key={cartData._id} cartData={cartData}></WishlistCart>)
                }
            </div>
        </div>
    );
};

export default Wishlist;