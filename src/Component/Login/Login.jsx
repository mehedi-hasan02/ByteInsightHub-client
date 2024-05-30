import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaGofore } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from 'react-hot-toast';
import { AuthContext } from "../AuthProvider/AuthProvider";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { signIn, googleLogin,logOut } = useContext(AuthContext);
    const [logInError, setLogInError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setLogInError('')
        const { email, password, captcha } = data;
        if (validateCaptcha(captcha)) {
            signIn(email, password)
                .then(result => {
                    console.log(result);
                    if (result.user.emailVerified) {
                        toast.success('Login successfully');
                        navigate('/');
                    }else{
                        toast.error('Please verify your email address')
                        logOut()
                    }

                })
                .catch((error) => {
                    setLogInError(error.message)
                    {
                        logInError && toast.error('Invalid Email and Password');
                    }
                })
        } else {
            toast.error('wrong captcha')
        }

    }

    const handleSocialLogin = (media) => {
        media()
            .then(res => {
                toast.success('User logged in successfully');
                navigate('/')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className="hero-content flex-col w-full lg:w-[1000px] lg:h-[690px] mx-auto">
            <div className="text-center lg:text-left mb-10">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered"  {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="flex items-center w-full relative">
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full" {...register("password", { required: true })} />
                            <span onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash className="absolute top-4 right-2 cursor-pointer"></FaEyeSlash> : <FaEye className="absolute top-4 right-2 cursor-pointer" />}
                            </span>

                        </div>

                        {errors.password && <span className="text-red-500">This field is required</span>}
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" name="captcha" placeholder="Type here" className="input input-bordered" {...register('captcha', { required: true })} />
                            {errors.captcha && <span className="text-red-500">This field is required</span>}
                        </div>
                        {/* <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                    </div>
                    <div className="bg-red-500 p-1 rounded-2xl text-white ">
                        <Link className="flex justify-center items-center gap-2" onClick={() => handleSocialLogin(googleLogin)}><FaGofore />Google</Link>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>Don't have an account? <Link className="text-blue-600" to='/register'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;