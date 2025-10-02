import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import hamburger & close icons
import "./Header.css";

const Header = function () {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <span className="logo">EnGomez.Dev</span>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <FiX size={30} color="white" />
        ) : (
          <FiMenu size={30} color="white" />
        )}{" "}
        {/* Toggle between icons */}
      </button>

      {/* Navigation Menu */}
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li onClick={() => setMenuOpen(false)}>Inicio</li>
          <li onClick={() => setMenuOpen(false)}>Acerca de mí</li>
          <li onClick={() => setMenuOpen(false)}>Proyectos</li>
          <li onClick={() => setMenuOpen(false)}>Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
