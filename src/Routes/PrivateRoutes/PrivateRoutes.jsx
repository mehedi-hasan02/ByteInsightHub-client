import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Component/AuthProvider/AuthProvider";
// import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const PrivateRoutes = ({children}) => {
        const { users, loading } = useContext(AuthContext);


    if (users) {
        return children;
    }
    if (loading) {
        return (
            <div className='text-center'>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;