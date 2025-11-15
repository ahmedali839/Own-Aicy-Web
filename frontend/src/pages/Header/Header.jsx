// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import './Header.css';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="header">
//       <div className="header-content">
//         <div className="logo flex items-center">
//           <img
//             src="https://lh3.googleusercontent.com/a/ACg8ocJ67B59yYvEz6tl4pnD8FH_uHB6Mp3oETyamw9O9xpajU2ixeA=s96-c"
//             alt="Profile"
//             className="w-16 h-16 rounded mr-3"
//           />
//           <div>
//             <h2 className="text-lg font-bold">AI | Code | Yar</h2>
//             <p className="text-sm font-thin text-gray-400">Future proof Learning</p>
//           </div>
//         </div>

//         <button className="menu-button" onClick={toggleMenu}>
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             {isMenuOpen ? (
//               <path d="M18 6L6 18M6 6l12 12" />
//             ) : (
//               <>
//                 <path d="M3 12h18" />
//                 <path d="M3 6h18" />
//                 <path d="M3 18h18" />
//               </>
//             )}
//           </svg>
//         </button>

//         <nav className={`border-3 rounded-2xl border-green-200 nav-links ${isMenuOpen ? 'active' : ''}`}>
//           {["Home", "About", "Projects", "Contact"].map((item) => (
//             <Link
//               key={item}
//               to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//               className="nav-link hover:bg-gradient-to-tl from-gray-700 to-gray-900 px-4 py-2 rounded-lg"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {item}
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


































// import React from "react";

// const navigationItems = [
//   { label: "Home", link: "#home" },
//   { label: "About", link: "#about" },
//   { label: "Project", link: "#project" },
//   { label: "Contact", link: "#contact" },
// ];

// const radius = 150; // Radius of the half circle
// const centerX = 0;   // X Center position (relative coords)
// const centerY = 0;   // Y Center position (relative coords)

// const Header = () => {
//   // Calculate the angle step for each nav item
//   const totalItems = navigationItems.length;
//   const startAngle = 180 + 30; // 180° (straight left) + 30deg padding start
//   const endAngle = 360 - 30;   // 360° (straight right) - 30deg padding end
//   const angleStep = (endAngle - startAngle) / (totalItems - 1);

//   return (
//     <>
//       <style>{`
//         .header-container {
//           width: 100%;
//           max-width: 600px;
//           margin: 40px auto;
//           padding: 20px;
//           border: 1.5px solid #E38B18; /* orange border */
//           border-radius: 16px;
//           background-color: #fff;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           box-sizing: border-box;
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           position: relative;
//         }

//         .logo-container {
//           display: flex;
//           align-items: center;
//           box-shadow: 0 4px 8px rgb(0 0 0 / 0.1);
//           border-radius: 12px;
//           background: #fff;
//           max-width: 220px;
//           padding: 12px 20px;
//           position: relative;
//           z-index: 10;
//           cursor: pointer;
//           transition: transform 0.3s ease;
//         }

//         .logo-container:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 8px 12px rgb(0 0 0 / 0.15);
//         }

//         .logo-image {
//           width: 48px;
//           height: 48px;
//           border-radius: 50%;
//           background-color: #F5C00C;
//           margin-right: 16px;
//           flex-shrink: 0;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           font-weight: bold;
//           color: #fff;
//           font-size: 24px;
//           user-select: none;
//         }

//         .logo-text {
//           font-weight: 700;
//           font-size: 16px;
//           color: #333;
//         }

//         .logo-subtext {
//           font-size: 12px;
//           color: #666;
//           margin-top: 4px;
//           font-weight: 400;
//         }

//         .nav-wrapper {
//           position: relative;
//           width: 330px; 
//           height: 165px; /* half circle radius */
//           display: flex;
//           justify-content: center;
//           align-items: flex-end;
//           user-select: none;
//         }

//         .half-circle {
//           position: absolute;
//           bottom: 0;
//           width: 330px;
//           height: 165px;
//           border: 2px solid #E38B18;
//           border-bottom: none;
//           border-radius: 165px 165px 0 0; /* half circle */
//           pointer-events: none;
//         }

//         .nav-item {
//           position: absolute;
//           bottom: 0;
//           width: 96px;
//           height: 32px;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           color: #E38B18;
//           font-weight: 600;
//           font-size: 14px;
//           cursor: pointer;
//           text-decoration: none;
//           background: white;
//           transform-origin: bottom center;
//           transition: color 0.3s ease, transform 0.3s ease;
//           user-select: none;
//           border-radius: 12px;
//           box-shadow: 0 2px 6px rgb(227 139 24 / 0.2);
//         }

//         .nav-item:hover {
//           color: #FF8C00;
//           transform: scale(1.15);
//           font-weight: 700;
//           box-shadow: 0 4px 12px rgb(255 140 0 / 0.35);
//         }
//       `}</style>

//       <header className="header-container">
//         <div className="logo-container" aria-label="Site Logo">
//           {/* You can replace the image placeholder below with your own image */}
//           <div className="logo-image" aria-hidden="true">
//             AI
//           </div>
//           <div>
//             <div className="logo-text">AI | Code | Yar</div>
//             <div className="logo-subtext">Future proof Learning</div>
//           </div>
//         </div>

//         <nav className="nav-wrapper" role="navigation" aria-label="Primary Navigation">
//           <div className="half-circle" aria-hidden="true"></div>

//           {navigationItems.map((item, index) => {
//             // Calculate angle in radians for each nav item
//             const angleDeg = startAngle + angleStep * index;
//             const angleRad = (angleDeg * Math.PI) / 180;

//             // Calculate item position on the arc 
//             const x = centerX + radius * Math.cos(angleRad);
//             const y = centerY + radius * Math.sin(angleRad);

//             // Adjust position relative to nav-wrapper center (bottom center)
//             const left = 165 + x - 48; // 165 is half of width (330), 48 half width of item
//             const bottom = y; // because nav-wrapper aligns items bottom = 0

//             // Rotate the nav item so its text is aligned tangent to the arc
//             const rotate = angleDeg - 90;

//             return (
//               <a
//                 key={item.label}
//                 href={item.link}
//                 className="nav-item"
//                 style={{
//                   left: `${left}px`,
//                   bottom: `${bottom}px`,
//                   transform: `rotate(${rotate}deg)`,
//                 }}
//                 aria-current={index === 0 ? "page" : undefined}
//               >
//                 <span
//                   style={{
//                     display: "inline-block",
//                     transform: `rotate(${-rotate}deg)`,
//                     pointerEvents: "none",
//                   }}
//                 >
//                   {item.label}
//                 </span>
//               </a>
//             );
//           })}
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Header;



















































// import React from "react";

// const navItems = ["Home", "About", "Project", "Contact"];

// const Header = () => {
//   const circleRadius = 120; // Radius of the circle
//   const buttonRadius = 30; // Radius of each circular button
//   const centerX = circleRadius + buttonRadius; // Center of circle X
//   const centerY = circleRadius + buttonRadius + 40; // Center of circle Y, shifted down for bottom half circle

//   // Calculate button positions on bottom half circle (180° to 360°)
//   const angleStep = 180 / (navItems.length - 1);

//   return (
//     <header
//       style={{
//         border: "1px solid #f2932c",
//         borderRadius: 8,
//         maxWidth: 1040,
//         margin: "20px auto",
//         padding: "12px 30px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         background: "#fff",
//         boxShadow: "0 2px 6px rgb(0 0 0 / 0.05)",
//       }}
//     >
//       {/* Left: User Info */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: 12,
//           boxShadow: "0 16px 28px -2px rgba(242,146,44,0.2)",
//           padding: 10,
//           borderRadius: 6,
//           minWidth: 200,
//           userSelect: "none",
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: "#fabf01",
//             width: 50,
//             height: 50,
//             borderRadius: "50%",
//             overflow: "hidden",
//             boxShadow: "0 4px 6px rgb(0 0 0 / 0.15)",
//             flexShrink: 0,
//           }}
//         >
//           <img
//             src="https://i.ibb.co/cgSmXnc/photo-1621302235910-3df947854e60.jpg"
//             alt="Avatar"
//             style={{ width: "100%", height: "auto" }}
//           />
//         </div>
//         <div>
//           <h3 style={{ margin: 0, fontWeight: 600, fontSize: 18, color: "#333" }}>
//             AI | Code | Yar
//           </h3>
//           <p style={{ margin: 0, fontSize: 14, color: "#555", fontWeight: 500 }}>
//             Future proof Learning
//           </p>
//         </div>
//       </div>

//       {/* Right: Bottom Half Circle Navigation */}
//       <div
//         style={{
//           position: "relative",
//           width: centerX * 2,
//           height: centerY + buttonRadius + 10, // enough height for bottom half circle and buttons
//           pointerEvents: "auto",
//         }}
//       >
//         {/* SVG Half Circle Shape for Bottom Side */}
//         <svg
//           width={centerX * 2}
//           height={centerY + buttonRadius + 10}
//           viewBox={`0 0 ${centerX * 2} ${centerY + buttonRadius + 10}`}
//           style={{ position: "absolute", top: 0, left: 0 }}
//         >
//           <path
//             d={`
//                 M ${centerX - circleRadius} ${centerY}
//                 A ${circleRadius} ${circleRadius} 0 0 1 ${centerX + circleRadius} ${centerY}
//                 L ${centerX + circleRadius} ${centerY + buttonRadius * 2}
//                 L ${centerX - circleRadius} ${centerY + buttonRadius * 2}
//                 Z
//             `}
//             fill="none"
//             stroke="#f2932c"
//             strokeWidth={1.5}
//           />
//         </svg>

//         {/* Navigation Buttons Positioned on Bottom Half Circle */}
//         {navItems.map((item, idx) => {
//           const angleDeg = 180 + idx * angleStep; // bottom half circle from 180° to 360°
//           const angleRad = (angleDeg * Math.PI) / 180;

//           // Calculate button center position
//           const x = centerX + circleRadius * Math.cos(angleRad) - buttonRadius;
//           const y = centerY + circleRadius * Math.sin(angleRad) - buttonRadius;

//           return (
//             <button
//               key={item}
//               style={{
//                 position: "absolute",
//                 left: x,
//                 top: y,
//                 width: buttonRadius * 2,
//                 height: buttonRadius * 2,
//                 borderRadius: "50%",
//                 border: "none",
//                 backgroundColor: "#f2932c",
//                 color: "#fff",
//                 fontWeight: "600",
//                 cursor: "pointer",
//                 boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 transition: "background-color 0.3s ease",
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d77105")}
//               onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f2932c")}
//             >
//               {item}
//             </button>
//           );
//         })}
//       </div>
//     </header>
//   );
// };

// export default Header;
























// import React from "react";

// const Header = () => {
//   const navItems = ["Home", "About", "Project", "Contact", "|", "|", "|", "|", "|", "|", "|", "|", "|", "|", "|"];

//   return (
//     <header
//       style={{
//         border: "2px solid #f2932c",
//         borderRadius: 16,
//         maxWidth: 900,
//         margin: "20px auto",
//         padding: "20px 40px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         background: "#fff",
//         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
//         minHeight: 120,
//       }}
//     >
//       {/* Left: User Profile */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: 16,
//           position: "relative",
//         }}
//       >
//         <div
//           style={{
//             width: 60,
//             height: 60,
//             borderRadius: "50%",
//             overflow: "hidden",
//             border: "3px solid #fabf01",
//             flexShrink: 0,
//           }}
//         >
//           <img
//             src="https://i.ibb.co/cgSmXnc/photo-1621302235910-3df947854e60.jpg"
//             alt="Avatar"
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover"
//             }}
//           />
//         </div>
//         <div>
//           <h2 style={{
//             margin: 0,
//             fontWeight: 700,
//             fontSize: 20,
//             color: "#333",
//             fontFamily: "Arial, sans-serif"
//           }}>
//             AI | Code | Yar
//           </h2>
//           <p style={{
//             margin: 0,
//             fontSize: 14,
//             color: "#666",
//             fontWeight: 500,
//             fontFamily: "Arial, sans-serif"
//           }}>
//             Future proof Learning
//           </p>
//         </div>
//         {/* Orange accent bar */}
//         <div
//           style={{
//             width: 2,
//             height: 80,
//             backgroundColor: "#f2932c",
//             borderRadius: 4,
//             marginLeft: 12,
//           }}
//         />
//       </div>

//       {/* Right: Curved Navigation */}
//       <div
//         style={{
//           position: "relative",
//           width: 400,
//           height: 120,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         {/* SVG for the curved line */}
//         <svg
//           width="400"
//           height="120"
//           viewBox="0 0 400 120"
//           style={{
//             position: "absolute",
//             bottom: 10,
//             right: 70
//           }}
//         >
//           <path
//             d="M 10 60 Q 200 120 350 60"
//             // d="M 4 10 Q 200 90 350 10"
//             fill="none"
//             stroke="#f2932c"
//             strokeWidth={2}
//             strokeLinecap="round"
//           />
//         </svg>

//         {/* for botton curved orange line  */}
//         <svg
//           width="400"
//           height="120"
//           viewBox="0 0 400 120"
//           style={{
//             position: "absolute",
//             bottom: 10,
//             right: 70
//           }}
//         >
//           <path
//             d="M 4 10 Q 200 90 350 10"
//             fill="none"
//             stroke="#f2932c"
//             strokeWidth={2}
//             strokeLinecap="round"
//           />
//         </svg>

//         {/* for botton curved orange line  */}
//         <svg
//           width="400"
//           height="120"
//           viewBox="0 0 400 120"
//           style={{
//             position: "absolute",
//             top: 60,
//             right: 70
//           }}
//         >
//           <path
//             d="M 4 15 Q 200 80 350 15"
//             fill="none"
//             stroke="#ff9f1c"
//             strokeWidth={2}
//             strokeLinecap="round"
//           />
//         </svg>

//         {/* Navigation text positioned along the curve */}
//         {navItems.map((item, index) => {
//           // Calculate positions along the curved path
//           const positions = [
//             { x: -30, y: 32, rotate: 17 },   // Home
//             { x: 50, y: 54, rotate: 10 },   // About
//             { x: 140, y: 60, rotate: -5 },    // Project
//             { x: 230, y: 46, rotate: -17 },   // Contact
//             { x: 0, y: 84, rotate: 15 },   // for "|"
//             { x: 30, y: 91, rotate: 15 },   // for "|"
//             { x: 60, y: 95, rotate: 12 },   // for "|"
//             { x: 90, y: 98, rotate: 10 },   // for "|"
//             { x: 120, y: 99, rotate: 4 },   // for "|"
//             { x: 150, y: 97, rotate: -7 },   // for "|"
//             { x: 180, y: 94, rotate: -12 },   // for "|"
//             { x: 210, y: 89, rotate: -17 },   // for "|"
//             { x: 238, y: 82, rotate: -22 },   // for "|"
//             { x: 260, y: 74, rotate: -27 },   // for "|"
//             { x: -30, y: 77, rotate: 15 },   // for "|"
//           ];

//           const pos = positions[index];

//           console.log(item)

//           return (
//             <span
//               key={item}
//               style={{
//                 position: "absolute",
//                 left: pos.x,
//                 top: pos.y,
//                 transform: `translate(-50%, -50%) rotate(${pos.rotate}deg)`,
//                 color: `${item === "|" ? "gray" : "#f2932c"}`,
//                 fontWeight: `${item === "|" ? "10" : "600"}`,
//                 fontSize: 16,
//                 fontFamily: "Arial, sans-serif",
//                 cursor: "pointer",
//                 userSelect: "none",
//                 transition: "all 0.3s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.color = "#d77105";
//                 e.currentTarget.style.fontSize = "17px";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.color = "#f2932c";
//                 e.currentTarget.style.fontSize = "16px";
//               }}
//             >
//               {item}
//             </span>
//           );
//         })}
//       </div>
//     </header >
//   );
// };

// export default Header;


























// import React, { useState, useEffect } from "react";

// const Header = () => {
//   const navItems = ["Home", "About", "Projects", "Contact", "|", "|", "|", "|", "|", "|", "|", "|", "|", "|", "|"];
//   const [activeIndex, setActiveIndex] = useState(0); // Default to first item (Home)
//   const [animatingIndex, setAnimatingIndex] = useState(0); // Track animation position

//   const handleNavClick = (index, item) => {
//     if (item !== "|") {
//       setActiveIndex(index);
//     }
//   };

//   // Animate the background sliding effect
//   useEffect(() => {
//     setAnimatingIndex(activeIndex);
//   }, [activeIndex]);

//   return (
//     <header
//       style={{
//         border: "2px solid #f2932c",
//         borderRadius: 16,
//         maxWidth: 900,
//         margin: "20px auto",
//         padding: "20px 40px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         background: "#fff",
//         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
//         minHeight: 120,
//       }}
//     >
//       {/* Left: User Profile */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: 16,
//           position: "relative",
//         }}
//       >
//         <div
//           style={{
//             width: 60,
//             height: 60,
//             borderRadius: "50%",
//             overflow: "hidden",
//             border: "3px solid #fabf01",
//             flexShrink: 0,
//           }}
//         >
//           <img
//             src="https://i.ibb.co/cgSmXnc/photo-1621302235910-3df947854e60.jpg"
//             alt="Avatar"
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover"
//             }}
//           />
//         </div>
//         <div>
//           <h2 style={{
//             margin: 0,
//             fontWeight: 700,
//             fontSize: 20,
//             color: "#333",
//             fontFamily: "Arial, sans-serif"
//           }}>
//             AI | Code | Yar
//           </h2>
//           <p style={{
//             margin: 0,
//             fontSize: 14,
//             color: "#666",
//             fontWeight: 500,
//             fontFamily: "Arial, sans-serif"
//           }}>
//             Future proof Learning
//           </p>
//         </div>
//         {/* Orange accent bar */}
//         <div
//           style={{
//             width: 2,
//             height: 80,
//             backgroundColor: "#f2932c",
//             borderRadius: 4,
//             marginLeft: 12,
//           }}
//         />
//       </div>

//       {/* Right: Curved Navigation */}
//       <div
//         style={{
//           position: "relative",
//           width: 400,
//           height: 120,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         {/* SVG for the curved line */}
//         <svg
//           width="400"
//           height="120"
//           viewBox="0 0 400 120"
//           style={{
//             position: "absolute",
//             bottom: 10,
//             right: 70
//           }}
//         >
//           <path
//             d="M 10 60 Q 200 120 350 60"
//             fill="none"
//             stroke="#f2932c"
//             strokeWidth={2}
//             strokeLinecap="round"
//           />
//         </svg>

//         {/* for bottom curved orange line  */}
//         <svg
//           width="400"
//           height="120"
//           viewBox="0 0 400 120"
//           style={{
//             position: "absolute",
//             bottom: 10,
//             right: 70
//           }}
//         >
//           <path
//             d="M 4 10 Q 200 90 350 10"
//             fill="none"
//             stroke="#f2932c"
//             strokeWidth={2}
//             strokeLinecap="round"
//           />
//         </svg>

//         {/* for bottom curved orange line  */}
//         <svg
//           width="400"
//           height="120"
//           viewBox="0 0 400 120"
//           style={{
//             position: "absolute",
//             top: 60,
//             right: 70
//           }}
//         >
//           <path
//             d="M 4 15 Q 200 80 350 15"
//             fill="none"
//             stroke="#ff9f1c"
//             strokeWidth={2}
//             strokeLinecap="round"
//           />
//         </svg>

//         {/* Animated Background Slider */}
//         {(() => {
//           const positions = [
//             { x: -30, y: 34, rotate: 18 },   // Home
//             { x: 48, y: 54, rotate: 8 },   // About
//             { x: 142, y: 60, rotate: -3 },    // Project
//             { x: 230, y: 44, rotate: -17 },   // Contact
//           ];

//           const activePos = positions[animatingIndex] || positions[0];

//           return (
//             <div
//               style={{
//                 position: "absolute",
//                 left: activePos.x,
//                 top: activePos.y,
//                 transform: `translate(-50%, -50%) rotate(${activePos.rotate}deg)`,
//                 width: "80px",
//                 height: "36px",
//                 backgroundColor: "#f2932c",
//                 borderRadius: "20px",
//                 transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
//                 zIndex: 1,
//                 boxShadow: "0 4px 15px rgba(242, 147, 44, 0.4), 0 2px 8px rgba(242, 147, 44, 0.2)",
//                 opacity: navItems[animatingIndex] !== "|" ? 1 : 0,
//               }}
//             />
//           );
//         })()}

//         {/* Navigation text positioned along the curve */}
//         {navItems.map((item, index) => {
//           // Calculate positions along the curved path
//           const positions = [
//             { x: -30, y: 34, rotate: 18 },   // Home
//             { x: 48, y: 54, rotate: 8 },   // About
//             { x: 142, y: 60, rotate: -3 },    // Project
//             { x: 230, y: 44, rotate: -17 },   // Contact
//             { x: 0, y: 84, rotate: 15 },   // for "|"
//             { x: 30, y: 91, rotate: 15 },   // for "|"
//             { x: 60, y: 95, rotate: 12 },   // for "|"
//             { x: 90, y: 98, rotate: 10 },   // for "|"
//             { x: 120, y: 99, rotate: 4 },   // for "|"
//             { x: 150, y: 97, rotate: -7 },   // for "|"
//             { x: 180, y: 94, rotate: -12 },   // for "|"
//             { x: 210, y: 89, rotate: -17 },   // for "|"
//             { x: 238, y: 82, rotate: -22 },   // for "|"
//             { x: 260, y: 74, rotate: -27 },   // for "|"
//             { x: -30, y: 77, rotate: 15 },   // for "|"
//           ];

//           const pos = positions[index];
//           const isActive = activeIndex === index && item !== "|";
//           const isNavItem = item !== "|";

//           return (
//             <span
//               key={`${item}-${index}`}
//               onClick={() => handleNavClick(index, item)}
//               style={{
//                 position: "absolute",
//                 left: pos.x,
//                 top: pos.y,
//                 transform: `translate(-50%, -50%) rotate(${pos.rotate}deg)`,
//                 color: isActive ? "#fff" : (item === "|" ? "#ddd" : "#f2932c"),
//                 fontWeight: item === "|" ? "200" : "600",
//                 fontSize: isActive ? "17px" : "16px",
//                 fontFamily: "Arial, sans-serif",
//                 cursor: isNavItem ? "pointer" : "default",
//                 userSelect: "none",
//                 transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//                 padding: "8px 12px",
//                 borderRadius: "20px",
//                 zIndex: isActive ? 10 : 5,
//                 transformOrigin: "center",
//                 textShadow: isActive ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
//               }}
//               onMouseEnter={(e) => {
//                 if (isNavItem && !isActive) {
//                   e.currentTarget.style.color = "#d77105";
//                   e.currentTarget.style.fontSize = "17px";
//                   e.currentTarget.style.backgroundColor = "rgba(242, 147, 44, 0.08)";
//                   e.currentTarget.style.transform = `translate(-50%, -50%) rotate(${pos.rotate}deg) scale(1.05)`;
//                 }
//               }}
//               onMouseLeave={(e) => {
//                 if (isNavItem && !isActive) {
//                   e.currentTarget.style.color = "#f2932c";
//                   e.currentTarget.style.fontSize = "16px";
//                   e.currentTarget.style.backgroundColor = "transparent";
//                   e.currentTarget.style.transform = `translate(-50%, -50%) rotate(${pos.rotate}deg) scale(1)`;
//                 }
//               }}
//             >
//               {item}
//             </span>
//           );
//         })}
//       </div>
//     </header>
//   );
// };

// export default Header;













// import React, { useState, useEffect } from "react";

// const Header = () => {
//   const navItems = ["Home", "About", "Projects", "Contact"];
//   const [activeIndex, setActiveIndex] = useState(0); // Default to first item (Home)
//   const [animatingIndex, setAnimatingIndex] = useState(0); // Track animation position

//   const handleNavClick = (index, item) => {
//     setActiveIndex(index);
//   };

//   // Animate the background sliding effect
//   useEffect(() => {
//     setAnimatingIndex(activeIndex);
//   }, [activeIndex]);

//   return (
//     <header
//       style={{
//         border: "2px solid #f2932c",
//         borderRadius: 16,
//         maxWidth: 900,
//         margin: "20px auto",
//         padding: "20px 40px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         background: "#fff",
//         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
//         minHeight: 120,
//       }}
//     >
//       {/* Left: User Profile */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: 16,
//           position: "relative",
//         }}
//       >
//         <div
//           style={{
//             width: 60,
//             height: 60,
//             borderRadius: "50%",
//             overflow: "hidden",
//             border: "3px solid #fabf01",
//             flexShrink: 0,
//           }}
//         >
//           <img
//             src="https://i.ibb.co/cgSmXnc/photo-1621302235910-3df947854e60.jpg"
//             alt="Avatar"
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover"
//             }}
//           />
//         </div>
//         <div>
//           <h2 style={{
//             margin: 0,
//             fontWeight: 700,
//             fontSize: 20,
//             color: "#333",
//             fontFamily: "Arial, sans-serif"
//           }}>
//             AI | Code | Yar
//           </h2>
//           <p style={{
//             margin: 0,
//             fontSize: 14,
//             color: "#666",
//             fontWeight: 500,
//             fontFamily: "Arial, sans-serif"
//           }}>
//             Future proof Learning
//           </p>
//         </div>
//         {/* Orange accent bar */}
//         <div
//           style={{
//             width: 2,
//             height: 80,
//             backgroundColor: "#f2932c",
//             borderRadius: 4,
//             marginLeft: 12,
//           }}
//         />
//       </div>

//       {/* Right: Curved Navigation */}
//       <div
//         style={{
//           position: "relative",
//           width: 400,
//           height: 120,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         {/* SVG for the curved line */}
//         <svg
//           width="400"
//           height="120"
//           viewBox="0 0 400 120"
//           style={{
//             position: "absolute",
//             bottom: 10,
//             right: 70
//           }}
//         >
//           <path
//             d="M 10 60 Q 200 120 350 60"
//             fill="none"
//             stroke="#f2932c"
//             strokeWidth={2}
//             strokeLinecap="round"
//           />
//         </svg>

//         {/* for bottom curved orange line  */}
//         <svg
//           width="400"
//           height="120"
//           viewBox="0 0 400 120"
//           style={{
//             position: "absolute",
//             bottom: 10,
//             right: 70
//           }}
//         >
//           <path
//             d="M 4 10 Q 200 90 350 10"
//             fill="none"
//             stroke="#f2932c"
//             strokeWidth={2}
//             strokeLinecap="round"
//           />
//         </svg>

//         {/* Third curved line with decorative lines */}
//         <svg
//           width="400"
//           height="120"
//           viewBox="0 0 400 120"
//           style={{
//             position: "absolute",
//             top: 60,
//             right: 70
//           }}
//         >
//           {/* Main curved line */}
//           <path
//             d="M 4 15 Q 200 80 350 15"
//             fill="none"
//             stroke="#ff9f1c"
//             strokeWidth={2}
//             strokeLinecap="round"
//           />

//           {/* Decorative vertical lines - NOW VISIBLE */}
//           {/* Left side lines */}
//           <line x1="20" y1="10" x2="20" y2="20" stroke="#90e0ef" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
//           <line x1="30" y1="20" x2="30" y2="20" stroke="#bde0fe" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
//           <line x1="40" y1="25" x2="40" y2="14" stroke="#1b263b" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
//           <line x1="50" y1="24" x2="50" y2="30" stroke="#778da9" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
//           <line x1="60" y1="27" x2="60" y2="37" stroke="#e0e1dd" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
//           <line x1="70" y1="30" x2="70" y2="36" stroke="#0077b6" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
//           <line x1="80" y1="33" x2="80" y2="43" stroke="#ff9f1c" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
//           <line x1="90" y1="36" x2="90" y2="42" stroke="#219ebc" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />

//           {/* Center lines */}
//           <line x1="100" y1="40" x2="100" y2="50" stroke="#ffe5d9" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
//           <line x1="120" y1="45" x2="120" y2="51" stroke="#003049" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
//           <line x1="140" y1="50" x2="140" y2="60" stroke="#780000" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
//           <line x1="160" y1="55" x2="160" y2="61" stroke="#669bbc" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
//           <line x1="180" y1="58" x2="180" y2="68" stroke="#d4a373" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
//           <line x1="200" y1="60" x2="200" y2="66" stroke="#14213d" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
//           <line x1="220" y1="58" x2="220" y2="68" stroke="#ccd5ae" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
//           <line x1="240" y1="55" x2="240" y2="61" stroke="#ff9f1c" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />

//           {/* Right side lines */}
//           <line x1="260" y1="50" x2="260" y2="60" stroke="black" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
//           <line x1="280" y1="45" x2="280" y2="51" stroke="yellow " strokeWidth="1.5" opacity="0.8" strokeLinecap="round" />
//           <line x1="300" y1="40" x2="300" y2="50" stroke="gray" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
//           <line x1="320" y1="33" x2="320" y2="39" stroke="pink" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
//           <line x1="340" y1="27" x2="340" y2="37" stroke="purple" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
//         </svg>

//         {/* Animated Background Slider */}
//         {(() => {
//           const positions = [
//             { x: -30, y: 34, rotate: 18 },   // Home
//             { x: 48, y: 54, rotate: 8 },   // About
//             { x: 142, y: 60, rotate: -3 },    // Project
//             { x: 230, y: 44, rotate: -17 },   // Contact
//           ];

//           const activePos = positions[animatingIndex] || positions[0];

//           return (
//             <div
//               style={{
//                 position: "absolute",
//                 left: activePos.x,
//                 top: activePos.y,
//                 transform: `translate(-50%, -50%) rotate(${activePos.rotate}deg)`,
//                 width: "80px",
//                 height: "36px",
//                 backgroundColor: "#f2932c",
//                 borderRadius: "20px",
//                 transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
//                 zIndex: 1,
//                 boxShadow: "0 4px 15px rgba(242, 147, 44, 0.4), 0 2px 8px rgba(242, 147, 44, 0.2)",
//                 opacity: 1,
//               }}
//             />
//           );
//         })()}

//         {/* Navigation text positioned along the curve */}
//         {navItems.map((item, index) => {
//           const positions = [
//             { x: -30, y: 34, rotate: 18 },   // Home
//             { x: 48, y: 54, rotate: 8 },   // About
//             { x: 142, y: 60, rotate: -3 },    // Project
//             { x: 230, y: 44, rotate: -17 },   // Contact
//           ];

//           const pos = positions[index];
//           const isActive = activeIndex === index;

//           return (
//             <span
//               key={`${item}-${index}`}
//               onClick={() => handleNavClick(index, item)}
//               style={{
//                 position: "absolute",
//                 left: pos.x,
//                 top: pos.y,
//                 transform: `translate(-50%, -50%) rotate(${pos.rotate}deg)`,
//                 color: isActive ? "#fff" : "#f2932c",
//                 fontWeight: "600",
//                 fontSize: isActive ? "17px" : "16px",
//                 fontFamily: "Arial, sans-serif",
//                 cursor: "pointer",
//                 userSelect: "none",
//                 transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//                 padding: "8px 12px",
//                 borderRadius: "20px",
//                 zIndex: isActive ? 10 : 5,
//                 transformOrigin: "center",
//                 textShadow: isActive ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
//               }}
//               onMouseEnter={(e) => {
//                 if (!isActive) {
//                   e.currentTarget.style.color = "#d77105";
//                   e.currentTarget.style.fontSize = "17px";
//                   e.currentTarget.style.backgroundColor = "rgba(242, 147, 44, 0.08)";
//                   e.currentTarget.style.transform = `translate(-50%, -50%) rotate(${pos.rotate}deg) scale(1.05)`;
//                 }
//               }}
//               onMouseLeave={(e) => {
//                 if (!isActive) {
//                   e.currentTarget.style.color = "#f2932c";
//                   e.currentTarget.style.fontSize = "16px";
//                   e.currentTarget.style.backgroundColor = "transparent";
//                   e.currentTarget.style.transform = `translate(-50%, -50%) rotate(${pos.rotate}deg) scale(1)`;
//                 }
//               }}
//             >
//               {item}
//             </span>
//           );
//         })}
//       </div>
//     </header>
//   );
// };

// export default Header;



















































// import React, { useState, useEffect } from "react";

// const Header = () => {
//   // Navigation configuration
//   const navItems = ["Home", "About", "Projects", "Contact"];
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animatingIndex, setAnimatingIndex] = useState(0);

//   // Navigation item positions along the curve
//   const navPositions = [
//     { x: -30, y: 34, rotate: 18, curveProgress: 0.1 },   // Home
//     { x: 48, y: 54, rotate: 8, curveProgress: 0.35 },    // About
//     { x: 142, y: 60, rotate: -3, curveProgress: 0.65 },  // Projects
//     { x: 230, y: 44, rotate: -17, curveProgress: 0.9 },  // Contact
//   ];

//   // Handle navigation click
//   const handleNavClick = (index) => {
//     setActiveIndex(index);
//   };

//   // Animate background sliding along curve
//   useEffect(() => {
//     setAnimatingIndex(activeIndex);
//   }, [activeIndex]);

//   // Calculate position along curve for smooth animation
//   const getAnimatedPosition = () => {
//     const startPos = navPositions[animatingIndex] || navPositions[0];

//     // Create intermediate positions for curved animation
//     const curveKeyframes = [];
//     const steps = 20;

//     for (let i = 0; i <= steps; i++) {
//       const t = i / steps;
//       const progress = startPos.curveProgress;

//       // Curve formula: M 10 60 Q 200 120 350 60 (main navigation curve)
//       const startX = 10, startY = 60;
//       const controlX = 200, controlY = 120;
//       const endX = 350, endY = 60;

//       const x = (1 - progress) * (1 - progress) * startX +
//         2 * (1 - progress) * progress * controlX +
//         progress * progress * endX;
//       const y = (1 - progress) * (1 - progress) * startY +
//         2 * (1 - progress) * progress * controlY +
//         progress * progress * endY;

//       curveKeyframes.push({ x: x - 70, y: y - 10 }); // Adjust for SVG positioning
//     }

//     return startPos;
//   };

//   // Decorative lines data for cleaner code
//   const decorativeLines = [
//     // Left section - Cool blues and teals
//     { x: 10, y1: 80, y2: 20, color: "#778da9", width: 2, opacity: 0.7 },
//     { x: 25, y1: 80, y2: 24, color: "#b6ad90", width: 1.5, opacity: 0.5 },
//     { x: 40, y1: 80, y2: 28, color: "#10b981", width: 1.5, opacity: 0.5 },
//     { x: 55, y1: 80, y2: 30, color: "#f59e0b", width: 2, opacity: 0.7 },
//     { x: 70, y1: 80, y2: 34, color: "#ef4444", width: 1.5, opacity: 0.5 },

//     // Center section - Warm oranges and yellows
//     { x: 85, y1: 82, y2: 36, color: "#ff9f1c", width: 2, opacity: 0.8 },
//     { x: 100, y1: 80, y2: 40, color: "#ff9f1c", width: 2, opacity: 0.8 },
//     { x: 120, y1: 80, y2: 44, color: "#ffb703", width: 1.5, opacity: 0.6 },
//     { x: 140, y1: 80, y2: 46, color: "#fb8500", width: 2, opacity: 0.8 },
//     { x: 160, y1: 80, y2: 49, color: "#8ecae6", width: 1.5, opacity: 0.6 },
//     { x: 180, y1: 80, y2: 50, color: "#219ebc", width: 2, opacity: 0.8 },
//     { x: 200, y1: 80, y2: 50, color: "#023047", width: 1.5, opacity: 0.6 },

//     // Right section - Deep blues and purples
//     { x: 220, y1: 80, y2: 49, color: "#7209b7", width: 2, opacity: 0.8 },
//     { x: 240, y1: 80, y2: 47, color: "#560bad", width: 1.5, opacity: 0.6 },
//     { x: 260, y1: 80, y2: 44, color: "#480ca8", width: 2, opacity: 0.8 },
//     { x: 280, y1: 80, y2: 40, color: "#3a0ca3", width: 1.5, opacity: 0.6 },
//     { x: 300, y1: 80, y2: 36, color: "#3f37c9", width: 2, opacity: 0.8 },
//     { x: 320, y1: 80, y2: 30, color: "#4361ee", width: 1.5, opacity: 0.6 },
//     { x: 340, y1: 80, y2: 22, color: "#4895ef", width: 2, opacity: 0.8 },
//   ];

//   return (
//     <>
//       <header style={headerStyles}>


//         {/* User Profile Section */}
//         <div style={profileContainerStyles}>
//           <div style={avatarContainerStyles}>
//             <img
//               src="https://lh3.googleusercontent.com/a/ACg8ocJ67B59yYvEz6tl4pnD8FH_uHB6Mp3oETyamw9O9xpajU2ixeA=s96-c"
//               alt="Avatar"
//               style={avatarImageStyles}
//             />
//             {/* Enhanced: Added online status indicator */}
//             {/* <div style={onlineIndicatorStyles}></div> */}
//           </div>

//           <div style={userInfoStyles}>
//             <h2 style={userNameStyles}>AI | Code | Yar</h2>
//             <p style={userTaglineStyles}>Future proof Learning</p>
//             {/* Enhanced: Added skill tags */}
//           </div>

//           {/* Enhanced: Animated accent bar */}
//           <div style={accentBarStyles}></div>
//         </div>

//         {/* Navigation Section */}
//         <div style={navigationContainerStyles}>
//           {/* Main curve line */}
//           <svg width="400" height="120" viewBox="0 0 400 120" style={svgStyles}>
//             <path
//               d="M 10 60 Q 200 120 350 60"
//               fill="none"
//               stroke="#f2932c"
//               strokeWidth={2}
//               strokeLinecap="round"
//             />
//           </svg>

//           {/* Bottom curve line */}
//           <svg width="400" height="120" viewBox="0 0 400 120" style={svgStyles}>
//             <path
//               d="M 4 10 Q 200 90 350 10"
//               fill="none"
//               stroke="#f2932c"
//               strokeWidth={2}
//               strokeLinecap="round"
//             />
//           </svg>

//           {/* Top decorative curve with enhanced lines */}
//           <svg width="400" height="120" viewBox="0 0 400 120" style={topSvgStyles}>
//             <path
//               d="M 4 15 Q 200 80 350 15"
//               fill="none"
//               stroke="#ff9f1c"
//               strokeWidth={2.5}
//               strokeLinecap="round"
//               filter="url(#glow)"
//             />

//             {/* Enhanced: Add glow effect filter */}
//             <defs>
//               <filter id="glow">
//                 <feGaussianBlur stdDeviation="1" result="coloredBlur" />
//                 <feMerge>
//                   <feMergeNode in="coloredBlur" />
//                   <feMergeNode in="SourceGraphic" />
//                 </feMerge>
//               </filter>
//             </defs>

//             {/* Beautiful decorative lines with gradient colors */}
//             {decorativeLines.map((line, index) => (
//               <line
//                 key={index}
//                 x1={line.x}
//                 y1={line.y1}
//                 x2={line.x}
//                 y2={line.y2}
//                 stroke={line.color}
//                 strokeWidth={line.width}
//                 opacity={line.opacity}
//                 strokeLinecap="round"
//               />
//             ))}
//           </svg>

//           {/* Enhanced: Curved path animation background */}
//           <div style={{
//             ...getSliderStyles(getAnimatedPosition()),
//             background: `linear-gradient(135deg, #f2932c 0%, #ff6b35 50%, #f77737 100%)`,
//             boxShadow: `
//             0 4px 15px rgba(242, 147, 44, 0.4),
//             0 2px 8px rgba(242, 147, 44, 0.2),
//             inset 0 1px 0 rgba(255, 255, 255, 0.2)
//           `,
//           }} />

//           {/* Navigation Items */}
//           {navItems.map((item, index) => {
//             const pos = navPositions[index];
//             const isActive = activeIndex === index;

//             return (
//               <span
//                 key={item}
//                 onClick={() => handleNavClick(index)}
//                 style={getNavItemStyles(pos, isActive)}
//                 onMouseEnter={(e) => handleMouseEnter(e, pos, isActive)}
//                 onMouseLeave={(e) => handleMouseLeave(e, pos, isActive)}
//               >
//                 {item}
//               </span>
//             );
//           })}
//         </div>
//       </header>
//     </>
//   );
// };

// // Enhanced: Organized styles for better readability
// const headerStyles = {
//   // border: "2px solid #f2932c",
//   borderRadius: 16,
//   maxWidth: 1400,
//   margin: "5px auto",
//   padding: "20px 40px",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
//   background: "linear-gradient(135deg, #ffffff 0%, #fefefe 100%)",
//   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(242, 147, 44, 0.1)",
//   minHeight: 120,
//   backdropFilter: "blur(10px)",
// };

// const profileContainerStyles = {
//   display: "flex",
//   alignItems: "center",
//   gap: 16,
//   position: "relative",
// };

// const avatarContainerStyles = {
//   width: 60,
//   height: 60,
//   borderRadius: "50%",
//   overflow: "hidden",
//   border: "3px solid #fabf01",
//   flexShrink: 0,
//   position: "relative",
//   transition: "transform 0.3s ease",
// };

// const avatarImageStyles = {
//   width: "100%",
//   height: "100%",
//   objectFit: "cover",
//   transition: "rounded transform 0.3s ease",
// };

// const onlineIndicatorStyles = {
//   position: "absolute",
//   bottom: 2,
//   right: 2,
//   width: 12,
//   height: 12,
//   backgroundColor: "#10b981",
//   borderRadius: "50%",
//   border: "2px solid white",
//   animation: "pulse 2s infinite",
// };

// const userInfoStyles = {
//   display: "flex",
//   flexDirection: "column",
//   gap: 2,
// };

// const userNameStyles = {
//   margin: 0,
//   fontWeight: 700,
//   fontSize: 20,
//   color: "#333",
//   fontFamily: "'Inter', Arial, sans-serif",
// };

// const userTaglineStyles = {
//   margin: 0,
//   fontSize: 14,
//   color: "#666",
//   fontWeight: 500,
//   fontFamily: "'Inter', Arial, sans-serif",
// };

// const skillTagsStyles = {
//   display: "flex",
//   gap: 6,
//   marginTop: 4,
// };

// const skillTagStyles = {
//   fontSize: 10,
//   backgroundColor: "#f2932c",
//   color: "white",
//   padding: "2px 6px",
//   borderRadius: 8,
//   fontWeight: 600,
// };

// const accentBarStyles = {
//   width: 2,
//   height: 80,
//   background: "linear-gradient(180deg, #f2932c 0%, #ff6b35 100%)",
//   borderRadius: 4,
//   marginLeft: 12,
//   boxShadow: "0 2px 8px rgba(242, 147, 44, 0.3)",
// };

// const navigationContainerStyles = {
//   position: "relative",
//   width: 400,
//   height: 120,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// };

// const svgStyles = {
//   position: "absolute",
//   bottom: 10,
//   right: 70,
// };

// const topSvgStyles = {
//   position: "absolute",
//   top: 60,
//   right: 70,
// };

// const getSliderStyles = (activePos) => ({
//   position: "absolute",
//   left: activePos.x,
//   top: activePos.y,
//   transform: `translate(-50%, -50%) rotate(${activePos.rotate}deg)`,
//   width: "80px",
//   height: "36px",
//   borderRadius: "20px",
//   transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
//   zIndex: 1,
//   opacity: 1,
// });

// const getNavItemStyles = (pos, isActive) => ({
//   position: "absolute",
//   left: pos.x,
//   top: pos.y,
//   transform: `translate(-50%, -50%) rotate(${pos.rotate}deg)`,
//   color: isActive ? "#fff" : "#f2932c",
//   fontWeight: "600",
//   fontSize: isActive ? "17px" : "16px",
//   fontFamily: "'Inter', Arial, sans-serif",
//   cursor: "pointer",
//   userSelect: "none",
//   transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//   padding: "8px 12px",
//   borderRadius: "20px",
//   zIndex: isActive ? 10 : 5,
//   transformOrigin: "center",
//   textShadow: isActive ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
//   letterSpacing: "0.5px",
// });

// const handleMouseEnter = (e, pos, isActive) => {
//   if (!isActive) {
//     e.currentTarget.style.color = "#d77105";
//     e.currentTarget.style.fontSize = "17px";
//     e.currentTarget.style.backgroundColor = "rgba(242, 147, 44, 0.1)";
//     e.currentTarget.style.transform = `translate(-50%, -50%) rotate(${pos.rotate}deg) scale(1.08)`;
//     e.currentTarget.style.boxShadow = "0 4px 12px rgba(242, 147, 44, 0.2)";
//   }
// };

// const handleMouseLeave = (e, pos, isActive) => {
//   if (!isActive) {
//     e.currentTarget.style.color = "#f2932c";
//     e.currentTarget.style.fontSize = "16px";
//     e.currentTarget.style.backgroundColor = "transparent";
//     e.currentTarget.style.transform = `translate(-50%, -50%) rotate(${pos.rotate}deg) scale(1)`;
//     e.currentTarget.style.boxShadow = "none";
//   }
// };

// export default Header;



























// // // final code script first one below: 
























// import React, { useState, useEffect, createContext, useContext } from "react";
// import { Link } from "react-router-dom";

// // Loading Context for global loading state management
// const LoadingContext = createContext();

// // Custom hook to use loading context
// export const useLoading = () => {
//   const context = useContext(LoadingContext);
//   if (!context) {
//     throw new Error('useLoading must be used within a LoadingProvider');
//   }
//   return context;
// };

// // Loading Provider component
// export const LoadingProvider = ({ children }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   // const [loadingText, setLoadingText] = useState('Loading...');

//   // const startLoading = (text = 'Loading...') => {
//   const startLoading = (text = '...') => {
//     // setLoadingText(text);
//     setIsLoading(true);
//   };

//   const stopLoading = () => {
//     setIsLoading(false);
//   };

//   return (
//     // <LoadingContext.Provider value={{ isLoading, loadingText, startLoading, stopLoading }}>
//     <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
//       {children}
//     </LoadingContext.Provider>
//   );
// };

// // Professional Loading Bar Component
// // const LoadingBar = ({ isVisible, text = 'Loading...' }) => {
// const LoadingBar = ({ isVisible }) => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     if (isVisible) {
//       setProgress(0);
//       const interval = setInterval(() => {
//         setProgress(prev => {
//           if (prev >= 100) {
//             clearInterval(interval);
//             return 100;
//           }
//           // Simulate realistic loading progress
//           const increment = Math.random() * 15 + 5;
//           return Math.min(prev + increment, 95);
//         });
//       }, 200);

//       return () => clearInterval(interval);
//     } else {
//       // Complete the loading bar when hiding
//       setProgress(100);
//       setTimeout(() => setProgress(0), 300);
//     }
//   }, [isVisible]);

//   if (!isVisible && progress === 0) return null;

//   return (
//     <div style={loadingBarContainerStyles}>
//       <div style={loadingBarBackgroundStyles}>
//         <div
//           style={{
//             ...loadingBarFillStyles,
//             width: `${progress}%`,
//           }}
//         />
//         <div style={loadingBarGlowStyles} />
//       </div>

//       {/* Loading text with pulse animation */}
//       <div style={loadingTextContainerStyles}>
//         {/* <span style={loadingTextStyles}>{text}</span> */}
//         <div style={loadingDotsStyles}>
//           <span style={dotStyles}>.</span>
//           <span style={dotStyles}>.</span>
//           <span style={dotStyles}>.</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Header = () => {
//   // Navigation configuration
//   const navItems = ["Home", "About", "Projects", "Contact"];
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animatingIndex, setAnimatingIndex] = useState(0);

