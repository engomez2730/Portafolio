import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import hamburger & close icons
import "./Header.css";
import Imagen from "./Main/Imagenes";

const Header = function () {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-certificado">
              <span className="logo">EnGomez.Dev</span>

              <Imagen name={"./Certificado.png"} alt={"Logo"} maxWidth={40} className={"logo-img"} />

      </div>
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
          <li onClick={() => setMenuOpen(false)}><a href="#inicio">Inicio</a></li>
          <li onClick={() => setMenuOpen(false)}><a href="#proyectos">Proyectos</a></li>
          <li onClick={() => setMenuOpen(false)}><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
