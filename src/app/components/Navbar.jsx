"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { title: "Home", path: "#hero" },
  { title: "About", path: "#about" },
  { title: "Achievements", path: "#achievements" },
  { title: "Projects", path: "#projects" },
  { title: "Highlights", path: "#gallery" },
];

// Enhanced NavLink component with animations
const NavLink = ({ href, title, onClick, isActive }) => (
  <motion.a
    href={href}
    onClick={onClick}
    className="relative block text-white hover:text-yellow-400 transition-colors duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {title}
    <motion.span
      className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: isActive ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
  </motion.a>
);

// Enhanced MenuOverlay with animations
const MenuOverlay = ({ links, onLinkClick }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="md:hidden fixed left-0 right-0 top-[64px] bg-[#121212]/95 backdrop-blur-sm"
  >
    <ul className="flex flex-col items-center gap-4 py-6">
      {links.map((link, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="w-full"
        >
          <NavLink
            href={link.path}
            title={link.title}
            onClick={(e) => {
              e.preventDefault();
              onLinkClick(link.path);
            }}
          />
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  // Enhanced scroll handling with intersection observer
  useEffect(() => {
    const observers = {};
    
    navLinks.forEach(({ path }) => {
      const targetSection = document.querySelector(path);
      if (targetSection) {
        observers[path] = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(path);
              // Update URL without triggering scroll
              window.history.replaceState(null, null, path);
            }
          },
          { threshold: 0.5 }
        );
        observers[path].observe(targetSection);
      }
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  // Enhanced scroll handling for navbar background
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Enhanced smooth scroll with progress indication
  const handleSmoothScroll = (path) => {
    const section = document.querySelector(path);
    if (section) {
      const targetPosition = section.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      
      const duration = 1000; // ms
      let start = null;

      function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function for smooth acceleration and deceleration
        const ease = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        
        window.scrollTo(0, startPosition + distance * ease(progress));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      requestAnimationFrame(animation);
      setNavbarOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-10 w-full transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "bg-[#121212]/95 backdrop-blur-sm shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setNavbarOpen(!navbarOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex md:hidden items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition-colors duration-300"
            aria-label="Toggle navigation"
          >
            <motion.div
              animate={{ rotate: navbarOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
            </motion.div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:block md:w-auto">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    href={link.path}
                    title={link.title}
                    isActive={activeSection === link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSmoothScroll(link.path);
                    }}
                  />
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence for smooth transitions */}
      <AnimatePresence>
        {navbarOpen && (
          <MenuOverlay
            links={navLinks}
            onLinkClick={handleSmoothScroll}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