//   // Get loading context
//   const { isLoading, loadingText } = useLoading();

//   // Navigation item positions along the curve
//   const navPositions = [
//     { x: -30, y: 34, rotate: 18, curveProgress: 0.1 },   // Home
//     { x: 48, y: 54, rotate: 8, curveProgress: 0.35 },    // About
//     { x: 142, y: 60, rotate: -3, curveProgress: 0.65 },  // Projects
//     { x: 230, y: 44, rotate: -17, curveProgress: 0.9 },  // Contact
//   ];

//   // Handle navigation click
//   const handleNavClick = (index) => {
//     setActiveIndex(index);
//   };

//   // Animate background sliding along curve
//   useEffect(() => {
//     setAnimatingIndex(activeIndex);
//   }, [activeIndex]);

//   // Calculate position along curve for smooth animation
//   const getAnimatedPosition = () => {
//     const startPos = navPositions[animatingIndex] || navPositions[0];

//     // Create intermediate positions for curved animation
//     const curveKeyframes = [];
//     const steps = 20;

//     for (let i = 0; i <= steps; i++) {
//       const t = i / steps;
//       const progress = startPos.curveProgress;

//       // Curve formula: M 10 60 Q 200 120 350 60 (main navigation curve)
//       const startX = 10, startY = 60;
//       const controlX = 200, controlY = 120;
//       const endX = 350, endY = 60;

