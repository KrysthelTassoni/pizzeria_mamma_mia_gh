import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light text-center py-3">
      <div className="container">
        <p className="mb-0">
          <FontAwesomeIcon icon={faCopyright} /> 2024 - Pizzería Mamma Mia! - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;