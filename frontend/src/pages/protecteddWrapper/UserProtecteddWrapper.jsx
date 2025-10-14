import { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../stores/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLoading } from "../Header/Header";

const UserProtectedWrapper = ({ children }) => {

    const token = localStorage.getItem("token")
    const { user, setUser } = useContext(UserDataContext)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const { stopLoading, startLoading } = useLoading()

    useEffect(() => {
        if (!token) {
            navigate("/login")
        }


        // const response = axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/profile`, {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status == 200) {
                setUser(response?.data)
                setIsLoading(false)
            }
        }).catch((error) => {
            localStorage.removeItem("token")
            navigate("/login")
        })
    }, [token])

    if (isLoading) {
        return (
            startLoading()
        )
    }

    return <>
        {children}
    </>
}

export default UserProtectedWrapper