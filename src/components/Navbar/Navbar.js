import { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Navbar.css";

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const particleContainerRef = useRef(null);

  // Safe scroll handler
  const handleScroll = useCallback(() => {
    const progress = Math.min(window.scrollY / 300, 1);
    setScrollProgress(progress);
  }, []);

  // Null-safe particle creation
  const createParticles = useCallback((e) => {
    if (!navbarRef.current || !particleContainerRef.current) return;

    const navbar = navbarRef.current;
    const container = particleContainerRef.current;
    const navbarRect = navbar.getBoundingClientRect();

    // Create 5 particles per event
    Array.from({ length: 5 }).forEach(() => {
      const particle = document.createElement("div");
      particle.className = "particle";
      
      // Mouse position relative to navbar
      const mouseX = e.clientX - navbarRect.left;
      const mouseY = e.clientY - navbarRect.top;
      
      // Random movement direction
      const angle = Math.random() * Math.PI * 2;
      const distance = 30 + Math.random() * 50;
      
      particle.style.setProperty("--x", `${mouseX}px`);
      particle.style.setProperty("--y", `${mouseY}px`);
      particle.style.setProperty("--x-move", `${Math.cos(angle) * distance}px`);
      particle.style.setProperty("--y-move", `${Math.sin(angle) * distance}px`);
      
      // Logo colors
      const colors = ['#6E45E2', '#FF7E5F', '#D2691E', '#000000'];
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

      container.appendChild(particle);
      setTimeout(() => particle.remove(), 1000);
    });
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll effect
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Hover effect
  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    const handleHover = (e) => createParticles(e);
    navbar.addEventListener('mousemove', handleHover);
    
    return () => navbar.removeEventListener('mousemove', handleHover);
  }, [createParticles]);

  // Background style
  const bgStyle = {
    background: scrollProgress > 0 
      ? `linear-gradient(135deg, 
         rgba(110, 69, 226, ${0.8 * scrollProgress}) 0%, 
         rgba(255, 126, 95, ${0.6 * scrollProgress}) 50%, 
         rgba(210, 105, 30, ${0.5 * scrollProgress}) 100%)`
      : 'rgba(255, 255, 255, 0.95)'
  };

  return (
    <nav 
      ref={navbarRef}
      className={`navbar ${scrollProgress > 0 ? 'scrolled' : ''}`} 
      style={bgStyle}
    >
      <div ref={particleContainerRef} className="particle-container" aria-hidden="true" />
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Logo scrollProgress={scrollProgress} />
        </Link>

        {/* Mobile menu toggle */}
        <div 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation menu */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={() => setIsMenuOpen(false)}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={() => setIsMenuOpen(false)}>Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;