//       const x = (1 - progress) * (1 - progress) * startX +
//         2 * (1 - progress) * progress * controlX +
//         progress * progress * endX;
//       const y = (1 - progress) * (1 - progress) * startY +
//         2 * (1 - progress) * progress * controlY +
//         progress * progress * endY;

//       curveKeyframes.push({ x: x - 70, y: y - 10 }); // Adjust for SVG positioning
//     }

//     return startPos;
//   };

//   // Decorative lines data for cleaner code
//   const decorativeLines = [
//     // Left section - Cool blues and teals
//     { x: 10, y1: 80, y2: 20, color: "#778da9", width: 2, opacity: 0.7 },
//     { x: 25, y1: 80, y2: 24, color: "#b6ad90", width: 1.5, opacity: 0.5 },
//     { x: 40, y1: 80, y2: 28, color: "#10b981", width: 1.5, opacity: 0.5 },
//     { x: 55, y1: 80, y2: 30, color: "#f59e0b", width: 2, opacity: 0.7 },
//     { x: 70, y1: 80, y2: 34, color: "#ef4444", width: 1.5, opacity: 0.5 },

//     // Center section - Warm oranges and yellows
//     { x: 85, y1: 82, y2: 36, color: "#ff9f1c", width: 2, opacity: 0.8 },
//     { x: 100, y1: 80, y2: 40, color: "#ff9f1c", width: 2, opacity: 0.8 },
//     { x: 120, y1: 80, y2: 44, color: "#ffb703", width: 1.5, opacity: 0.6 },
//     { x: 140, y1: 80, y2: 46, color: "#fb8500", width: 2, opacity: 0.8 },
//     { x: 160, y1: 80, y2: 49, color: "#8ecae6", width: 1.5, opacity: 0.6 },
//     { x: 180, y1: 80, y2: 50, color: "#219ebc", width: 2, opacity: 0.8 },
//     { x: 200, y1: 80, y2: 50, color: "#023047", width: 1.5, opacity: 0.6 },

