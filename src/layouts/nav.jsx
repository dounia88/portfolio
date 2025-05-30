import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { title: "HOME", path: "/" },
    { title: "ABOUT", path: "/about" },
    { title: "SKILLS", path: "/skills" },
    { title: "PROJECTS", path: "/projects" },
    { title: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      {/* Blur overlay for mobile menu */}
      <div 
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 z-40
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/85 backdrop-blur-md shadow-lg shadow-purple-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo/Brand with animated border */}
      <div className="flex items-center gap-9">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative text-2xl font-bold border border-white/50 rounded-full w-12 h-12 flex items-center justify-center bg-black text-white cursor-pointer hover:scale-105 transform transition duration-300">
          DH
        </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <ul className="flex space-x-8 text-center">
                  {navLinks.map((link) => (
                    <Link
                      key={link.title}
                      to={link.path}
                      className={`relative text-white group px-2 py-1 transition-colors duration-300 ${
                        activeLink === link.path ? 'text-[#f2c0b5]' : 'hover:text-[#f2c0b5]'
                      }`}
                      onClick={() => setActiveLink(link.path)}
                    >
                      {link.title}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"/>
                    </Link>
                  ))}
        </ul>
      </div>
            </div>

            {/* Social Links with hover effects */}
            <div className="hidden md:flex space-x-6">
              <a href="#" className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300" />
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" 
                  className="bi bi-linkedin relative text-white hover:text-[#f2c0b5] transition-colors duration-300"
                  viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
              </a>
              <a href="#" className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300" />
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" 
                  className="bi bi-github relative text-white hover:text-[#f2c0b5] transition-colors duration-300"
                  viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
              </a>
            </div>

            {/* Animated Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 focus:outline-none group"
                aria-expanded="false"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-50 blur transition duration-300" />
                <div className="relative">
                  <span className="sr-only">Open main menu</span>
                  <div className="relative w-6 h-6 transform transition-all duration-300">
                    <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ${
                      isOpen ? 'rotate-45 translate-y-2.5' : ''
                    }`} />
                    <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ${
                      isOpen ? 'opacity-0' : 'translate-y-2'
                    }`} />
                    <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ${
                      isOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'
                    }`} />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Animated Mobile Menu */}
        <div className={`transform transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-full opacity-0'
        } md:hidden fixed top-0 right-0 w-64 h-full bg-black/95 backdrop-blur-lg shadow-lg`}>
          <div className="px-4 py-6">
            <div className="flex items-center justify-between mb-8">
              <div className="text-2xl font-bold text-white">Menu</div>
              <button onClick={() => setIsOpen(false)} className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.path}
                  className="block text-white hover:text-[#f2c0b5] transition-colors duration-300 py-2 group"
                  onClick={() => {
                    setActiveLink(link.path);
                    setIsOpen(false);
                  }}
                >
                  <span className="relative">
                    {link.title}
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"/>
                  </span>
                </Link>
              ))}
            </nav>
            {/* Mobile Social Links */}
            <div className="flex space-x-4 mt-8 px-2">
              <a href="#" className="text-white hover:text-[#f2c0b5] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
        </a>
              <a href="#" className="text-white hover:text-[#f2c0b5] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
        </a>
            </div>
          </div>
      </div>
    </nav>
    </>
  );
}