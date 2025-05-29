import React, { useEffect, useRef } from "react";

export default function About() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    // Animate title
    if (titleRef.current) {
      titleRef.current.style.opacity = "1";
      titleRef.current.style.transform = "translateY(0)";
    }
    
    // Animate content
    if (contentRef.current) {
      contentRef.current.style.opacity = "1";
      contentRef.current.style.transform = "translateY(0)";
    }

    // Animate skills
    if (skillsRef.current) {
      skillsRef.current.style.opacity = "1";
      skillsRef.current.style.transform = "translateY(0)";
    }
  }, []);

  return (
    <section className="min-h-screen bg-[#121212] text-white relative overflow-hidden">
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

      <div className="relative z-10 px-6 py-12 flex items-center justify-center min-h-screen">
        <div className="max-w-4xl space-y-12">
          {/* Animated title */}
          <div 
            ref={titleRef}
            className="text-center transform translate-y-10 opacity-0 transition-all duration-1000 ease-out"
          >
            <div className="relative inline-block group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#f2c0b5] to-purple-600 blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
              <h2 className="relative text-4xl md:text-5xl font-bold text-[#f2c0b5] py-2">
                À propos de moi
              </h2>
            </div>
          </div>

          {/* Animated content */}
          <div 
            ref={contentRef}
            className="transform translate-y-10 opacity-0 transition-all duration-1000 delay-300 ease-out"
          >
            <div className="relative group p-6 rounded-xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#f2c0b5]/20 to-purple-600/20 rounded-xl blur-lg group-hover:opacity-75 transition duration-500"></div>
              <p className="relative text-lg md:text-xl text-gray-300 leading-relaxed">
                Je suis <span className="font-semibold text-[#f2c0b5]">Dounia Hajjaji</span>, 
                une passionnée du développement frontend avec une curiosité permanente pour 
                les nouvelles technologies. Je transforme des maquettes en expériences 
                interactives et accessibles. Avec une base solide en HTML, CSS, JavaScript 
                et React, je cherche toujours à affiner mes compétences et repousser les 
                limites de mes projets.
              </p>
            </div>
          </div>

          {/* Animated skills section */}
          <div 
            ref={skillsRef}
            className="transform translate-y-10 opacity-0 transition-all duration-1000 delay-500 ease-out"
          >
            <div className="flex flex-wrap justify-center gap-8">
              {/* Responsive Design Card */}
              <div className="group relative p-6 bg-black/30 rounded-xl backdrop-blur-sm w-64 transform transition-all duration-300 hover:scale-105">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#f2c0b5] to-purple-600 rounded-xl opacity-30 group-hover:opacity-50 blur transition duration-300"></div>
                <div className="relative text-center space-y-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" 
                    className="bi bi-laptop mx-auto text-[#f2c0b5] group-hover:animate-bounce" 
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v7A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 3h-11zM2 4.5A.5.5 0 0 1 2.5 4h11a.5.5 0 0 1 .5.5V11H2V4.5zM0 12.5a.5.5 0 0 1 .5-.5H15.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                  <h3 className="text-xl font-semibold text-[#f2c0b5]">Responsive Design</h3>
                  <p className="text-gray-400">Création d'interfaces adaptatives pour une expérience optimale sur tous les appareils.</p>
                </div>
              </div>

              {/* Modern Development Card */}
              <div className="group relative p-6 bg-black/30 rounded-xl backdrop-blur-sm w-64 transform transition-all duration-300 hover:scale-105">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-[#f2c0b5] rounded-xl opacity-30 group-hover:opacity-50 blur transition duration-300"></div>
                <div className="relative text-center space-y-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" 
                    className="bi bi-code-slash mx-auto text-[#f2c0b5] group-hover:animate-pulse" 
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                  </svg>
                  <h3 className="text-xl font-semibold text-[#f2c0b5]">Développement Modern</h3>
                  <p className="text-gray-400">Utilisation des dernières technologies et frameworks pour des solutions innovantes.</p>
                </div>
              </div>

              {/* Creative Design Card */}
              <div className="group relative p-6 bg-black/30 rounded-xl backdrop-blur-sm w-64 transform transition-all duration-300 hover:scale-105">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#f2c0b5] to-purple-600 rounded-xl opacity-30 group-hover:opacity-50 blur transition duration-300"></div>
                <div className="relative text-center space-y-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" 
                    className="bi bi-palette mx-auto text-[#f2c0b5] group-hover:animate-spin-slow" 
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                    <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
                  </svg>
                  <h3 className="text-xl font-semibold text-[#f2c0b5]">Design Créatif</h3>
                  <p className="text-gray-400">Création d'interfaces uniques et attrayantes avec une attention particulière aux détails.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