//     // Right section - Deep blues and purples
//     { x: 220, y1: 80, y2: 49, color: "#7209b7", width: 2, opacity: 0.8 },
//     { x: 240, y1: 80, y2: 47, color: "#560bad", width: 1.5, opacity: 0.6 },
//     { x: 260, y1: 80, y2: 44, color: "#480ca8", width: 2, opacity: 0.8 },
//     { x: 280, y1: 80, y2: 40, color: "#3a0ca3", width: 1.5, opacity: 0.6 },
//     { x: 300, y1: 80, y2: 36, color: "#3f37c9", width: 2, opacity: 0.8 },
//     { x: 320, y1: 80, y2: 30, color: "#4361ee", width: 1.5, opacity: 0.6 },
//     { x: 340, y1: 80, y2: 22, color: "#4895ef", width: 2, opacity: 0.8 },
//   ];

//   return (
//     <>
//       {/* Loading Bar at the top */}
//       <LoadingBar isVisible={isLoading} text={loadingText} />

//       <header style={headerStyles}>
//         {/* User Profile Section */}
//         <div style={profileContainerStyles}>
//           <div style={avatarContainerStyles}>
//             <img
//               src="https://lh3.googleusercontent.com/a/ACg8ocJ67B59yYvEz6tl4pnD8FH_uHB6Mp3oETyamw9O9xpajU2ixeA=s96-c"
//               alt="Avatar"
//               style={avatarImageStyles}
//             />
//           </div>

//           <div style={userInfoStyles}>
//             <h2 style={userNameStyles}>AI | Code | Yar</h2>
//             <p style={userTaglineStyles}>Future proof Learning</p>
//           </div>

//           {/* Enhanced: Animated accent bar */}
//           <div style={accentBarStyles}></div>
//         </div>

//         {/* Navigation Section */}
//         <div style={navigationContainerStyles}>
//           {/* Main curve line */}
//           <svg width="410" height="120" viewBox="0 0 400 120" style={svgStyles}>
//             <path
//               d="M 10 60 Q 200 120 350 60"
//               fill="none"
//               stroke="#f2932c"
//               strokeWidth={2}
//               strokeLinecap="round"
//             />
//           </svg>

