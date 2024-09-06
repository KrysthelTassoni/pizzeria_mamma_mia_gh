import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPizzaSlice,
  faRightFromBracket,
  faCartShopping,
  faUserPen,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"; // Importamos el contexto

const Navbar = () => {
  const { getTotalPrice } = useContext(CartContext); // Consumimos el contexto del carrito
  const total = getTotalPrice(); // Obtenemos el total del carrito
  const [token, setStatus] = useState(false); // Estado de autenticación

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Pizzería Mamma Mia!
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm"
                >
                  <Link to="/" className="nav-link active">
                    <FontAwesomeIcon icon={faPizzaSlice} /> Home
                  </Link>
                </button>
              </li>
              {token ? (
                <>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm ms-2"
                    >
                      <Link to="/profile" className="nav-link">
                        <FontAwesomeIcon icon={faUser} /> Profile
                      </Link>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm ms-2"
                      onClick={() => setStatus(!token)}
                    >
                      <span className="nav-link">
                        <FontAwesomeIcon icon={faRightFromBracket} /> Logout
                      </span>
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm ms-2"
                    >
                      <Link to="/login" className="nav-link">
                        <FontAwesomeIcon icon={faRightToBracket} /> Login
                      </Link>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm ms-2"
                    >
                      <Link to="/register" className="nav-link">
                        <FontAwesomeIcon icon={faUserPen} /> Register
                      </Link>
                    </button>
                  </li>
                </>
              )}
            </ul>
            <Link to="/cart">
              <button
                className="btn btn-outline-info ms-auto button"
                type="button"
              >
                <FontAwesomeIcon icon={faCartShopping} />
                Total: ${total.toLocaleString()}
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


