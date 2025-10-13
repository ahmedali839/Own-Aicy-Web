import { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../stores/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {

    const token = localStorage.getItem("token")
    const { user, setUser } = useContext(UserDataContext)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

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
            console.log(error); // remove just before deploy
            localStorage.removeItem("token")
            navigate("/login")
        })
    }, [token])

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return <>
        {children}
    </>
}

export default UserProtectedWrapper