//           {/* Bottom curve line */}
//           <svg width="400" height="120" viewBox="0 0 400 120" style={svgStyles}>
//             <path
//               d="M 4 10 Q 200 90 350 10"
//               fill="none"
//               stroke="#f2932c"
//               strokeWidth={2}
//               strokeLinecap="round"
//             />
//           </svg>

//           {/* Top decorative curve with enhanced lines */}
//           <svg width="400" height="120" viewBox="0 0 400 120" style={topSvgStyles}>
//             <path
//               d="M 4 15 Q 200 80 350 15"
//               fill="none"
//               stroke="#ff9f1c"
//               strokeWidth={2.5}
//               strokeLinecap="round"
//               filter="url(#glow)"
//             />

//             {/* Enhanced: Add glow effect filter */}
//             <defs>
//               <filter id="glow">
//                 <feGaussianBlur stdDeviation="1" result="coloredBlur" />
//                 <feMerge>
//                   <feMergeNode in="coloredBlur" />
//                   <feMergeNode in="SourceGraphic" />
//                 </feMerge>
//               </filter>
//             </defs>

//             {/* Beautiful decorative lines with gradient colors */}
//             {decorativeLines.map((line, index) => (
//               <line
//                 key={index}
//                 x1={line.x}
//                 y1={line.y1}
//                 x2={line.x}
//                 y2={line.y2}
//                 stroke={line.color}
//                 strokeWidth={line.width}
//                 opacity={line.opacity}
//                 strokeLinecap="round"
//               />
//             ))}
//           </svg>

//           {/* Enhanced: Curved path animation background */}
//           <div style={{
//             ...getSliderStyles(getAnimatedPosition()),
//             background: `linear-gradient(135deg, #f2932c 0%, #ff6b35 50%, #f77737 100%)`,
//             boxShadow: `
//             0 4px 15px rgba(242, 147, 44, 0.4),
//             0 2px 8px rgba(242, 147, 44, 0.2),
//             inset 0 1px 0 rgba(255, 255, 255, 0.2)
//           `,
//           }} />

//           {/* Navigation Items */}
//           {navItems.map((item, index) => {
//             const pos = navPositions[index];
//             const isActive = activeIndex === index;

//             return (
//               <Link
//                 to={item === "Home" ? "/" : `/${item}`}
//                 isActive={item === "Home" ? "/" : `/${item}`}
//               >
//                 <span
//                   key={item}
//                   onClick={() => handleNavClick(index)}
//                   style={getNavItemStyles(pos, isActive)}
//                   onMouseEnter={(e) => handleMouseEnter(e, pos, isActive)}
//                   onMouseLeave={(e) => handleMouseLeave(e, pos, isActive)}
//                 >
//                   {item}
//                 </span>
//               </Link>
//             );
//           })}
//         </div>
//       </header>
//     </>
//   );
// };

// // Loading Bar Styles
// const loadingBarContainerStyles = {
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   right: 0,
//   zIndex: 9999,
//   // backgroundColor: 'rgba(255, 255, 255, 0.95)',
//   backgroundColor: 'transparent',
//   // backdropFilter: 'blur(10px)',
//   // borderBottom: '1px solid rgba(242, 147, 44, 0.2)',
//   // padding: '4px 0',
// };

// const loadingBarBackgroundStyles = {
//   position: 'relative',
//   height: 4,
//   // backgroundColor: 'rgba(242, 147, 44, 0.1)',
//   backgroundColor: 'transparent',
//   borderRadius: 2,
//   overflow: 'hidden',
//   // margin: '0 20px 8px',
//   // margin: '0',
// };

// const loadingBarFillStyles = {
//   height: '100%',
//   background: 'linear-gradient(90deg, #f2932c 0%, #ff6b35 50%, #f77737 100%)',
//   borderRadius: 2,
//   transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//   position: 'relative',
//   boxShadow: '0 0 10px rgba(242, 147, 44, 0.5)',
// };

// const loadingBarGlowStyles = {
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
//   animation: 'shimmer 2s infinite',
// };

// const loadingTextContainerStyles = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   gap: 4,
// };

// const loadingTextStyles = {
//   fontSize: 12,
//   color: '#666',
//   fontWeight: 500,
//   fontFamily: "'Inter', Arial, sans-serif",
// };

// const loadingDotsStyles = {
//   display: 'flex',
//   gap: 2,
// };

// const dotStyles = {
//   animation: 'bounce 1.4s infinite both',
//   fontSize: 12,
//   color: '#f2932c',
//   fontWeight: 'bold',
// };

// // Add CSS animations via style tag
// const styleSheet = document.createElement('style');
// styleSheet.textContent = `
//   @keyframes shimmer {
//     0% { transform: translateX(-100%); }
//     100% { transform: translateX(100%); }
//   }

//   @keyframes bounce {
//     0%, 80%, 100% { transform: scale(0); opacity: 0.5; }
//     40% { transform: scale(1); opacity: 1; }
//   }

//   ${loadingDotsStyles.children}:nth-child(1) { animation-delay: -0.32s; }
//   ${loadingDotsStyles.children}:nth-child(2) { animation-delay: -0.16s; }
// `;
// document.head.appendChild(styleSheet);

// // Enhanced: Organized styles for better readability
// const headerStyles = {
//   borderRadius: 16,
//   maxWidth: 1400,
//   margin: "5px auto",
//   padding: "20px 40px",
//   display: "flex",
//   alignItems: "dcenter",
//   justifyContent: "space-between",
//   background: "linear-gradient(135deg, #ffffff 0%, #fefefe 100%)",
//   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(242, 147, 44, 0.1)",
//   minHeight: 120,
//   backdropFilter: "blur(10px)",
// };

// const profileContainerStyles = {
//   display: "flex",
//   alignItems: "center",
//   gap: 16,
//   position: "relative",
// };

// const avatarContainerStyles = {
//   width: 60,
//   height: 60,
//   borderRadius: "50%",
//   overflow: "hidden",
//   border: "3px solid #fabf01",
//   flexShrink: 0,
//   position: "relative",
//   transition: "transform 0.3s ease",
// };

// const avatarImageStyles = {
//   width: "100%",
//   height: "100%",
//   objectFit: "cover",
//   transition: "rounded transform 0.3s ease",
// };

// const userInfoStyles = {
//   display: "flex",
//   flexDirection: "column",
//   gap: 2,
// };

// const userNameStyles = {
//   margin: 0,
//   fontWeight: 700,
//   fontSize: 20,
//   color: "#333",
//   fontFamily: "'Inter', Arial, sans-serif",
// };

// const userTaglineStyles = {
//   margin: 0,
//   fontSize: 14,
//   color: "#666",
//   fontWeight: 500,
//   fontFamily: "'Inter', Arial, sans-serif",
// };

// const accentBarStyles = {
//   width: 2,
//   height: 80,
//   background: "linear-gradient(180deg, #f2932c 0%, #ff6b35 100%)",
//   borderRadius: 4,
//   marginLeft: 12,
//   boxShadow: "0 2px 8px rgba(242, 147, 44, 0.3)",
// };

// const navigationContainerStyles = {
//   position: "relative",
//   width: 400,
//   height: 120,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// };

// const svgStyles = {
//   position: "absolute",
//   bottom: 10,
//   right: 70,
// };

// const topSvgStyles = {
//   position: "absolute",
//   top: 60,
//   right: 70,
// };

// const getSliderStyles = (activePos) => ({
//   position: "absolute",
//   left: activePos.x,
//   top: activePos.y,
//   transform: `translate(-50%, -50%) rotate(${activePos.rotate}deg)`,
//   width: "80px",
//   height: "36px",
//   borderRadius: "20px",
//   transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
//   zIndex: 1,
//   opacity: 1,
// });

// const getNavItemStyles = (pos, isActive) => ({
//   position: "absolute",
//   left: pos.x,
//   top: pos.y,
//   transform: `translate(-50%, -50%) rotate(${pos.rotate}deg)`,
//   color: isActive ? "#fff" : "#f2932c",
//   fontWeight: "600",
//   fontSize: isActive ? "17px" : "16px",
//   fontFamily: "'Inter', Arial, sans-serif",
//   cursor: "pointer",
//   userSelect: "none",
//   transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//   padding: "8px 12px",
//   borderRadius: "20px",
//   zIndex: isActive ? 10 : 5,
//   transformOrigin: "center",
//   textShadow: isActive ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
//   letterSpacing: "0.5px",
// });

// const handleMouseEnter = (e, pos, isActive) => {
//   if (!isActive) {
//     e.currentTarget.style.color = "#d77105";
//     e.currentTarget.style.fontSize = "17px";
//     e.currentTarget.style.backgroundColor = "rgba(242, 147, 44, 0.1)";
//     e.currentTarget.style.transform = `translate(-50%, -50%) rotate(${pos.rotate}deg) scale(1.08)`;
//     e.currentTarget.style.boxShadow = "0 4px 12px rgba(242, 147, 44, 0.2)";
//   }
// };

// const handleMouseLeave = (e, pos, isActive) => {
//   if (!isActive) {
//     e.currentTarget.style.color = "#f2932c";
//     e.currentTarget.style.fontSize = "16px";
//     e.currentTarget.style.backgroundColor = "transparent";
//     e.currentTarget.style.transform = `translate(-50%, -50%) rotate(${pos.rotate}deg) scale(1)`;
//     e.currentTarget.style.boxShadow = "none";
//   }
// };

// export default Header;






































// import React, { useState, useEffect, createContext, useContext } from "react";
// import { Link, useLocation } from "react-router-dom";

// // Loading Context for global loading state management
// const LoadingContext = createContext();

// // Custom hook to use loading context
// export const useLoading = () => {
//   const context = useContext(LoadingContext);
//   if (!context) {
//     throw new Error('useLoading must be used within a LoadingProvider');
//   }
//   return context;
// };

// // Loading Provider component
// export const LoadingProvider = ({ children }) => {
//   const [isLoading, setIsLoading] = useState(false);

//   const startLoading = (text = '...') => {
//     setIsLoading(true);
//   };

//   const stopLoading = () => {
//     setIsLoading(false);
//   };

//   return (
//     <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
//       {children}
//     </LoadingContext.Provider>
//   );
// };

// // Professional Loading Bar Component
// const LoadingBar = ({ isVisible }) => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     if (isVisible) {
//       setProgress(0);
//       const interval = setInterval(() => {
//         setProgress(prev => {
//           if (prev >= 100) {
//             clearInterval(interval);
//             return 100;
//           }
//           const increment = Math.random() * 15 + 5;
//           return Math.min(prev + increment, 95);
//         });
//       }, 200);

//       return () => clearInterval(interval);
//     } else {
//       setProgress(100);
//       setTimeout(() => setProgress(0), 300);
//     }
//   }, [isVisible]);

//   if (!isVisible && progress === 0) return null;

//   return (
//     <div style={loadingBarContainerStyles}>
//       <div style={loadingBarBackgroundStyles}>
//         <div
//           style={{
//             ...loadingBarFillStyles,
//             width: `${progress}%`,
//           }}
//         />
//         <div style={loadingBarGlowStyles} />
//       </div>
//       <div style={loadingTextContainerStyles}>
//         <div style={loadingDotsStyles}>
//           <span style={dotStyles}>.</span>
//           <span style={dotStyles}>.</span>
//           <span style={dotStyles}>.</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Mobile Navigation Menu Component
// const MobileNavMenu = ({ isOpen, onClose, navItems, activeIndex, handleNavClick }) => {
//   const location = useLocation();

//   if (!isOpen) return null;

//   return (
//     <>
//       {/* Backdrop */}
//       <div style={mobileBackdropStyles} onClick={onClose} />

//       {/* Mobile Menu Card */}
//       <div style={mobileMenuStyles}>
//         <div style={mobileMenuHeaderStyles}>
//           <h3 style={mobileMenuTitleStyles}>Navigation</h3>
//           <button style={mobileCloseButtonStyles} onClick={onClose}>
//             ✕
//           </button>
//         </div>

//         <div style={mobileMenuItemsStyles}>
//           {navItems.map((item, index) => {
//             const isActive = activeIndex === index;
//             const linkPath = item === "Home" ? "/" : `/${item}`;

//             return (
//               <Link
//                 key={item}
//                 to={linkPath}
//                 style={mobileLinkStyles}
//                 onClick={() => {
//                   handleNavClick(index);
//                   onClose();
//                 }}
//               >
//                 <div style={getMobileNavItemStyles(isActive)}>
//                   <span style={mobileNavTextStyles}>{item}</span>
//                   {isActive && <div style={mobileActiveIndicatorStyles} />}
//                 </div>
//               </Link>
//             );
//           })}
//         </div>

//         {/* Decorative element */}
//         <div style={mobileMenuDecorStyles}>
//           <div style={mobileDecorLineStyles} />
//         </div>
//       </div>
//     </>
//   );
// };

// const Header = () => {
//   const navItems = ["Home", "About", "Projects", "Contact"];
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animatingIndex, setAnimatingIndex] = useState(0);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const location = useLocation();
//   const { isLoading } = useLoading();

//   // Check if screen is mobile
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);

//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);

