// import { motion } from "framer-motion";
// import { BarChart, Lock, Users, Eye } from "lucide-react";
// import { Link } from "react-router-dom";

// function CustomButton({ children, variant = "solid", className = "", ...props }) {
//     const base = "px-6 py-2 rounded-2xl font-medium transition";
//     const styles =
//         variant === "outline"
//             ? "border border-gray-400 text-gray-200 hover:bg-gray-700"
//             : "bg-indigo-600 text-white hover:bg-indigo-500";
//     return (
//         <button className={`${base} ${styles} ${className}`} {...props}>
//             {children}
//         </button>
//     );
// }

// function CustomCard({ children, className = "" }) {
//     return (
//         <div className={`bg-gray-800 border border-gray-700 rounded-2xl shadow-lg ${className}`}>
//             {children}
//         </div>
//     );
// }

// function CustomCardContent({ children, className = "" }) {
//     return <div className={`p-6 text-center space-y-4 ${className}`}>{children}</div>;
// }

// export default function Home() {
//     return (
//         // <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen flex flex-col">
//         <div className="bg-gradient-to-b bg-white text-black min-h-screen flex flex-col">
//             {/* Hero Section */}
//             <section className="flex flex-col items-center justify-center text-center px-6 py-20">
//                 <motion.h1
//                     className="text-4xl md:text-6xl font-bold mb-4"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                 >
//                     Manage Data. Simplify Workflow. Empower Employers.
//                 </motion.h1>
//                 <motion.p
//                     className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.3 }}
//                 >
//                     A simple yet powerful dashboard system to handle employer and employee
//                     data with ease.
//                 </motion.p>
//                 <div className="flex gap-4">
//                     <CustomButton><Link to={"/user/login"}>Get Started</Link></CustomButton>
//                     {/* <CustomButton><Link to={"/user/login"}>Get Started</Link></CustomButton> */}
//                     <CustomButton variant="outline"><Link to={"/projects"}>Explore Dashboard</Link></CustomButton>
//                 </div>
//             </section>

//             {/* Features Section */}
//             <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-20 py-16">
//                 {[
//                     { icon: Users, title: "Easy Employer Management", text: "Add, edit, and update employer details effortlessly." },
//                     { icon: Lock, title: "Secure Data", text: "JWT & bcrypt-powered authentication to keep accounts safe." },
//                     { icon: BarChart, title: "Insightful Dashboard", text: "View real-time data for smarter decisions." },
//                     { icon: Eye, title: "Public vs Private", text: "Temporary edits for public, permanent control for admins." },
//                 ].map((feature, i) => (
//                     <motion.div
//                         key={i}
//                         whileHover={{ y: -5 }}
//                         transition={{ type: "spring", stiffness: 200 }}
//                     >
//                         <CustomCard>
//                             <CustomCardContent>
//                                 <feature.icon className="w-10 h-10 mx-auto text-indigo-400" />
//                                 <h3 className="text-xl font-semibold">{feature.title}</h3>
//                                 <p className="text-gray-400">{feature.text}</p>
//                             </CustomCardContent>
//                         </CustomCard>
//                     </motion.div>
//                 ))}
//             </section>

//             {/* Preview Section */}
//             <section className="px-6 md:px-20 py-16 text-center">
//                 <h2 className="text-3xl font-bold mb-6">Live Preview</h2>
//                 <p className="text-gray-400 mb-8">
//                     See how smooth data management can be.
//                 </p>
//                 <div className="bg-gray-700 rounded-2xl shadow-xl p-3">
//                     <img
//                         src="/dashboard1.png"
//                         alt="Dashboard Preview"
//                         className="rounded-xl border border-gray-600"
//                     />
//                 </div>
//             </section>

//             {/* About Developer */}
//             <section className="px-6 md:px-20 py-16 bg-gray-900 text-center">
//                 <h2 className="text-3xl font-bold mb-6">About Developer</h2>
//                 <p className="text-gray-300 max-w-2xl mx-auto mb-6">
//                     Hi, I’m <span className="font-semibold">Ahmad Yar Rasheed</span>, a MERN stack developer passionate about building user-friendly and secure web applications. This project demonstrates my skills in React, Node.js, MongoDB, and JWT authentication.
//                 </p>
//                 <CustomButton as="a" target="_blank" rel="noopener noreferrer">
//                     <Link to={"/contact"}> Connect with me</Link>
//                 </CustomButton>
//             </section>

