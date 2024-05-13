import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/config.firebase";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    // const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // const githubLogin = () => {
    //     setLoading(true);
    //     return signInWithPopup(auth, githubProvider);
    // }

    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribes = onAuthStateChanged(auth, currUser => {
            const userEmail = currUser?.email || users?.email;
            const loggedUser = { email: userEmail };
            setUsers(currUser);
            setLoading(false);

            if (currUser) {
                axios.post('http://localhost:8000/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
            }else{
                axios.post('http://localhost:8000/logout', loggedUser, {withCredentials: true})
                .then(res=>{
                    console.log(res.data);
                })
            }
        })

        return () => {
            unSubscribes();
        }
    }, [])

    const authInfo = {
        users,
        createUser,
        signIn,
        handleUpdateProfile,
        logOut,
        googleLogin,
        // githubLogin,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;