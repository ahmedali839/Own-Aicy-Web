import React, { useState, useContext } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useForm } from 'react-hook-form';
import ReCAPTCHA from "react-google-recaptcha"
import { UserDataContext } from '../../stores/userContext';
import { LoadingProvider, useLoading } from '../Header/Header';

const Login = () => {
    const navigate = useNavigate()
    const [isCaptcha, setIsCaptcha] = useState(null)
    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm();

    const { user, setUser } = useContext(UserDataContext)

    const { stopLoading, startLoading } = useLoading()
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
        <div className='mt-[3vw] flex justify-center'>

            <div className='m-5 p-10 border border-orange-400 rounded-xl md:w-[50%] '>

                <div className='text-center md:w-[50%] '>
                    <h2 className='text-2xl font-extrabold'>Welcome back</h2>
                    <h5>login to your account</h5>
                </div>


                <form onSubmit={handleSubmit(submitform)}>
                    <div className='mt-5 text-start md:w-[50%]  space-y-5'>

                        <div className='flex flex-col '>
                            <label htmlFor="email" className='font-medium text-sm'>Enter your Email</label>
                            <input type="email" name="email" placeholder='email@example.com' required
                                {...register("email", { required: "Email is required." })}
                                className='mt-1 px-3 py-2 w-full border border-gray-700 
                                        text-sm rounded-md bg-transparent
                                       focus:outline-none focus:ring-1 focus:ring-white  
                                       '/>
                            {errors.email && <p className='text-red-600 text-sm mt-1'>{errors.email.message}</p>}
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor="password" className='font-medium text-sm'>Enter your Password</label>
                            <input type="password" name="password" placeholder='password_123' required
                                {...register("password", { required: "password is required." })}
                                className='mt-1 px-3 py-2 w-full border border-gray-700 
                                        text-sm rounded-md bg-transparent
                                       focus:outline-none focus:ring-1 focus:ring-white
                                       '/>
                            {errors.password && <p className='text-red-600 text-sm mt-1'>{errors.password.message}</p>}
                        </div>
                        {errors.root && <p className='text-red-600 text-sm mt-1'>{errors.root.message}</p>}

                        <div>
                            <ReCAPTCHA sitekey='6LdF_7grAAAAAPsKjqTvYY58cPO_ppoHMb_f2pt-' onChange={(e) => setIsCaptcha(e)} />
                        </div>

                        <div className='flex flex-col '>
                            <button type="submit" disabled={!isCaptcha || isSubmitting} className='font-bold bg-gray-700 w-full outline-none p-2 rounded-lg text-white cursor-pointer hover:bg-gray-600'>{isSubmitting ? "Loggin in..." : "Continue"}</button>
                        </div>

                    </div>
                </form>

                <div className='mt-10 md:w-[50%]'>

                    <div className='flex items-center'>
                        <p className='flex-grow border-t border-gray-700'></p>
                        <span className='mx-1 text-gray-500 text-sm'>Or continue with</span>
                        <p className='flex-grow border-t border-gray-700'></p>
                    </div>

                    <div className='flex mt-5 gap-10'>
                        <button className='w-1/2 p-2 text-center bg-transparent border border-gray-800 outline-none rounded-md hover:text-white hover:bg-gray-400'>Google</button>
                        <button className='w-1/2 p-2 text-center bg-transparent border border-gray-800 outline-none rounded-md hover:text-white hover:bg-gray-400'>Github</button>
                    </div>

                    <div className='flex mt-10 justify-center'>
                        <p>Don't have an account? <Link to={"/signup"} className='underline'>Signup</Link></p>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default Login