//             {/* Footer */}
//             <footer className="bg-gray-950 text-gray-400 py-6 text-center text-sm">
//                 <p>Built with ❤️ using MERN Stack.</p>
//             </footer>
//         </div>
//     );
// }



















import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import AppsBlowing from "./AppsBlowing";

const Home = () => {


    function emailSending() {
        const myEmail = "ahmedyarr1212@gmail.com"; // replace with your email
        const subject = encodeURIComponent("Hello, I want to connect!");
        const body = encodeURIComponent("Hi, I found your portfolio and wanted to reach out.");

        // Open Gmail compose directly
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${subject}&body=${body}`;

        window.open(gmailUrl, "_blank");
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 w-full">
            {/* Hero Section */}
            {/* <div className="w-[100vw] flex justify-center items-center"> */}
            <div className="container mx-auto py-2 px-2">
                <div className="grid sm:grid-cols-2 gap-8 items-center">
                    {/* <section className="w-1/2 max-w-6xl mx-auto px-6 py-20 text-center"> */}
                    <div className="bg-grday-400 text-center sm:text-left">
                        {/* <section> */}
                        <section className="max-w-6xl mx-auto px-5 py-20 text-center">
                            <div className="flex text-start mb-2 items-center">
                                <p className="px-2 py-1 rounded-full w-auto h-auto bg-[#F7EEE8]  text-orange-600 border border-orange-200">Open for Opportunities</p>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                                Hi, I’m <span className="text-orange-600">Ahmed Yar</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto sm:mx-0">
                                Full-Stack MERN Developer passionate about building user-friendly,
                                scalable, and impactful web applications at moderate level. Looking for exciting
                                opportunities to contribute and grow.
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
                                    className="px-6 py-3 border border-orange-600 text-orange-600 rounded-lg shadow hover:bg-orange-50 transition"
                                >
                                    Contact Me
                                </Link>
                            </div>
                        </section>
                    </div>
                    <div className="bg-gray-d200 px-4 py-2 text-center">
                        {/* <div className="bg-gray-200 flex justify-center"> */}
                        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
                            <img src="/image 2.png" alt="image" className="mx-auto object-cover max-w-sm w-80 h-auto rounded-lg" />
                        </section>
                    </div>
                </div>
            </div>
            {/* App blowing */}
            <section>
                <AppsBlowing />
            </section>


            {/* Projects Section */}
            <section className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl font-semibold text-center mb-10">
                        Featured Projects
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((project) => (
                            <div
                                key={project}
                                className="bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
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
                                    <h3 className="text-lg font-semibold mb-2">{
                                        project === 1 && "WhatsApp Clone" ||
                                        project === 2 && "Manager's Dashboard" ||
                                        project === 3 && "Coming soon..."
                                    }</h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        {
                                            project === 1 && "WhatsApp-likely Clone for learning purpose designed with Socket.io to manage messages, reactions and online/offline status real-time." ||
                                            project === 2 && "Branch Manager dashboard not just todo list, it Actually flow the record of each employer between frontend and backend and store data permanently in MongoDB." ||
                                            project === 3 && "Social Media account analytic tracker which will tell you real-time, 7-day/monthly analytics of your account"
                                        }
                                    </p>
                                    <a
                                        href={
                                            project === 1 && "https://github.com/ahmedali839/whatsapp-clone-full" ||
                                            project === 2 && "#" ||
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
                <h2 className="text-2xl font-semibold mb-6">Let’s Connect</h2>
                <p className="text-gray-600 mb-6">
                    I’m currently open to new opportunities, collaborations, or just a chat.
                </p>
                <div className="flex justify-center gap-6 text-gray-700 text-2xl">
                    <a
                        onClick={emailSending}

                        className="hover:text-blue-600"
                    >
                        <Mail />
                    </a>
                    <a
                        href="https://github.com/ahmedali839"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-600"
                    >
                        <Github />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ahmed-yar-rasheed/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-600"
                    >
                        <Linkedin />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
