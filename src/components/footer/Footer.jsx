import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="p-3 mb-2 bg-dark text-light d-flex justify-content-center">
      <p>
        {" "}
        <FontAwesomeIcon icon={faCopyright} /> 2024 - Pizzeria Mamma Mia! Todos
        los derechos reservados{" "}
      </p>
    </div>
  );
};

export default Footer;