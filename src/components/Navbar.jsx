import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <div className="nav-content">
          <a className="mx-3 my-4 nav-item" href="#acerca">
            Sobre Nosotros
          </a>
          <a className="mx-3 my-4 nav-item" href="#menu">
            Menú
          </a>
          <a className="mx-3 my-4 nav-item" href="#contacto">
            Contacto
          </a>
        </div>
        <hr></hr>
      </nav>
    </div>
  );
};

export default Navbar;
