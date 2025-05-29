import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import dounia from "../images/dounia.png"

export default function Hero() {
  const letterRefs = useRef([]);
  const imageRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeLetterIndex, setActiveLetterIndex] = useState(-1);

  useEffect(() => {
    // Initial animation
    letterRefs.current.forEach((letter, index) => {
      if (letter) {
        setTimeout(() => {
          letter.style.transform = "translateY(0) rotate(0deg)";
          letter.style.opacity = "1";
        }, 100 * index);
      }
    });

    // Parallax effect for image
    const handleMouseMove = (e) => {
      if (imageRef.current) {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;
        imageRef.current.style.transform = `perspective(1000px) rotateY(${xPos}deg) rotateX(${-yPos}deg) scale3d(1.1, 1.1, 1.1)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const firstName = "Dounia".split("");
  const lastName = "Hajjaji".split("");

  const handleLetterHover = (index, isEnter) => {
    setActiveLetterIndex(isEnter ? index : -1);
  };

  const getLetterStyle = (index, isFirstName = true) => {
    const baseStyle = {
      transform: "translateY(0) rotate(0deg)",
      transition: "all 0.3s ease-out",
      display: "inline-block",
      cursor: "default",
    };

    if (activeLetterIndex === index) {
      return {
        ...baseStyle,
        transform: `translateY(-10px) rotate(${isFirstName ? '10' : '-10'}deg)`,
        textShadow: "0 0 30px rgba(242, 192, 181, 0.8), 0 0 50px rgba(242, 192, 181, 0.4)",
        color: "#ffffff",
      };
    }

    return baseStyle;
  };

  return (
    <section className="relative min-h-screen bg-[#1c1b1b] text-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20 animate-gradient-shift"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-[#f2c0b5] rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center px-6 py-12 min-h-screen">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/5 space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold space-y-4 relative z-20">
              {/* First Name */}
              <div className="relative overflow-hidden mb-4 group bg-[#1c1b1b] inline-block w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#f2c0b5] to-purple-600 blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
                <div className="relative z-10 px-1">
                  {firstName.map((letter, index) => (
                    <span
                      key={`first-${index}`}
                      ref={(el) => (letterRefs.current[index] = el)}
                      className="inline-block transition-all duration-700 ease-out"
                      style={{
                        ...getLetterStyle(index, true),
                        transitionDelay: `${index * 50}ms`,
                        color: "#f2c0b5",
                        opacity: 1,
                        transform: "translateY(0) rotate(0deg)",
                      }}
                      onMouseEnter={() => handleLetterHover(index, true)}
                      onMouseLeave={() => handleLetterHover(index, false)}
                    >
                      {letter}
                    </span>
                  ))}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#f2c0b5] to-purple-500 transform origin-left transition-transform duration-500 group-hover:scale-x-100 scale-x-0"></div>
                </div>
              </div>

              {/* Last Name */}
              <div className="relative overflow-hidden group bg-[#1c1b1b] inline-block w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-[#f2c0b5] blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
                <div className="relative z-10 px-1">
                  {lastName.map((letter, index) => (
                    <span
                      key={`last-${index}`}
                      ref={(el) => (letterRefs.current[firstName.length + index] = el)}
                      className="inline-block transition-all duration-700 ease-out"
                      style={{
                        ...getLetterStyle(firstName.length + index, false),
                        transitionDelay: `${(firstName.length + index) * 50}ms`,
                        color: "#f2c0b5",
                        opacity: 1,
                        transform: "translateY(0) rotate(0deg)",
                      }}
                      onMouseEnter={() => handleLetterHover(firstName.length + index, true)}
                      onMouseLeave={() => handleLetterHover(firstName.length + index, false)}
                    >
                      {letter}
                    </span>
                  ))}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-[#f2c0b5] transform origin-right transition-transform duration-500 group-hover:scale-x-100 scale-x-0"></div>
                </div>
              </div>
            </h1>

            <div className="relative">
              <p className="text-xl md:text-2xl text-gray-300 flex items-center gap-3 group cursor-default">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-code-slash transform transition-transform group-hover:rotate-180 duration-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.478 1.647a.5.5 0 0 1 .375.596l-3 14a.5.5 0 1 1-.97-.21l3-14a.5.5 0 0 1 .595-.386zM4.854 4.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 1 0 .708-.708L2.207 8l2.647-2.646a.5.5 0 0 0 0-.708zm6.292 0a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L13.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                </svg>
                <span className="relative inline-block">
                  Développeuse
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#f2c0b5] to-purple-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </span>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 text-[#f2c0b5] relative z-20">
              {/* LinkedIn */}
              <a 
                href="#" 
                className="transform hover:scale-110 transition-all duration-300 hover:text-white relative group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[#f2c0b5] to-purple-600 rounded-lg opacity-0 group-hover:opacity-70 blur transition-opacity duration-300"></div>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="28" 
                  height="28" 
                  fill="currentColor" 
                  className="bi bi-linkedin relative z-10" 
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a 
                href="#" 
                className="transform hover:scale-110 transition-all duration-300 hover:text-white relative group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-[#f2c0b5] rounded-lg opacity-0 group-hover:opacity-70 blur transition-opacity duration-300"></div>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="28" 
                  height="28" 
                  fill="currentColor" 
                  className="bi bi-github relative z-10" 
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
              </a>

              {/* Email */}
              <a 
                href="mailto:votre@email.com" 
                className="transform hover:scale-110 transition-all duration-300 hover:text-white relative group"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[#f2c0b5] to-purple-600 rounded-lg opacity-0 group-hover:opacity-70 blur transition-opacity duration-300"></div>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="28" 
                  height="28" 
                  fill="currentColor" 
                  className="bi bi-envelope relative z-10" 
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                </svg>
              </a>
            </div>

            <Link 
              to="/projects" 
              className="group relative px-8 py-4 overflow-hidden rounded-full bg-transparent border-2 border-[#f2c0b5] text-[#f2c0b5] text-lg font-semibold transition-all duration-300 inline-block"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center">
                Discover my work
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">↓</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#f2c0b5] to-pink-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </Link>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 perspective-1000">
            <div
              ref={imageRef}
              className="relative group transition-transform duration-300 ease-out"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#f2c0b5] to-purple-600 rounded-[2.5rem] blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <img
                src={dounia}
                alt="Dounia illustration"
                className="relative rounded-[2rem] w-full h-[70vh] object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