//   // Navigation item positions along the curve
//   const navPositions = [
//     { x: -30, y: 34, rotate: 18, curveProgress: 0.1 },
//     { x: 48, y: 54, rotate: 8, curveProgress: 0.35 },
//     { x: 142, y: 60, rotate: -3, curveProgress: 0.65 },
//     { x: 230, y: 44, rotate: -17, curveProgress: 0.9 },
//   ];

//   // Set active index based on current route
//   useEffect(() => {
//     const currentPath = location.pathname;
//     let newActiveIndex = 0;

//     if (currentPath === "/" || currentPath === "/Home") {
//       newActiveIndex = 0;
//     } else if (currentPath === "/About") {
//       newActiveIndex = 1;
//     } else if (currentPath === "/Projects") {
//       newActiveIndex = 2;
//     } else if (currentPath === "/Contact") {
//       newActiveIndex = 3;
//     }

//     setActiveIndex(newActiveIndex);
//   }, [location.pathname]);

//   const handleNavClick = (index) => {
//     setActiveIndex(index);
//   };

//   useEffect(() => {
//     setAnimatingIndex(activeIndex);
//   }, [activeIndex]);

//   const getAnimatedPosition = () => {
//     const startPos = navPositions[animatingIndex] || navPositions[0];
//     return startPos;
//   };

//   // Decorative lines data
//   const decorativeLines = [
//     { x: 10, y1: 80, y2: 20, color: "#778da9", width: 2, opacity: 0.7 },
//     { x: 25, y1: 80, y2: 24, color: "#b6ad90", width: 1.5, opacity: 0.5 },
//     { x: 40, y1: 80, y2: 28, color: "#10b981", width: 1.5, opacity: 0.5 },
//     { x: 55, y1: 80, y2: 30, color: "#f59e0b", width: 2, opacity: 0.7 },
//     { x: 70, y1: 80, y2: 34, color: "#ef4444", width: 1.5, opacity: 0.5 },
//     { x: 85, y1: 82, y2: 36, color: "#ff9f1c", width: 2, opacity: 0.8 },
//     { x: 100, y1: 80, y2: 40, color: "#ff9f1c", width: 2, opacity: 0.8 },
//     { x: 120, y1: 80, y2: 44, color: "#ffb703", width: 1.5, opacity: 0.6 },
//     { x: 140, y1: 80, y2: 46, color: "#fb8500", width: 2, opacity: 0.8 },
//     { x: 160, y1: 80, y2: 49, color: "#8ecae6", width: 1.5, opacity: 0.6 },
//     { x: 180, y1: 80, y2: 50, color: "#219ebc", width: 2, opacity: 0.8 },
//     { x: 200, y1: 80, y2: 50, color: "#023047", width: 1.5, opacity: 0.6 },
//     { x: 220, y1: 80, y2: 49, color: "#7209b7", width: 2, opacity: 0.8 },
//     { x: 240, y1: 80, y2: 47, color: "#560bad", width: 1.5, opacity: 0.6 },
//     { x: 260, y1: 80, y2: 44, color: "#480ca8", width: 2, opacity: 0.8 },
//     { x: 280, y1: 80, y2: 40, color: "#3a0ca3", width: 1.5, opacity: 0.6 },
//     { x: 300, y1: 80, y2: 36, color: "#3f37c9", width: 2, opacity: 0.8 },
//     { x: 320, y1: 80, y2: 30, color: "#4361ee", width: 1.5, opacity: 0.6 },
//     { x: 340, y1: 80, y2: 22, color: "#4895ef", width: 2, opacity: 0.8 },
//   ];

//   return (
//     <>
//       <LoadingBar isVisible={isLoading} />

//       <header style={getHeaderStyles(isMobile)}>
//         {/* User Profile Section */}
//         <div style={profileContainerStyles}>
//           <div style={avatarContainerStyles}>
//             <img
//               src="https://lh3.googleusercontent.com/a/ACg8ocJ67B59yYvEz6tl4pnD8FH_uHB6Mp3oETyamw9O9xpajU2ixeA=s96-c"
//               alt="Avatar"
//               style={avatarImageStyles}
//             />
//           </div>

//           <div style={userInfoStyles}>
//             <h2 style={getUserNameStyles(isMobile)}>AI | Code | Yar</h2>
//             <p style={getUserTaglineStyles(isMobile)}>Future proof Learning</p>
//           </div>

//           <div style={accentBarStyles}></div>
//         </div>

//         {/* Spacer for desktop */}
//         {!isMobile && <div style={spacerStyles}></div>}

//         {/* Desktop Navigation or Mobile Hamburger */}
//         {isMobile ? (
//           <button 
//             style={hamburgerButtonStyles}
//             onClick={() => setIsMobileMenuOpen(true)}
//           >
//             <div style={hamburgerLineStyles}></div>
//             <div style={hamburgerLineStyles}></div>
//             <div style={hamburgerLineStyles}></div>
//           </button>
//         ) : (
//           <div style={navigationContainerStyles}>
//             {/* Desktop SVG Navigation */}
//             <svg width="410" height="120" viewBox="0 0 400 120" style={svgStyles}>
//               <path
//                 d="M 10 60 Q 200 120 350 60"
//                 fill="none"
//                 stroke="#f2932c"
//                 strokeWidth={2}
//                 strokeLinecap="round"
//               />
//             </svg>

//             <svg width="400" height="120" viewBox="0 0 400 120" style={svgStyles}>
//               <path
//                 d="M 4 10 Q 200 90 350 10"
//                 fill="none"
//                 stroke="#f2932c"
//                 strokeWidth={2}
//                 strokeLinecap="round"
//               />
//             </svg>

//             <svg width="400" height="120" viewBox="0 0 400 120" style={topSvgStyles}>
//               <path
//                 d="M 4 15 Q 200 80 350 15"
//                 fill="none"
//                 stroke="#ff9f1c"
//                 strokeWidth={2.5}
//                 strokeLinecap="round"
//                 filter="url(#glow)"
//               />

//               <defs>
//                 <filter id="glow">
//                   <feGaussianBlur stdDeviation="1" result="coloredBlur" />
//                   <feMerge>
//                     <feMergeNode in="coloredBlur" />
//                     <feMergeNode in="SourceGraphic" />
//                   </feMerge>
//                 </filter>
//               </defs>

//               {decorativeLines.map((line, index) => (
//                 <line
//                   key={index}
//                   x1={line.x}
//                   y1={line.y1}
//                   x2={line.x}
//                   y2={line.y2}
//                   stroke={line.color}
//                   strokeWidth={line.width}
//                   opacity={line.opacity}
//                   strokeLinecap="round"
//                 />
//               ))}
//             </svg>

//             <div style={{
//               ...getSliderStyles(getAnimatedPosition()),
//               background: `linear-gradient(135deg, #f2932c 0%, #ff6b35 50%, #f77737 100%)`,
//               boxShadow: `
//                 0 4px 15px rgba(242, 147, 44, 0.4),
//                 0 2px 8px rgba(242, 147, 44, 0.2),
//                 inset 0 1px 0 rgba(255, 255, 255, 0.2)
//               `,
//             }} />

//             {navItems.map((item, index) => {
//               const pos = navPositions[index];
//               const isActive = activeIndex === index;
//               const linkPath = item === "Home" ? "/" : `/${item}`;

//               return (
//                 <Link
//                   key={item}
//                   to={linkPath}
//                   style={linkStyles}
//                   onClick={() => handleNavClick(index)}
//                 >
//                   <span
//                     style={getNavItemStyles(pos, isActive)}
//                     onMouseEnter={(e) => handleMouseEnter(e, pos, isActive)}
//                     onMouseLeave={(e) => handleMouseLeave(e, pos, isActive)}
//                   >
//                     {item}
//                   </span>
//                 </Link>
//               );
//             })}
//           </div>
//         )}
//       </header>

//       {/* Mobile Navigation Menu */}
//       <MobileNavMenu
//         isOpen={isMobileMenuOpen}
//         onClose={() => setIsMobileMenuOpen(false)}
//         navItems={navItems}
//         activeIndex={activeIndex}
//         handleNavClick={handleNavClick}
//       />
//     </>
//   );
// };

// // Styles
// const loadingBarContainerStyles = {
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   right: 0,
//   zIndex: 9999,
//   backgroundColor: 'transparent',
// };

// const loadingBarBackgroundStyles = {
//   position: 'relative',
//   height: 4,
//   backgroundColor: 'transparent',
//   borderRadius: 2,
//   overflow: 'hidden',
// };

// const loadingBarFillStyles = {
//   height: '100%',
//   background: 'linear-gradient(90deg, #f2932c 0%, #ff6b35 50%, #f77737 100%)',
//   borderRadius: 2,
//   transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//   position: 'relative',
//   boxShadow: '0 0 10px rgba(242, 147, 44, 0.5)',
// };

// const loadingBarGlowStyles = {
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
//   animation: 'shimmer 2s infinite',
// };

// const loadingTextContainerStyles = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   gap: 4,
// };

// const loadingDotsStyles = {
//   display: 'flex',
//   gap: 2,
// };

// const dotStyles = {
//   animation: 'bounce 1.4s infinite both',
//   fontSize: 12,
//   color: '#f2932c',
//   fontWeight: 'bold',
// };

// // Mobile Menu Styles
// const mobileBackdropStyles = {
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   zIndex: 9998,
//   backdropFilter: 'blur(4px)',
// };

// const mobileMenuStyles = {
//   position: 'fixed',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   backgroundColor: '#ffffff',
//   borderRadius: 20,
//   padding: 24,
//   boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(242, 147, 44, 0.1)',
//   zIndex: 9999,
//   minWidth: 280,
//   maxWidth: 320,
//   animation: 'slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
// };

// const mobileMenuHeaderStyles = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   marginBottom: 20,
//   borderBottom: '2px solid #f2932c',
//   paddingBottom: 12,
// };

// const mobileMenuTitleStyles = {
//   margin: 0,
//   fontSize: 18,
//   fontWeight: 700,
//   color: '#333',
//   fontFamily: "'Inter', Arial, sans-serif",
// };

// const mobileCloseButtonStyles = {
//   background: 'none',
//   border: 'none',
//   fontSize: 20,
//   color: '#666',
//   cursor: 'pointer',
//   padding: 4,
//   borderRadius: 50,
//   width: 32,
//   height: 32,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   transition: 'all 0.2s ease',
// };

// const mobileMenuItemsStyles = {
//   display: 'flex',
//   flexDirection: 'column',
//   gap: 8,
// };

// const mobileLinkStyles = {
//   textDecoration: 'none',
//   color: 'inherit',
// };

// const getMobileNavItemStyles = (isActive) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   padding: '12px 16px',
//   borderRadius: 12,
//   backgroundColor: isActive ? '#f2932c' : 'transparent',
//   transition: 'all 0.3s ease',
//   cursor: 'pointer',
//   border: isActive ? 'none' : '1px solid rgba(242, 147, 44, 0.2)',
// });

// const mobileNavTextStyles = {
//   fontSize: 16,
//   fontWeight: 600,
//   fontFamily: "'Inter', Arial, sans-serif",
//   color: 'inherit',
// };

// const mobileActiveIndicatorStyles = {
//   width: 8,
//   height: 8,
//   borderRadius: '50%',
//   backgroundColor: '#ffffff',
//   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
// };

// const mobileMenuDecorStyles = {
//   marginTop: 20,
//   paddingTop: 16,
//   borderTop: '1px solid rgba(242, 147, 44, 0.2)',
// };

// const mobileDecorLineStyles = {
//   height: 3,
//   background: 'linear-gradient(90deg, #f2932c 0%, #ff6b35 50%, #f77737 100%)',
//   borderRadius: 2,
//   width: '60%',
//   margin: '0 auto',
// };

// // Hamburger Button Styles
// const hamburgerButtonStyles = {
//   background: 'none',
//   border: 'none',
//   cursor: 'pointer',
//   padding: 8,
//   display: 'flex',
//   flexDirection: 'column',
//   gap: 4,
//   borderRadius: 8,
//   transition: 'all 0.3s ease',
// };

// const hamburgerLineStyles = {
//   width: 24,
//   height: 3,
//   backgroundColor: '#f2932c',
//   borderRadius: 2,
//   transition: 'all 0.3s ease',
// };

// // Responsive Header Styles
// const getHeaderStyles = (isMobile) => ({
//   borderRadius: 16,
//   maxWidth: isMobile ? '100%' : 1400,
//   margin: isMobile ? "5px 10px" : "5px auto",
//   padding: isMobile ? "15px 20px" : "20px 40px",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
//   background: "linear-gradient(135deg, #ffffff 0%, #fefefe 100%)",
//   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(242, 147, 44, 0.1)",
//   minHeight: isMobile ? 80 : 120,
//   backdropFilter: "blur(10px)",
// });

// const profileContainerStyles = {
//   display: "flex",
//   alignItems: "center",
//   gap: 16,
//   position: "relative",
//   flex: "0 0 auto",
// };

// const spacerStyles = {
//   flex: "1 1 auto",
//   minWidth: 100,
// };

// const avatarContainerStyles = {
//   width: 60,
//   height: 60,
//   borderRadius: "50%",
//   overflow: "hidden",
//   border: "3px solid #fabf01",
//   flexShrink: 0,
//   position: "relative",
//   transition: "transform 0.3s ease",
// };

// const avatarImageStyles = {
//   width: "100%",
//   height: "100%",
//   objectFit: "cover",
//   transition: "transform 0.3s ease",
// };

