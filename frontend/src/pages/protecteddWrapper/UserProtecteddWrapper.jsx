import { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../stores/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLoading } from "../Header/Header";
import { useTheme } from '../../stores/useTheme';

const UserProtectedWrapper = ({ children }) => {

    const token = localStorage.getItem("token");
    const { user, setUser } = useContext(UserDataContext);
    const { stopLoading, startLoading } = useLoading();
    const { theme } = useTheme();

    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/login");
            return;
        }

        const fetchUser = async () => {
            try {
                startLoading();
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/users/profile`,
                    { headers: { Authorization: `Bearer ${token}` } }
                );

                if (response.status === 200) {
                    setUser(response.data);
                }
            } catch (error) {
                localStorage.removeItem("token");
                navigate("/login");
            } finally {
                setIsLoading(false);
                stopLoading();
            }
        };

        setTimeout(fetchUser, 1000); // simulate load speed
    }, [token]);




    if (isLoading) {
        return (
            <div
                className={`min-h-screen flex justify-center items-center px-4 ${theme === "dark" ? "bg-[#000000ec]" : "bg-white"}`}>
                <div
                    className={`w-full max-w-xl border ${theme === "dark"
                        ? "border-orange-400 bg-[#0c0c0c]"
                        : "border-orange-400 bg-white"
                        } rounded-2xl p-8`}
                >
                    {/* Title */}
                    <div className="mx-auto mb-6">
                        <div className="h-6 w-40 mx-auto rounded-md bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
                        <div className="h-4 w-64 mx-auto mt-3 rounded-md bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
                    </div>

                    {/* Field 1 – Name */}
                    <div className="mb-6">
                        <div className="h-4 w-24 mb-2 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                        <div className="h-11 w-full bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                    </div>

                    {/* Field 2 – Email */}
                    <div className="mb-6">
                        <div className="h-4 w-32 mb-2 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                        <div className="h-11 w-full bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                    </div>

                    {/* Field 3 – Password */}
                    <div className="mb-6">
                        <div className="h-4 w-80 mb-2 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                        <div className="h-11 w-full bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                    </div>

                    {/* Logout button */}
                    <div className="flex justify-end mt-8">
                        <div className="h-10 w-24 rounded-lg bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
                    </div>

                    {/* Home link */}
                    <div className="h-4 w-28 mx-auto mt-8 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
            </div>
        );
    }

    return <>{children}</>;
};

export default UserProtectedWrapper;
