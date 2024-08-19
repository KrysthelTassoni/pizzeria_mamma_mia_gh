import React from "react";
import "./cardPizza.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCartShopping, faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

const CardPizza = ({ name, ingredients, price, image }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top cardHeight" alt={name} />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <hr />
        <div className="text-center">
          <h5>
            <FontAwesomeIcon icon={faPizzaSlice} /> Ingredientes:
          </h5>
          <ul className="list-unstyled">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="mb-1">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <h6 className="card-title text-center fs-5">
          <strong>Precio:</strong> ${price.toLocaleString()}
        </h6>
        <div className="text-center">
          <button type="button" className="btn btn-outline-secondary btn-sm me-5">
            Ver más <FontAwesomeIcon icon={faEye} />
          </button>
          <button type="button" className="btn btn-dark btn-sm">
            <FontAwesomeIcon icon={faCartShopping} /> Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;