// const userInfoStyles = {
//   display: "flex",
//   flexDirection: "column",
//   gap: 2,
// };

// const getUserNameStyles = (isMobile) => ({
//   margin: 0,
//   fontWeight: 700,
//   fontSize: isMobile ? 16 : 20,
//   color: "#333",
//   fontFamily: "'Inter', Arial, sans-serif",
// });

// const getUserTaglineStyles = (isMobile) => ({
//   margin: 0,
//   fontSize: isMobile ? 12 : 14,
//   color: "#666",
//   fontWeight: 500,
//   fontFamily: "'Inter', Arial, sans-serif",
// });

// const accentBarStyles = {
//   width: 2,
//   height: 80,
//   background: "linear-gradient(180deg, #f2932c 0%, #ff6b35 100%)",
//   borderRadius: 4,
//   marginLeft: 12,
//   boxShadow: "0 2px 8px rgba(242, 147, 44, 0.3)",
// };

// const navigationContainerStyles = {
//   position: "relative",
//   width: 400,
//   height: 120,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   flex: "0 0 auto",
// };

// const svgStyles = {
//   position: "absolute",
//   bottom: 10,
//   right: 70,
// };

// const topSvgStyles = {
//   position: "absolute",
//   top: 60,
//   right: 70,
// };

// const linkStyles = {
//   textDecoration: 'none',
//   color: 'inherit',
// };

// const getSliderStyles = (activePos) => ({
//   position: "absolute",
//   left: activePos.x,
//   top: activePos.y,
//   transform: `translate(-50%, -50%) rotate(${activePos.rotate}deg)`,
//   width: "80px",
//   height: "36px",
//   borderRadius: "20px",
//   transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
//   zIndex: 1,
//   opacity: 1,
// });

// const getNavItemStyles = (pos, isActive) => ({
//   position: "absolute",
//   left: pos.x,
//   top: pos.y,
//   transform: `translate(-50%, -50%) rotate(${pos.rotate}deg)`,
//   color: isActive ? "#fff" : "#f2932c",
//   fontWeight: "600",
//   fontSize: isActive ? "17px" : "16px",
//   fontFamily: "'Inter', Arial, sans-serif",
//   cursor: "pointer",
//   userSelect: "none",
//   transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//   padding: "8px 12px",
//   borderRadius: "20px",
//   zIndex: isActive ? 10 : 5,
//   transformOrigin: "center",
//   textShadow: isActive ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
//   letterSpacing: "0.5px",
// });

// const handleMouseEnter = (e, pos, isActive) => {
//   if (!isActive) {
//     e.currentTarget.style.color = "#d77105";
//     e.currentTarget.style.fontSize = "17px";
//     e.currentTarget.style.backgroundColor = "rgba(242, 147, 44, 0.1)";
//     e.currentTarget.style.transform = `translate(-50%, -50%) rotate(${pos.rotate}deg) scale(1.08)`;
//     e.currentTarget.style.boxShadow = "0 4px 12px rgba(242, 147, 44, 0.2)";
//   }
// };

// const handleMouseLeave = (e, pos, isActive) => {
//   if (!isActive) {
//     e.currentTarget.style.color = "#f2932c";
//     e.currentTarget.style.fontSize = "16px";
//     e.currentTarget.style.backgroundColor = "transparent";
//     e.currentTarget.style.transform = `translate(-50%, -50%) rotate(${pos.rotate}deg) scale(1)`;
//     e.currentTarget.style.boxShadow = "none";
//   }
// };

// // Add CSS animations
// const styleSheet = document.createElement('style');
// styleSheet.textContent = `
//   @keyframes shimmer {
//     0% { transform: translateX(-100%); }
//     100% { transform: translateX(100%); }
//   }

//   @keyframes bounce {
//     0%, 80%, 100% { transform: scale(0); opacity: 0.5; }
//     40% { transform: scale(1); opacity: 1; }
//   }

//   @keyframes slideIn {
//     from {
//       opacity: 0;
//       transform: translate(-50%, -50%) scale(0.8);
//     }
//     to {
//       opacity: 1;
//       transform: translate(-50%, -50%) scale(1);
//     }
//   }

//   @media (max-width: 768px) {
//     .hamburger-button:hover .hamburger-line:nth-child(1) {
//       transform: translateY(-1px);
//     }
//     .hamburger-button:hover .hamburger-line:nth-child(3) {
//       transform: translateY(1px);
//     }
//   }
// `;
// document.head.appendChild(styleSheet);

// export default Header;







































































































import React, { useState, useEffect, createContext, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserDataContext } from '../../stores/userContext';
import { useTheme } from "../../stores/useTheme"; // adjust path


// Loading Context for global loading state management
const LoadingContext = createContext();

// Custom hook to use loading context
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

// Loading Provider component
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = (text = '...') => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Utility function to check if screen is mobile
const getIsMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768;
};

// Professional Loading Bar Component
const LoadingBar = ({ isVisible }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          const increment = Math.random() * 15 + 5;
          return Math.min(prev + increment, 95);
        });
      }, 200);

      return () => clearInterval(interval);
    } else {
      setProgress(100);
      setTimeout(() => setProgress(0), 300);
    }
  }, [isVisible]);


  if (!isVisible && progress === 0) return null;



  return (
    <div style={loadingBarContainerStyles}>
      <div style={loadingBarBackgroundStyles}>
        <div
          style={{
            ...loadingBarFillStyles,
            width: `${progress}%`,
          }}
        />
        <div style={loadingBarGlowStyles} />
      </div>
      <div style={loadingTextContainerStyles}>
        <div style={loadingDotsStyles}>
          <span style={dotStyles}>.</span>
          <span style={dotStyles}>.</span>
          <span style={dotStyles}>.</span>
        </div>
      </div>
    </div>
  );
};

// Mobile Navigation Menu Component
const MobileNavMenu = ({ isOpen, onClose, navItems, activeIndex, handleNavClick }) => {
  // navItems.push("Login")
  const location = useLocation();

  const { user, setUser } = useContext(UserDataContext)

  if (!isOpen) return null;
  const isLoggedIn = localStorage.getItem("token")
  return (
    <>
      {/* Backdrop */}
      <div style={mobileBackdropStyles} onClick={onClose} />

      {/* Mobile Menu Card */}
      <div style={mobileMenuStyles}>
        <div style={mobileMenuHeaderStyles}>
          <h3 style={mobileMenuTitleStyles}>Navigation</h3>
          <button style={mobileCloseButtonStyles} onClick={onClose}>
            ✕
          </button>
        </div>
        <div style={mobileMenuItemsStyles}>
          {
            navItems.map((item, index) => {
              const isActive = activeIndex === index;
              const linkPath = item === "Home" ? "/" : `/${item.toLocaleLowerCase()}`;


              return (
                <>
                  < Link
                    key={item}
                    to={linkPath}
                    style={mobileLinkStyles}
                    onClick={() => {
                      handleNavClick(index);
                      onClose();
                    }}
                  >
                    <div style={getMobileNavItemStyles(isActive)}>
                      <span style={mobileNavTextStyles}>{item}</span>
                      {isActive && <div style={mobileActiveIndicatorStyles} />}
                    </div>
                  </Link>
                </>
              );
            })}

          <Link
            key={"signup"}
            to={"/signup"}
            style={mobileLinkStyles}
            onClick={() => {
              onClose();
            }}
          >
            <div style={getMobileNavItemStyles()}>
              <span style={mobileNavTextStyles}>Signup</span>
              {/* {isActive && <div style={mobileActiveIndicatorStyles} />} */}

            </div>
          </Link>


          {isLoggedIn ?
            <Link
              key={"profile"}
              to={"/profile"}
              style={mobileLinkStyles}
              onClick={() => {
                onClose();
              }}
            >
              <div style={getMobileNavItemStyles()}>
                <span style={mobileNavTextStyles}>Profile</span>
                {/* {isActive && <div style={mobileActiveIndicatorStyles} />} */}

              </div>
            </Link>

            :

            <Link
              key={"login"}
              to={"/login"}
              style={mobileLinkStyles}
              onClick={() => {
                // handleNavClick(index);
                onClose();
              }}
            >
              <div style={getMobileNavItemStyles()}>
                <span style={mobileNavTextStyles}>Login</span>
                {/* {isActive && <div style={mobileActiveIndicatorStyles} />} */}

              </div>
            </Link>
          }

        </div >

        {/* Decorative element */}
        < div style={mobileMenuDecorStyles} >
          <div style={mobileDecorLineStyles} />
        </div >
      </div >
    </>
  );

};

