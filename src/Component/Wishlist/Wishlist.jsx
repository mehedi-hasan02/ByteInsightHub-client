import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BlogCart from "../Home/BlogCart";
import WishlistCart from "./WishlistCart";


const Wishlist = () => {
    // const email = useParams();
    // const [listData, setListData] = useState([]);
    const listData = useLoaderData();

    // const url = `http://localhost:8000/wishlist/${email}`
    // useEffect(()=>{
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setListData(data)
    //     })
    // },[])


    return (
        <div>
            <h1>Wishlist</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    listData?.map(cartData=><WishlistCart key={cartData._id} cartData={cartData}></WishlistCart>)
                }
            </div>
        </div>
    );
};

export default Wishlist;