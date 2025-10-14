import { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../stores/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLoading } from "../Header/Header";

const UserProtectedWrapper = ({ children }) => {

    const token = localStorage.getItem("token")
    const { user, setUser } = useContext(UserDataContext)
    const [isLoading, setIsLoading] = useState(true)
    const { stopLoading, startLoading } = useLoading()

    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate("/login")
            return
        }

        const fetchUser = async () => {

            try {
                startLoading()
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/profile`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        },
                    })
                if (response.status == 200) {
                    setUser(response?.data)
                }
            } catch (error) {
                localStorage.removeItem("token")
                navigate("/login")
            } finally {
                setIsLoading(false)
                stopLoading()
            }
        };

        fetchUser();
    }, [token])

    if (isLoading) {
        return (
            <>
                {startLoading()}
                <div className="flex items-center justify-center h-screen text-lg font-semibold">
                    Loading...
                </div>
            </>
        )
    }

    return <>
        {children}
    </>
}

export default UserProtectedWrapper