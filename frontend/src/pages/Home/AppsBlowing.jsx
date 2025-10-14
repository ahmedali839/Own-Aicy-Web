import React from "react";
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiBootstrap, SiVite } from "react-icons/si";

const techIcons = [
  { icon: <FaJs />, color: "text-yellow-500" },
  { icon: <FaReact />, color: "text-sky-400" },
  { icon: <FaNodeJs />, color: "text-green-600" },
  { icon: <FaHtml5 />, color: "text-orange-500" },
  { icon: <FaPython />, color: "text-yellow-500" },
  { icon: <FaGithub />, color: "text-gray-700" },
  { icon: <FaGitAlt />, color: "text-orange-500" },
  { icon: <FaCss3Alt />, color: "text-blue-500" },
  { icon: <SiVite />, color: " text-pink-500" },
  { icon: <SiMongodb />, color: "text-green-700" },
  { icon: <SiExpress />, color: "text-gray-700" },
  { icon: <SiTailwindcss />, color: "text-cyan-400" },
  { icon: <SiBootstrap />, color: "text-purple-600" },
];

const AppsBlowing = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col items-center justify-center overflow-hidden">
      {/* Hero Section */}
      <div className="z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800"> 
         Welcome to <span className="text-orange-500">My AICY</span> 
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          {/* MERN Stack Developer passionate about building scalable, user-friendly,
          and professional web apps. */}
          Web Developer
          <br />
Passionate about clean code, great UX, and continuous learning and growing
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-xl shadow-md hover:bg-orange-600 transition">
          Explore My Work
        </button>
      </div>

      {/* Floating Tech Icons */}
      {techIcons.map((item, index) => {
        const randomTop = Math.random() * 80 + 10; // between 10–90%
        const randomLeft = Math.random() * 80 + 10; // between 10–90%
        const delay = Math.random() * 5;

        return (
          <div
            key={index}
            className={`absolute ${item.color} text-5xl md:text-6xl drop-shadow-xl animate-bounce`}
            style={{
              top: `${randomTop}%`,
              left: `${randomLeft}%`,
              animationDuration: `${3 + delay}s`,
            }}
          >
            {item.icon}
          </div>
        );
      })}
    </div>
  );
};

export default AppsBlowing;
