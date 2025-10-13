import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react"; // lightweight icon (you can replace with any)

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button only when user scrolls down
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll smoothly to top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 flex items-center justify-center 
                     w-12 h-12 rounded-full bg-orange-500 text-white shadow-lg 
                     hover:bg-orange-600 focus:outline-none transition-all 
                     duration-300 ease-in-out md:bottom-8 md:right-8"
                >
                    <ChevronUp className="w-6 h-6" />
                </button>
            )}
        </>
    );
};

export default ScrollToTopButton;
