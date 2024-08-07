import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPizzaSlice,
  faRightFromBracket,
  faCartShopping,
  faUserPen,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const total = 25000;
  const [token, setStatus] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {" "}
            Pizzería Mamma Mia!{" "}
          </a>
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
            <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button type="button" class="btn btn-outline-secondary btn-sm ">
                  <span
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    <FontAwesomeIcon icon={faPizzaSlice} /> Home
                  </span>
                </button>
              </li>
              {token ? (
                <>
                  <li className="nav-item">
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm ms-2"
                    >
                      <span className="nav-link" href="#">
                        <FontAwesomeIcon icon={faUser} />
                        Profile
                      </span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm ms-2"
                      onClick={(e) => setStatus(!token)}
                    >
                      <span className="nav-link" href="#">
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        Logout
                      </span>
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm ms-2"
                      onClick={(e) => setStatus(!token)}
                    >
                      <span className="nav-link" href="#">
                        <FontAwesomeIcon icon={faRightToBracket} />
                        Login
                      </span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm ms-2"
                    >
                      <span className="nav-link" href="#">
                        <FontAwesomeIcon icon={faUserPen} />
                        Register
                      </span>
                    </button>
                  </li>
                </>
              )}
            </ul>
            <button
              className="btn btn-outline-info ms-auto button"
              type="submit"
            >
              <FontAwesomeIcon icon={faCartShopping} />
              Total: ${total.toLocaleString()}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;