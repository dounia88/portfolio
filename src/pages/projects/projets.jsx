import React, { useEffect, useRef } from "react";
import dounia from "../images/dounia.png"

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
        }, 200 * index);
      }
    });

    // Add mousemove effect to projects
    projectRefs.current.forEach(project => {
      if (project) {
        project.addEventListener('mousemove', handleMouseMove);
        project.addEventListener('mouseleave', handleMouseLeave);
      }
    });

    return () => {
      projectRefs.current.forEach(project => {
        if (project) {
          project.removeEventListener('mousemove', handleMouseMove);
          project.removeEventListener('mouseleave', handleMouseLeave);
        }
      });
    };
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // Add shine effect
    const shine = card.querySelector('.shine-effect');
    if (shine) {
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      shine.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(242, 192, 181, 0.3) 0%, transparent 50%)`;
    }
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    
    // Reset shine effect
    const shine = card.querySelector('.shine-effect');
    if (shine) {
      shine.style.background = 'transparent';
    }
  };

  const projects = [
    {
      title: "Site Web Responsive",
      description: "Un site web responsive créé avec HTML et CSS, mettant en œuvre les principes du design moderne et adaptatif. Utilisation de Flexbox et Grid pour une mise en page flexible.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: {dounia},
      link: " https://dounia88.github.io/projetjs/",
      github: "#",
      category: "HTML/CSS/JS"
    },
    {
      title: "Landing Page Interactive",
      description: "Une landing page interactive avec des animations fluides et des effets de défilement. Intégration de formulaires et de galeries d'images dynamiques.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "https://placehold.co/600x400",
      link: " https://dounia88.github.io/projetjs/",
      github: "#",
      category: "HTML/CSS/JS"
    },
    {
      title: "Application Todo List",
      description: "Une application de gestion de tâches avec possibilité d'ajouter, supprimer et marquer les tâches comme terminées. Stockage local des données.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "https://placehold.co/600x400",
      link: " https://dounia88.github.io/projetjs/",
      github: "#",
      category: "HTML/CSS/JS"
    },
    {
      title: "Portfolio React",
      description: "Mon portfolio personnel développé avec React et Tailwind CSS. Animations fluides et design moderne avec une expérience utilisateur optimisée.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      image: "https://placehold.co/600x400",
      link: " https://dounia88.github.io/projetjs/",
      github: "#",
      category: "React"
    },
    {
      title: "Dashboard React",
      description: "Un tableau de bord interactif avec React, incluant des graphiques et des données en temps réel. Interface utilisateur intuitive et responsive.",
      technologies: ["React", "CSS3", "JavaScript"],
      image: "https://placehold.co/600x400",
      link: " https://dounia88.github.io/projetjs/",
      github: "#",
      category: "React"
    },
    {
      title: "Site Web Restaurant",
      description: "Site vitrine pour un restaurant avec menu interactif et système de réservation. Design élégant et expérience utilisateur soignée.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "https://placehold.co/600x400",
      link: " https://dounia88.github.io/projetjs/",
      github: "",
      category: "HTML/CSS/JS"
    }
  ];

  const categories = ["HTML/CSS", "React"];

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
        {/* Main Title */}
        <div 
          ref={titleRef}
          className="text-center transform translate-y-10 opacity-0 transition-all duration-1000 ease-out mb-20"
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#f2c0b5] to-purple-600 blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
            <h2 className="relative text-4xl md:text-5xl font-bold text-[#f2c0b5] py-2">
              Mes Projets
            </h2>
            <p className="text-gray-300 mt-4 text-lg">
              Une sélection de mes réalisations en développement web
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#f2c0b5] to-purple-600 rounded-full opacity-30 group-hover:opacity-70 blur transition duration-300"></div>
              <button className="relative px-6 py-2 rounded-full bg-black/50 text-[#f2c0b5] hover:text-white transition-colors duration-300">
                {category}
              </button>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => projectRefs.current[index] = el}
              className="transform translate-y-10 opacity-0 transition-all duration-1000 ease-out cursor-pointer"
              style={{ 
                transitionDelay: `${index * 200}ms`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.3s ease-out'
              }}
            >
              <div className="group relative bg-black/30 rounded-xl overflow-hidden backdrop-blur-sm hover-card">
                {/* Shine effect overlay */}
                <div className="shine-effect absolute inset-0 z-10 pointer-events-none transition-all duration-300"></div>

                {/* Category Tag with enhanced hover */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 text-sm bg-black/70 text-[#f2c0b5] rounded-full backdrop-blur-sm transform transition-all duration-300 group-hover:scale-110 group-hover:bg-black/90">
                    {project.category}
                  </span>
                </div>

                {/* Project Image with enhanced hover effects */}
                <div className="relative overflow-hidden">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#f2c0b5] to-purple-600 opacity-30 group-hover:opacity-60 blur transition-all duration-500"></div>
                  <img 
                    src={dounia} 
                    alt={project.title}
                    className="w-full h-48 object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 transition-all duration-300 group-hover:bg-opacity-10"></div>
                </div>

                {/* Project Content with enhanced hover effects */}
                <div className="p-6 space-y-4 relative z-10">
                  <h3 className="text-2xl font-semibold text-[#f2c0b5] group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 line-clamp-3 group-hover:line-clamp-none transition-all duration-500 transform group-hover:translate-y-1">
                    {project.description}
                  </p>

                  {/* Technologies with enhanced hover */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-[#f2c0b5]/10 text-[#f2c0b5] rounded-full border border-[#f2c0b5]/20 transition-all duration-300 hover:bg-[#f2c0b5]/20 transform hover:scale-105 hover:-translate-y-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links with enhanced hover */}
                  <div className="flex space-x-4 pt-4">
                    <a 
                      href={project.link}
                      className="flex items-center space-x-2 text-[#f2c0b5] hover:text-white transition-all duration-300 transform hover:translate-x-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-link-45deg transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                      </svg>
                      <span>Demo</span>
                    </a>
                    <a 
                      href={project.github}
                      className="flex items-center space-x-2 text-[#f2c0b5] hover:text-white transition-all duration-300 transform hover:translate-x-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 16 16">
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