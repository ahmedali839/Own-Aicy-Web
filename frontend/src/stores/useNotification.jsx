import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineDone } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState(null);

    const showNotification = useCallback((message, type = "info", duration = 3000) => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), duration);
    }, []);

    const getBgColor = (type) => {
        switch (type) {
            case "success":
                return "bg-[#14213d]";
            case "error":
                return "bg-[#14213d]";
            case "info":
                return "bg-[#14213d]";
            default:
                return "bg-[#14213d]";
        }
    };

    const getIcon = (type) => {
        switch (type) {
            case "success":
                return <MdOutlineDone size={22} className="text-green-600" />;
            case "error":
                return <MdErrorOutline size={22} className="text-red-600" />;
            case "info":
                return <MdInfoOutline size={22} className="text-blue-400" />;
            default:
                return null;
        }
    };

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}

            <AnimatePresence>
                {notification && (
                    <motion.div
                        key="notification"
                        initial={{ y: -60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -60, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`
              fixed top-2 right-96 transform -translate-x-1/2 
              flex items-center gap-3
              px-4 py-2 rounded-md shadow-lg text-white 
              font-medium z-50 min-w-[300px] text-center
              ${getBgColor(notification.type)}
            `}
                    >
                        <span>{getIcon(notification.type)}</span>
                        <span>{notification.message}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </NotificationContext.Provider>
    );
};
