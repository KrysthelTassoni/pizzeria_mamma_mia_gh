import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPizzaSlice, faRightFromBracket, faCartShopping, faUserPen, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';
import { useUser } from '../../context/UserContext';

const Navbar = () => {
  const { getTotalPrice } = useContext(CartContext);
  const total = getTotalPrice();
  const { token, logout } = useUser();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Pizzería Mamma Mia!</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                <FontAwesomeIcon icon={faPizzaSlice} /> Home
              </Link>
            </li>
            {token ? (
              <>
                {/* Si el token es true, mostramos Profile y Logout */}
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    <FontAwesomeIcon icon={faUser} /> Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn nav-link" onClick={logout}>
                    <FontAwesomeIcon icon={faRightFromBracket} /> Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                {/* Si el token es false, mostramos Login y Register */}
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <FontAwesomeIcon icon={faRightToBracket} /> Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    <FontAwesomeIcon icon={faUserPen} /> Register
                  </Link>
                </li>
              </>
            )}
          </ul>
          {/* Botón de Total siempre visible */}
          <Link to="/cart">
            <button className="btn btn-outline-info">
              <FontAwesomeIcon icon={faCartShopping} /> Total: ${total.toLocaleString()}
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





