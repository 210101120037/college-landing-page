import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">MyWebsite</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`navbar-menu ${isOpen ? 'show' : ''}`} ref={menuRef}>
        <ul>
          <li><Link to="/Home" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/About" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/Services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/Contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link to="/Login" onClick={() => setIsOpen(false)}>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
