import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import AppsBlowing from "./AppsBlowing";
import { useTheme } from "../../stores/useTheme"; // adjust path



const Home = () => {

    let { theme } = useTheme()
    const SenderEmail = import.meta.env.VITE_PRIVATE_EMAIL;

    function emailSending() {
        const myEmail = `${SenderEmail}`; // replace with your email
        const subject = encodeURIComponent("Hello, I want to connect!");
        const body = encodeURIComponent("Hi, I found your portfolio and wanted to reach out.");

        // Open Gmail compose directly
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${subject}&body=${body}`;

        window.open(gmailUrl, "_blank");
    }
    return (

        <div className={`min-h-screen ${theme === "dark" ? "bg-[#0F0F0F]" : "bg-gray-50"} text-gray-900 w-full`}>
            {/* Hero Section */}
            <div className="container mx-auto py-2 px-2">
                <div className="w-full grid sm:grid-cols-2 gap-8 bg-oradnge-400 items-center justify-center">
                    <div className="bg-grday-400 p-4 justify-center text-center sm:text-left">
                        {/* <section> */}
                        <section className="max-w-6xl mx-auto px-5 py-20 text-center">
                            <div className="flex text-start mb-2 items-center">
                                <p className={`px-2 py-1 rounded-full w-auto h-auto border ${theme === "dark" ? "bg-[#0A0A0A]  text-white  border-orange-500" : "bg-[#F7EEE8]  text-orange-600  border-orange-200"}`}>Open for Opportunities</p>
                            </div>
                            <h1 className={`text-4xl md:text-6xl font-bold ${theme === "dark" ? "text-[#d8f3dc]" : "text-gray-800"} mb-4`}>
                                Hi, I’m <span className="text-orange-600">Ahmed Yar</span>
                            </h1>
                            <p className={`text-lg md:text-xl ${theme === "dark" ? "text-[#FFFFFF]" : "text-gray-600"} mb-8 max-w-2xl mx-auto sm:mx-0`} >
                                Full-Stack MERN Developer passionate about building user-friendly,
                                scalable, and impactful web applications at moderate level. I love to interview for your Website Developer role.
                            </p>
                            <div className="flex justify-center gap-4">
                                <Link
                                    to={"/about"}
                                    className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow hover:bg-[#e85d04] transition-colors"
                                >
                                    View Resume
                                </Link>
                                <Link
                                    to={"/contact"}
                                    className={`px-6 py-3 border rounded-lg shadow border-orange-600 dhover: ${theme === "dark" ? "bg-[#0f0f0f7c] text-white hover:bg-[#181818]" : "text-orange-600 hover:bg-orange-50"}  transition`}
                                >
                                    Contact Me
                                </Link>
                            </div>
                        </section>
                    </div>
                    <div className="bg-gray-d200 px-4 py-2 text-center">
                        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
                            <img src="/image 2.png" alt="image" className="mx-auto object-cover max-w-sm w-80 h-auto rounded-lg" />
                        </section>
                    </div>
                </div>
            </div >

            {/* App blowing */}
            <section >
                <AppsBlowing />
            </section >

            {/* Projects Section */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className={`${theme === "dark" && "text-[#FFFFFF]"} text-2xl font-semibold text-center mb-10`}>
                        Featured Projects
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((project) => (
                            <div
                                key={project}
                                className={`${theme === "dark" ? "bg-[#0F0F0F]" : "bg-gray-50"} rounded-2xl shadow hover:shadow-lg transition border border-gray-500`}
                            >
                                <div className="w-full">
                                    <img src={project === 1 && "https://media.gettyimages.com/id/2012747478/photo/businessman-computer-or-programming-code-in-night-office-for-software-development.jpg?s=612x612&w=0&k=20&c=0lz8lwLdsfhI-v3mplU-Un98_TfLK-Bo8z-azDEVsqg=" ||
                                        project === 2 && "https://www.codewithharry.com/_next/image?url=%2Fcoding%2F3.jpg&w=1920&q=75"
                                        || project === 3 && "https://media.gettyimages.com/id/1469706272/photo/web-design-coding-and-asian-man-with-a-computer-for-programming-a-website-at-night-cyber.jpg?s=612x612&w=0&k=20&c=39a6KG7ZZG3SiqN689mJ_Qe0p049Krvnbjob3OkGg7E="
                                    }
                                        alt={`card${project}`}
                                        className="rounded-xl w-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className={`${theme === "dark" && "text-gray-100"} text-lg font-semibold mb-2`}>{
                                        project === 1 && "WhatsApp Clone" ||
                                        project === 2 && "Manager's Dashboard" ||
                                        project === 3 && "Coming soon..."
                                    }</h3>

                                    <p className={`${theme === "dark" ? "text-[#adb5bd]" : "text-gray-600"} text-sm  mb-4`}>
                                        {
                                            project === 1 && "WhatsApp-likely Clone for learning purpose designed with Socket.io to manage messages, reactions and online/offline status real-time." ||
                                            project === 2 && "Branch Manager dashboard not just todo list, it Actually flow the record of each employer between frontend and backend with public or private access and store data permanently in MongoDB." ||
                                            project === 3 && "Social Media account analytic tracker which will tell you real-time, 7-day/monthly analytics of your account"
                                        }
                                    </p>
                                    <a
                                        href={
                                            project === 1 && "https://github.com/ahmedali839/Project-WhatsApp-Clone-MERN-stack/" ||
                                            project === 2 && "https://github.com/ahmedali839/Managment-Dashboard-Project" ||
                                            project === 3 && "#"
                                        }
                                        className="text-blue-600 font-medium hover:underline"
                                    >
                                        View on GitHub →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="max-w-6xl mx-auto px-6 py-20 text-center">
                <h2 className={`${theme === "dark" && "text-[#FFFFFF]"} text-2xl font-semibold mb-6`}>Let’s Connect</h2>
                <p className={`${theme === "dark" ? "text-[#adb5bd]" : "text-gray-600"}  mb-6`}>
                    I’m currently open to new opportunities, collaborations, or just a chat.
                </p>
                <div className={`${theme === "dark" && "text-[#d8f3dc]"} flex justify-center gap-6 text-gray-700 text-2xl`}>
                    <a
                        onClick={emailSending}

                        className={`${theme === "dark" ? "text-[#d8f3dc] hover:text-[#adb5bd]" : "hover:text-blue-600"} transition-all duration-200`}
                    >
                        <Mail />
                    </a>
                    <a
                        href="https://github.com/ahmedali839"
                        target="_blank"
                        rel="noreferrer"
                        className={`${theme === "dark" ? "text-[#d8f3dc] hover:text-[#adb5bd]" : "hover:text-blue-600"} transition-all duration-200`}
                    >
                        <Github />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ahmed-yar-rasheed/"
                        target="_blank"
                        rel="noreferrer"
                        className={`${theme === "dark" ? "text-[#d8f3dc] hover:text-[#adb5bd]" : "hover:text-blue-600"} transition-all duration-200`}
                    >
                        <Linkedin />
                    </a>
                </div>
            </section >
        </div >
    );
};

export default Home;
