import { Heart, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggleButton, useTheme } from "../../stores/useTheme";
import ScrollToTopButton from "../Header/Scroll_to_top";

export default function Footer() {

    const currentYear = new Date().getFullYear();
    const { theme } = useTheme()
    const SenderEmail = import.meta.env.PRIVATE_EMAIL;

    function emailSending() {
        const myEmail = `${SenderEmail}`; // replace with your email
        const subject = encodeURIComponent("Hello, I want to connect!");
        const body = encodeURIComponent("Hi, I found your portfolio and wanted to reach out.");

        // Open Gmail compose directly
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${subject}&body=${body}`;

        window.open(gmailUrl, "_blank");
    }



    return (
        // <footer className={`${theme === "dark" ? "bg-gradient-to-b from-[#0A0A0A] to-[#242728]" : "bg-gradient-to-b from-background to-muted"} py-12 px-4`}>
        <footer className={`${theme === "dark" ? "bg-[#0A0A0A] bdg-[#131313]" : "bg-gradient-to-b from-background to-muted"} py-12 px-4`}>
            <div className="flex absolute top-1/2 right-0 items-center justify-center rounded-full bg-gray-50 transition-colors duration-500">
                <ThemeToggleButton />
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className={`${theme === "dark" && "text-[#FFFFFF]"} text-xl font-bold mb-3`}>AIandCodewithYar</h3>
                        <p className={`${theme === "dark" && "text-[#adb5bd]"} text-muted-foreground text-sm mb-4`}>
                            Full Stack Developer building innovative solutions with passion and precision.
                        </p>
                        <div className="flex gap-2">
                            <button
                                size="icon"
                                variant="ghost"
                                className={`${theme === "dark" ? "text-[#d8f3dc] hover:text-[#b9c3cc]" : "hover:elevate"} transition-all duration-200 rounded-full`}
                                onClick={() => {
                                    window.open("https://github.com/ahmedali839", "_blank")
                                }
                                }
                                data-testid="button-footer-github"
                            >
                                <Github className="w-5 h-5" />
                            </button>
                            <button
                                size="icon"
                                variant="ghost"
                                className={`${theme === "dark" ? "text-[#d8f3dc] hover:text-[#b9c3cc]" : "hover:elevate"} transition-all duration-200 rounded-full`}
                                onClick={() => {
                                    window.open("https://www.linkedin.com/in/ahmed-yar-rasheed/", "_blank")
                                }}
                                data-testid="button-footer-linkedin"
                            >
                                <Linkedin className="w-5 h-5" />
                            </button>
                            <button
                                size="icon"
                                variant="ghost"
                                className={`${theme === "dark" ? "text-[#d8f3dc] hover:text-[#b9c3cc]" : "hover:elevate"} transition-all duration-200 rounded-full`}
                                onClick={emailSending}
                                data-testid="button-footer-email"
                            >
                                <Mail className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className={`${theme === "dark" && "text-[#FFFFFF]"} font-semibold mb-3`}>Quick Links</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link to="/" className={`${theme === "dark" ? "hover:text-[#bfc0c2] text-[#9899a0]" : "hover:text-orange-500"} tedxt-[#afb1b9] hover:text-primary transition-colors `}>
                                    {/* <a href="/" className={`${theme === "dark" ? "hover:text-[#c6c6c7] text-[#afb1b9]" : "hover:text-orange-500"}  hover:text-primary transition-colors `}> */}
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className={`${theme === "dark" ? "hover:text-[#bfc0c2] text-[#9899a0]" : "hover:text-orange-500"} tedxt-[#afb1b9] hover:text-primary transition-colors `}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className={`${theme === "dark" ? "hover:text-[#bfc0c2] text-[#9899a0]" : "hover:text-orange-500"} tedxt-[#afb1b9] hover:text-primary transition-colors `}>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className={`${theme === "dark" ? "hover:text-[#bfc0c2] text-[#9899a0]" : "hover:text-orange-500"} tedxt-[#afb1b9] hover:text-primary transition-colors `}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className={`${theme === "dark" && "text-[#FFFFFF]"} font-semibold mb-3`}>Services</h4>
                        <ul className={`space-y-2 text-sm ${theme === "dark" ? "text-[#9899a0]" : "text-muted-foreground"} `}>
                            {/* <ul className="space-y-2 text-sm text-[#]"> */}
                            <li>Web Development</li>
                            <li>API Development</li>
                            <li>UI/UX Design</li>
                            <li>Frontend</li>
                            <li>Backend</li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-orange-600 pt-8">
                    <div className={`${theme === "dark" && "text-[#afb1b9]"} flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground`}>
                        <p>
                            © {currentYear} AICY. All rights reserved.
                        </p>
                        <p className="flex items-center gap-1">
                            Built with <Heart className="w-4 h-4 text-red-500 fill-primary" /> using MERN Stack
                        </p>
                    </div>
                </div>
            </div>
            <ScrollToTopButton />
        </footer>
    );
}















