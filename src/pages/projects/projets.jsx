import React, { useEffect, useRef } from "react";

export default function Projets() {
  const titleRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    // Animate title
    if (titleRef.current) {
      titleRef.current.style.opacity = "1";
      titleRef.current.style.transform = "translateY(0)";
    }

    // Animate projects
    projectRefs.current.forEach((project, index) => {
      if (project) {
        setTimeout(() => {
          project.style.opacity = "1";
          project.style.transform = "translateY(0)";
        }, 200 * index); // Stagger the animations
      }
    });
  }, []);

  const projects = [
    {
      title: "Projet 1",
      description: "Description détaillée du projet 1. Expliquez ici les technologies utilisées, les défis relevés et les résultats obtenus.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "https://placehold.co/600x400",
      link: "#",
      github: "https://github.com/dounia88"
    },
    {
      title: "Projet 2",
      description: "Description détaillée du projet 2. Expliquez ici les technologies utilisées, les défis relevés et les résultats obtenus.",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      image: "https://placehold.co/600x400",
      link: "#",
      github: "https://github.com/dounia88"
    },
    {
      title: "Projet 3",
      description: "Description détaillée du projet 3. Expliquez ici les technologies utilisées, les défis relevés et les résultats obtenus.",
      technologies: ["React Native", "Firebase", "Redux"],
      image: "https://placehold.co/600x400",
      link: "#",
      github: "https://github.com/dounia88"
    }
  ];

  return (
    <section className="min-h-screen bg-[#121212] text-white relative overflow-hidden py-20">
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

      <div className="relative z-10 container mx-auto px-6">
        {/* Title */}
        <div 
          ref={titleRef}
          className="text-center transform translate-y-10 opacity-0 transition-all duration-1000 ease-out mb-20"
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#f2c0b5] to-purple-600 blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
            <h2 className="relative text-4xl md:text-5xl font-bold text-[#f2c0b5] py-2">
              Mes Projets
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => projectRefs.current[index] = el}
              className="transform translate-y-10 opacity-0 transition-all duration-1000 ease-out"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="group relative bg-black/30 rounded-xl overflow-hidden backdrop-blur-sm hover-card">
                {/* Project Image with Overlay */}
                <div className="relative overflow-hidden">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#f2c0b5] to-purple-600 opacity-30 group-hover:opacity-50 blur transition duration-300"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-20"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-[#f2c0b5] group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-[#f2c0b5]/10 text-[#f2c0b5] rounded-full border border-[#f2c0b5]/20 hover:bg-[#f2c0b5]/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4 pt-4">
                    <a 
                      href={project.link}
                      className="flex items-center space-x-2 text-[#f2c0b5] hover:text-white transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                      </svg>
                      <span>Demo</span>
                    </a>
                    <a 
                      href={project.github}
                      className="flex items-center space-x-2 text-[#f2c0b5] hover:text-white transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                      </svg>
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}