const Header = () => {
  const { theme } = useTheme()
  const navItems = ["Home", "About", "Projects", "Contact"];
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatingIndex, setAnimatingIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // FIXED: Initialize with actual mobile state instead of false
  const [isMobile, setIsMobile] = useState(getIsMobile());
  const [isInitialized, setIsInitialized] = useState(false);



  const location = useLocation();
  const { isLoading } = useLoading();

  const { user, setUser } = useContext(UserDataContext)

  // FIXED: Check screen size immediately and handle resize
  useEffect(() => {
    const checkScreenSize = () => {
      const newIsMobile = getIsMobile();
      setIsMobile(newIsMobile);

      // Close mobile menu if switching to desktop
      if (!newIsMobile && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    // Set initial state
    checkScreenSize();
    setIsInitialized(true);

    // Add resize listener
    window.addEventListener('resize', checkScreenSize);

    // Also check on orientation change (mobile devices)
    window.addEventListener('orientationchange', () => {
      setTimeout(checkScreenSize, 100);
    });

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('orientationchange', checkScreenSize);
    };
  }, [isMobileMenuOpen]);

  // Navigation item positions along the curve
  const navPositions = [
    { x: -30, y: 34, rotate: 18, curveProgress: 0.1 },
    { x: 48, y: 54, rotate: 8, curveProgress: 0.35 },
    { x: 142, y: 60, rotate: -3, curveProgress: 0.65 },
    { x: 230, y: 44, rotate: -17, curveProgress: 0.9 },
  ];

  // Set active index based on current route
  useEffect(() => {
    const currentPath = location.pathname;
    let newActiveIndex = 0;

    if (currentPath === "/" || currentPath === "/home") {
      newActiveIndex = 0;
    } else if (currentPath === "/about") {
      newActiveIndex = 1;
    } else if (currentPath === "/projects") {
      newActiveIndex = 2;
    } else if (currentPath === "/contact") {
      newActiveIndex = 3;
    }

    setActiveIndex(newActiveIndex);
  }, [location.pathname]);

  const handleNavClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    setAnimatingIndex(activeIndex);
  }, [activeIndex]);

  const getAnimatedPosition = () => {
    const startPos = navPositions[animatingIndex] || navPositions[0];
    return startPos;
  };

  // Decorative lines data
  const decorativeLines = [
    { x: 10, y1: 80, y2: 20, color: "#778da9", width: 2, opacity: 0.7 },
    { x: 25, y1: 80, y2: 24, color: "#b6ad90", width: 1.5, opacity: 0.5 },
    { x: 40, y1: 80, y2: 28, color: "#10b981", width: 1.5, opacity: 0.5 },
    { x: 55, y1: 80, y2: 30, color: "#f59e0b", width: 2, opacity: 0.7 },
    { x: 70, y1: 80, y2: 34, color: "#ef4444", width: 1.5, opacity: 0.5 },
    { x: 85, y1: 82, y2: 36, color: "#ff9f1c", width: 2, opacity: 0.8 },
    { x: 100, y1: 80, y2: 40, color: "#ff9f1c", width: 2, opacity: 0.8 },
    { x: 120, y1: 80, y2: 44, color: "#ffb703", width: 1.5, opacity: 0.6 },
    { x: 140, y1: 80, y2: 46, color: "#fb8500", width: 2, opacity: 0.8 },
    { x: 160, y1: 80, y2: 49, color: "#8ecae6", width: 1.5, opacity: 0.6 },
    { x: 180, y1: 80, y2: 50, color: "#219ebc", width: 2, opacity: 0.8 },
    { x: 200, y1: 80, y2: 50, color: "#023047", width: 1.5, opacity: 0.6 },
    { x: 220, y1: 80, y2: 49, color: "#7209b7", width: 2, opacity: 0.8 },
    { x: 240, y1: 80, y2: 47, color: "#560bad", width: 1.5, opacity: 0.6 },
    { x: 260, y1: 80, y2: 44, color: "#480ca8", width: 2, opacity: 0.8 },
    { x: 280, y1: 80, y2: 40, color: "#3a0ca3", width: 1.5, opacity: 0.6 },
    { x: 300, y1: 80, y2: 36, color: "#3f37c9", width: 2, opacity: 0.8 },
    { x: 320, y1: 80, y2: 30, color: "#4361ee", width: 1.5, opacity: 0.6 },
    { x: 340, y1: 80, y2: 22, color: "#4895ef", width: 2, opacity: 0.8 },
  ];

  // FIXED: Don't render until initialized to prevent flash
  if (!isInitialized) {
    return (
      <header style={getHeaderStyles(true)}>
        <div style={profileContainerStyles}>
          <div style={avatarContainerStyles}>
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocJ67B59yYvEz6tl4pnD8FH_uHB6Mp3oETyamw9O9xpajU2ixeA=s96-c"
              alt="Avatar"
              style={avatarImageStyles}
            />
          </div>
          <div style={userInfoStyles}>
            <h2 style={getUserNameStyles(true)}>AI | Code | Yar</h2>
            <p style={getUserTaglineStyles(true)}>Future proof Learning</p>
          </div>
          <div style={accentBarStyles}></div>
        </div>
        <div style={{ width: 24, height: 24 }}></div> {/* Placeholder */}
      </header>
    );
  }

  let headerName = "<AIandCodewithYar />"

  let isLoggedIn = !!localStorage.getItem("token")


  return (
    <>
      <LoadingBar isVisible={isLoading} />
      <div className={`w-full flex justify-center items-center ${theme === "dark" ? "bg-[#181818]" : ""}`}>
        <header style={getHeaderStyles(isMobile, theme)}>
          {/* User Profile Section */}
          <Link to={"/"}>
            <div style={profileContainerStyles}>
              <div style={avatarContainerStyles}>
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocJ67B59yYvEz6tl4pnD8FH_uHB6Mp3oETyamw9O9xpajU2ixeA=s96-c"
                  alt="Avatar"
                  style={avatarImageStyles}
                />
              </div>

              <div style={userInfoStyles}>
                {/* <h2 style={getUserNameStyles(isMobile)}>AI | Code | Yar</h2> */}
                <h2 style={getUserNameStyles(isMobile, theme)}>{headerName}</h2>
                <p style={getUserTaglineStyles(isMobile, theme)}>Future proof Learning</p>
              </div>
              <div style={accentBarStyles}></div>
            </div>
          </Link>

          {/* Spacer for desktop */}
          {!isMobile && <div style={spacerStyles}></div>}

          {/* FIXED: Better conditional rendering */}
          {isMobile ? (
            <button
              style={hamburgerButtonStyles}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <div style={hamburgerLineStyles}></div>
              <div style={hamburgerLineStyles}></div>
              <div style={hamburgerLineStyles}></div>
            </button>
          ) : (
            <div style={navigationContainerStyles}>
              {/* Desktop SVG Navigation */}
              <svg width="410" height="120" viewBox="0 0 400 120" style={svgStyles}>
                <path
                  d="M 10 60 Q 200 120 350 60"
                  fill="none"
                  stroke="#f2932c"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>

              <svg width="400" height="120" viewBox="0 0 400 120" style={svgStyles}>
                <path
                  d="M 4 10 Q 200 90 350 10"
                  fill="none"
                  stroke="#f2932c"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>

              <svg width="400" height="120" viewBox="0 0 400 120" style={topSvgStyles}>
                <path
                  d="M 4 15 Q 200 80 350 15"
                  fill="none"
                  stroke="#ff9f1c"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  filter="url(#glow)"
                />

                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {decorativeLines.map((line, index) => (
                  <line
                    key={index}
                    x1={line.x}
                    y1={line.y1}
                    x2={line.x}
                    y2={line.y2}
                    stroke={line.color}
                    strokeWidth={line.width}
                    opacity={line.opacity}
                    strokeLinecap="round"
                  />
                ))}
              </svg>

              <div style={{
                ...getSliderStyles(getAnimatedPosition()),
                background: `linear-gradient(135deg, #f2932c 0%, #ff6b35 50%, #f77737 100%)`,
                boxShadow: `
                0 4px 15px rgba(242, 147, 44, 0.4),
                0 2px 8px rgba(242, 147, 44, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.2)
              `,
              }} />

              {navItems.map((item, index) => {
                const pos = navPositions[index];
                const isActive = activeIndex === index;
                const linkPath = item === "Home" ? "/" : `/${item.toLocaleLowerCase()}`;

                return (
                  <>
                    <Link
                      key={item}
                      to={linkPath}
                      style={linkStyles}
                      onClick={() => handleNavClick(index)}
                    >
                      <span
                        style={getNavItemStyles(pos, isActive)}
                        onMouseEnter={(e) => handleMouseEnter(e, pos, isActive)}
                        onMouseLeave={(e) => handleMouseLeave(e, pos, isActive)}
                      >
                        {item}
                      </span>
                    </Link>
                  </>
                );
              })}



              {/* extraas

dark-text = #adb5bd
light text = text-[#d8f3dc]

bg-dark = #242728 / #0F0F0F / #181818 / #0A0A0A

*/}

              <div className="absolute top-28 left-80 items-center justify-center flex text-center gap-0.5">
                <Link
                  to={`/signup`}
                  className={`${theme === "dark" ? "text-white hover:bg-[#242728]" : "text-orange-500 hover:bg-red-400 hover:text-white"}  items-center justify-center px-1.5 py-0.5 rounded-md`}>
                  signup
                </Link>


                <Link
                  to={isLoggedIn ? `/profile` : `/login`}
                  className={`${theme === "dark" ? "text-white hover:bg-[#242728]" : "text-orange-500 hover:bg-red-400 hover:text-white"} px-1.5 ${(isLoggedIn || !(Object.values(user)[0] == "")) && "-ml-1"}  items-center justify-center py-0.5  rounded-md`}>
                  {isLoggedIn ? "profile" : "login"}
                </Link>
              </div>

            </div>
          )}
        </header >
      </div >

      {/* Mobile Navigation Menu */}
      < MobileNavMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        activeIndex={activeIndex}
        handleNavClick={handleNavClick}
      />
    </>
  );
};

// All the existing styles remain the same...
const loadingBarContainerStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 9999,
  backgroundColor: 'transparent',
};

const loadingBarBackgroundStyles = {
  position: 'relative',
  height: 4,
  backgroundColor: 'transparent',
  borderRadius: 2,
  overflow: 'hidden',
};

const loadingBarFillStyles = {
  height: '100%',
  background: 'linear-gradient(90deg, #f2932c 0%, #ff6b35 50%, #f77737 100%)',
  borderRadius: 2,
  transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  boxShadow: '0 0 10px rgba(242, 147, 44, 0.5)',
};

const loadingBarGlowStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
  animation: 'shimmer 2s infinite',
};

const loadingTextContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 4,
};

const loadingDotsStyles = {
  display: 'flex',
  gap: 2,
};

const dotStyles = {
  animation: 'bounce 1.4s infinite both',
  fontSize: 12,
  color: '#f2932c',
  fontWeight: 'bold',
};

// Mobile Menu Styles
const mobileBackdropStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 9998,
  backdropFilter: 'blur(4px)',
};

const mobileMenuStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#ffffff',
  borderRadius: 20,
  padding: 24,
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(242, 147, 44, 0.1)',
  zIndex: 9999,
  minWidth: 280,
  maxWidth: 320,
  animation: 'slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
};

const mobileMenuHeaderStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 20,
  borderBottom: '2px solid #f2932c',
  paddingBottom: 12,
};

const mobileMenuTitleStyles = {
  margin: 0,
  fontSize: 18,
  fontWeight: 700,
  color: '#333',
  fontFamily: "'Inter', Arial, sans-serif",
};

const mobileCloseButtonStyles = {
  background: 'none',
  border: 'none',
  fontSize: 20,
  color: '#666',
  cursor: 'pointer',
  padding: 4,
  borderRadius: 50,
  width: 32,
  height: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',
};

const mobileMenuItemsStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
};

const mobileLinkStyles = {
  textDecoration: 'none',
  color: 'inherit',
};

const getMobileNavItemStyles = (isActive) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 16px',
  borderRadius: 12,
  backgroundColor: isActive ? '#f2932c' : 'transparent',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  border: isActive ? 'none' : '1px solid rgba(242, 147, 44, 0.2)',
});

const mobileNavTextStyles = {
  fontSize: 16,
  fontWeight: 600,
  fontFamily: "'Inter', Arial, sans-serif",
  color: 'inherit',
};

const mobileActiveIndicatorStyles = {
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
};

const mobileMenuDecorStyles = {
  marginTop: 20,
  paddingTop: 16,
  borderTop: '1px solid rgba(242, 147, 44, 0.2)',
};

const mobileDecorLineStyles = {
  height: 3,
  background: 'linear-gradient(90deg, #f2932c 0%, #ff6b35 50%, #f77737 100%)',
  borderRadius: 2,
  width: '60%',
  margin: '0 auto',
};

// Hamburger Button Styles
const hamburgerButtonStyles = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 8,
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  borderRadius: 8,
  transition: 'all 0.3s ease',
};

const hamburgerLineStyles = {
  width: 24,
  height: 3,
  backgroundColor: '#f2932c',
  borderRadius: 2,
  transition: 'all 0.3s ease',
};

// Responsive Header Styles
const getHeaderStyles = (isMobile, theme) => ({
  borderRadius: 16,
  maxWidth: isMobile ? '100%' : 1400,
  margin: isMobile ? "5px 10px" : "5px auto",
  padding: isMobile ? "15px 20px" : "20px 40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: `${theme === "dark" ? "#0F0F0F" : "linear-gradient(135deg, #ffffff 0%, #fefefe 100%)"}`,
  boxShadow: `${theme === "dark" ? "0 8px 32px rgba(255, 255, 255, 0.05), 0 4px 16px rgba(242, 147, 44, 0.2)" : "0 8px 32px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(242, 147, 44, 0.1)"}`,
  minHeight: isMobile ? 80 : 120,
  backdropFilter: "blur(10px)",
});
const profileContainerStyles = {
  display: "flex",
  alignItems: "center",
  gap: 16,
  position: "relative",
  flex: "0 0 auto",
};

const spacerStyles = {
  flex: "1 1 auto",
  minWidth: 200,
};

const avatarContainerStyles = {
  width: 60,
  height: 60,
  borderRadius: "30%",
  overflow: "hidden",
  border: "3px solid #fabf01",
  flexShrink: 0,
  position: "relative",
  transition: "transform 0.3s ease",
};

const avatarImageStyles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.3s ease",
};

const userInfoStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

const getUserNameStyles = (isMobile, theme) => ({
  margin: 0,
  fontWeight: 800,
  fontSize: isMobile ? 14 : 20,
  color: `${theme === "dark" ? "white" : "#333"}`,
  fontFamily: "'Inter', Arial, sans-serif",
});

const getUserTaglineStyles = (isMobile, theme) => ({
  margin: 0,
  fontSize: isMobile ? 12 : 14,
  color: `${theme === "dark" ? "#adb5bd" : "#666"}`,
  fontWeight: 500,
  fontFamily: "'Inter', Arial, sans-serif",
});

const accentBarStyles = {
  width: 2,
  height: 80,
  // background: "linear-gradient(180deg, #f2932c 0%, #ff6b35 100%)",
  background: "linear-gradient(180deg, #ffdd00 0%, #f77f00 100%)",
  borderRadius: 4,
  marginLeft: 12,
  boxShadow: "0 2px 8px rgba(242, 147, 44, 0.3)",
};

const navigationContainerStyles = {
  position: "relative",
  width: 400,
  height: 120,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "0 0 auto",
};

const svgStyles = {
  position: "absolute",
  bottom: 10,
  right: 70,
};

const topSvgStyles = {
  position: "absolute",
  top: 60,
  right: 70,
};

const linkStyles = {
  textDecoration: 'none',
  color: 'inherit',
};

const getSliderStyles = (activePos) => ({
  position: "absolute",
  left: activePos.x,
  top: activePos.y,
  transform: `translate(-50%, -50%) rotate(${activePos.rotate}deg)`,
  width: "80px",
  height: "36px",
  borderRadius: "20px",
  transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  zIndex: 1,
  opacity: 1,
});

const getNavItemStyles = (pos, isActive) => ({
  position: "absolute",
  left: pos.x,
  top: pos.y,
  transform: `translate(-50%, -50%) rotate(${pos.rotate}deg)`,
  color: isActive ? "#fff" : "#f2932c",
  fontWeight: "600",
  fontSize: isActive ? "17px" : "16px",
  fontFamily: "'Inter', Arial, sans-serif",
  cursor: "pointer",
  userSelect: "none",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  padding: "8px 12px",
  borderRadius: "20px",
  zIndex: isActive ? 10 : 5,
  transformOrigin: "center",
  textShadow: isActive ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
  letterSpacing: "0.5px",
});

const handleMouseEnter = (e, pos, isActive) => {
  if (!isActive) {
    e.currentTarget.style.color = "#d77105";
    e.currentTarget.style.fontSize = "17px";
    e.currentTarget.style.backgroundColor = "rgba(242, 147, 44, 0.1)";
    e.currentTarget.style.transform = `translate(-50%, -50%) rotate(${pos.rotate}deg) scale(1.08)`;
    e.currentTarget.style.boxShadow = "0 4px 12px rgba(242, 147, 44, 0.2)";
  }
};

const handleMouseLeave = (e, pos, isActive) => {
  if (!isActive) {
    e.currentTarget.style.color = "#f2932c";
    e.currentTarget.style.fontSize = "16px";
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.transform = `translate(-50%, -50%) rotate(${pos.rotate}deg) scale(1)`;
    e.currentTarget.style.boxShadow = "none";
  }
};

// Add CSS animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  @keyframes bounce {
    0%, 80%, 100% { transform: scale(0); opacity: 0.5; }
    40% { transform: scale(1); opacity: 1; }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @media (max-width: 768px) {
    .hamburger-button:hover .hamburger-line:nth-child(1) {
      transform: translateY(-1px);
    }
    .hamburger-button:hover .hamburger-line:nth-child(3) {
      transform: translateY(1px);
    }
  }
`;
document.head.appendChild(styleSheet);

export default Header;