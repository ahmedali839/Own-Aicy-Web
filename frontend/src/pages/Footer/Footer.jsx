import { Heart, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../Header/Scroll_to_top";

export default function Footer() {
    const currentYear = new Date().getFullYear();


    function emailSending() {
        const myEmail = "ahmedyarr1212@gmail.com"; // replace with your email
        const subject = encodeURIComponent("Hello, I want to connect!");
        const body = encodeURIComponent("Hi, I found your portfolio and wanted to reach out.");

        // Open Gmail compose directly
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${subject}&body=${body}`;

        window.open(gmailUrl, "_blank");
    }



    return (
        <footer className="bg-gradient-to-b from-background to-muted py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold mb-3">AIandCodewithYar</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            Full Stack Developer building innovative solutions with passion and precision.
                        </p>
                        <div className="flex gap-2">
                            <button
                                size="icon"
                                variant="ghost"
                                className="rounded-full hover-elevate"
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
                                className="rounded-full hover-elevate"
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
                                className="rounded-full hover-elevate"
                                onClick={emailSending}
                                data-testid="button-footer-email"
                            >
                                <Mail className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-3">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="/" className="hover:text-primary transition-colors hover:text-orange-500">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-primary transition-colors hover:text-orange-500">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/projects" className="hover:text-primary transition-colors hover:text-orange-500">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-primary transition-colors hover:text-orange-500">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold mb-3">Services</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
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
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
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















