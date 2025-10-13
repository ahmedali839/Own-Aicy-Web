// import React from 'react';
// import './AppsBlowing.css';

// const AppsBlowing = () => {
//   const techStack = [
//     {
//       name: 'JavaScript',
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
//       position: 'pos-1'
//     },
//     {
//       name: 'React',
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
//       position: 'pos-2'
//     },
//     {
//       name: 'Node.js',
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
//       position: 'pos-3'
//     },
//     {
//       name: 'MongoDB',
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
//       position: 'pos-4'
//     },
//     {
//       name: 'Express.js',
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
//       position: 'pos-5'
//     },
//     {
//       name: 'HTML5',
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
//       position: 'pos-6'
//     },
//     {
//       name: 'CSS3',
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
//       position: 'pos-7'
//     },
//     {
//       name: 'Tailwind CSS',
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
//       position: 'pos-8'
//     },
//     {
//       name: 'Bootstrap',
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
//       position: 'pos-9'
//     },
//     {
//       name: 'Git',
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
//       position: 'pos-10'
//     },
//     {
//       name: 'TypeScript',
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
//       position: 'pos-11'
//     },
//     {
//       name: 'VS Code',
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
//       position: 'pos-12'
//     }
//   ];

//   return (
//     <div className="apps-container">
//       {techStack.map((tech, index) => (
//         <div 
//           key={tech.name} 
//           className={`tech-icon ${tech.position}`}
//           style={{
//             animationDelay: `${index * 0.2}s`
//           }}
//         >
//           <img 
//             src={tech.icon} 
//             alt={tech.name} 
//             title={tech.name}
//           />
//           <span className="tech-name">{tech.name}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AppsBlowing;




































// import React from 'react';
// import {
//   SiJavascript,
//   SiHtml5,
//   SiTailwindcss,
//   SiBootstrap,
//   SiNodedotjs,
//   SiReact,
//   SiExpress,
//   SiMongodb,
// } from 'react-icons/si';

// const logos = [
//   { icon: SiJavascript, color: '#f0db4f', name: 'JavaScript' },
//   { icon: SiHtml5, color: '#e34c26', name: 'HTML5' },
//   { icon: SiTailwindcss, color: '#38b2ac', name: 'Tailwind CSS' },
//   { icon: SiBootstrap, color: '#563d7c', name: 'Bootstrap' },
//   { icon: SiNodedotjs, color: '#68a063', name: 'NodeJS' },
//   { icon: SiReact, color: '#61dafb', name: 'ReactJS' },
//   { icon: SiExpress, color: '#000000', name: 'ExpressJS' },
//   { icon: SiMongodb, color: '#4db33d', name: 'MongoDB' },
// ];

// // Predefined positions (percentages) for logos to appear randomly but within the container
// const positions = [
//   { top: '15%', left: '10%' },
//   { top: '30%', left: '40%' },
//   { top: '10%', left: '70%' },
//   { top: '50%', left: '20%' },
//   { top: '60%', left: '60%' },
//   { top: '35%', left: '80%' },
//   { top: '75%', left: '15%' },
//   { top: '75%', left: '75%' },
// ];

// const AppsBlowing = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
//       {/* Header */}
//       <header className="w-full max-w-6xl flex items-center justify-between px-4 py-6 border-b border-orange-400 rounded-lg shadow-md">
//         <div className="flex items-center space-x-4">
//           <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
//             <img
//               src="/profile_pic.jpg" // replace with appropriate img path
//               alt="Profile"
//               className="w-10 h-10 rounded-full object-cover"
//             />
//           </div>
//           <div>
//             <h1 className="font-bold text-lg text-gray-900">AI | Code | Yar</h1>
//             <p className="text-sm text-gray-600">Future proof Learning</p>
//           </div>
//         </div>
//         <nav>
//           <ul className="flex space-x-8 text-orange-500 font-semibold text-md underline underline-offset-4 decoration-orange-300">
//             <li className="hover:text-orange-700 cursor-pointer">Home</li>
//             <li className="hover:text-orange-700 cursor-pointer">About</li>
//             <li className="hover:text-orange-700 cursor-pointer">Project</li>
//             <li className="hover:text-orange-700 cursor-pointer">Contact</li>
//           </ul>
//         </nav>
//       </header>

//       {/* Logos scattered on page */}
//       <div className="relative w-full max-w-6xl h-[70vh] mt-12 rounded-lg">
//         {logos.map((logo, index) => {
//           const Icon = logo.icon;
//           const pos = positions[index];
//           return (
//             <div
//               key={index}
//               title={logo.name}
//               className="absolute shadow-lg rounded-full p-2 cursor-default"
//               style={{
//                 top: pos.top,
//                 left: pos.left,
//                 backgroundColor: 'white',
//                 boxShadow:
//                   '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)',
//                 transform: 'translate(-50%, -50%)',
//                 width: '64px',
//                 height: '64px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}
//             >
//               <Icon size={40} color={logo.color} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default AppsBlowing;










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
