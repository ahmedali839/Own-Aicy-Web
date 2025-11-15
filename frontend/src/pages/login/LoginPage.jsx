import React, { useState, useContext } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useForm } from 'react-hook-form';
import ReCAPTCHA from "react-google-recaptcha"
import { UserDataContext } from '../../stores/userContext';
import { useLoading } from '../Header/Header';
import { useNotification } from '../../stores/useNotification';
import { useTheme } from '../../stores/useTheme';
import { GoogleLogin } from "@react-oauth/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";



const Login = () => {
    const navigate = useNavigate()
    const [isCaptcha, setIsCaptcha] = useState(null)
    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm();

    const { user, setUser } = useContext(UserDataContext)
    const { stopLoading, startLoading } = useLoading()

    const [isLoading, setIsLoading] = useState(true);
    const { theme } = useTheme()

    const recaptchaSiteKey = import.meta.env.GOOGLE_RECAPTCHA_SITE_KEY


    const handleSuccess = async (credentialResponse) => {
        startLoading()

        try {
            const token = credentialResponse.credential;
            if (!token) return alert("Failed to signup with google.")

            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/google`, { token })
            if (res.status === 200) {
                setUser(res.data.user)
                localStorage.setItem("token", res.data.token)
                navigate("/profile")
            } else {
                setError("root", { message: res.data.message || "Invalid credentials" });
            }

        } catch (err) {
            setError("root", { message: err.response?.data?.message || "Login failed, try again" });
        } finally {
            setIsLoading(false);
            stopLoading();
        }

    };


    const handleError = () => {
        console.log("Login Failed");
    };

    const handleGitHubLogin = () => {
        const CLIENT_ID = import.meta.env.GITHUB_CLIENT_ID;
        const CALLBACK_URL = `${import.meta.env.FRONTEND_URL}/github-callback`;
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URL}&scope=user:email`;

    };

    // Handle Form Submit
    const submitform = async (data) => {
        startLoading()

        try {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/login`, data)
            if (res.status === 200) {
                setUser(res.data.user)
                localStorage.setItem("token", res.data.token)
                navigate("/profile")
            } else {
                setError("root", { message: res.data.message || "Invalid credentials" });
            }
        } catch (err) {
            setError("root", { message: err.response?.data?.message || "Login failed, try again" });
        } finally {
            stopLoading()
        }
    }

    return (
        <div className={`${theme === "dark" && "bg-[#000000e7]"} mdt-[3vw] flex justify-center`}>

            <div className='m-5 p-10 border border-orange-400 rounded-xl md:w-[50%] '>

                <div className='text-center md:w-[50%] '>
                    <h2 className={`text-2xl font-extrabold ${theme === "dark" && "text-[#FFFFFF]"} `}>Welcome back</h2>
                    <h5 className={`${theme === "dark" && "text-[#e1e2e2]"}`}>login to your account</h5>
                </div>


                <form onSubmit={handleSubmit(submitform)}>
                    <div className='mt-5 text-start md:w-[50%]  space-y-5'>

                        <div className='flex flex-col '>
                            <label htmlFor="email" className={`font-medium text-sm ${theme === "dark" && "text-[#FFFFFF]"}`}>Enter your Email</label>
                            <input type="email" name="email" placeholder='email@example.com' required
                                {...register("email", { required: "Email is required." })}
                                className={`mt-1 px-3 py-2 w-full border text-sm rounded-md bg-transparent
                                       focus:outline-none focus:ring-1 focus:ring-white  
                            ${theme === "dark" ? "text-[#FFFFFF] border-gray-400" : "border-gray-700"}  `} />
                            {errors.email && <p className='text-red-600 text-sm mt-1'>{errors.email.message}</p>}
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor="password" className={`font-medium text-sm ${theme === "dark" && "text-[#FFFFFF]"}`}>Enter your Password</label>
                            <input type="password" name="password" placeholder='password_123' required
                                {...register("password", { required: "password is required." })}
                                className={`mt-1 px-3 py-2 w-full border text-sm rounded-md bg-transparent
                                       focus:outline-none focus:ring-1 focus:ring-white
                                       ${theme === "dark" ? "text-[#FFFFFF] border-gray-400" : "border-gray-700"}  `} />
                            {errors.password && <p className='text-red-600 text-sm mt-1'>{errors.password.message}</p>}
                        </div>
                        {errors.root && <p className='text-red-600 text-sm mt-1'>{errors.root.message}</p>}

                        <div>
                            {/* write site key in env before deploy */}
                            <ReCAPTCHA sitekey={`${recaptchaSiteKey}`} onChange={(e) => setIsCaptcha(e)} />
                        </div>

                        <div className='flex flex-col '>
                            <button type="submit" disabled={!isCaptcha || isSubmitting} className='font-bold bg-gray-700 w-full outline-none p-2 rounded-lg text-white cursor-pointer hover:bg-gray-600'>{isSubmitting ? "Loggin in..." : "Continue"}</button>
                        </div>

                    </div>
                </form>

                <div className='mt-10 md:w-[50%]'>

                    <div className='flex items-center'>
                        <p className={`flex-grow border-t ${theme === "dark" ? "border-[#FFFFFF]" : "border-gray-700"}`}></p>
                        <span className={`mx-1 text-grday-500 text-sm ${theme === "dark" ? "text-[#ffffff9f]" : "text-gray-500"}`}>Or continue with</span>
                        <p className={`flex-grow border-t ${theme === "dark" ? "border-[#FFFFFF]" : "border-gray-700"}`}></p>
                    </div>

                    <div className='flex mt-5 gap-5'>
                        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
                        <button onClick={handleGitHubLogin} className={`inline-flex w-1/2 p-2 text-center items-center bg-transparent border outline-none rounded-md duration-300  ${theme === "dark" ? "border border-gray-100 text-[#FFFFFF] hover:bg-black" : "border-gray-800 hover:bg-blue-50"}`}>
                            <span className='mr-3'><FontAwesomeIcon icon={faGithub} size="lg" /></span>
                            Github
                        </button>
                    </div>

                    <div className='flex mt-10 justify-center'>
                        <p className={`${theme === "dark" && "text-[#e0dbdb]"}`}>Don't have an account? <Link to={"/signup"} className='hover:underline-offset-2 underline'>Signup</Link></p>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default Login
