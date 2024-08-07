import React from "react";
import "./cardPizza.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faCartShopping,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";

const CardPizza = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.image} className="card-img-top cardHeight" />
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <hr />
          <div className="text-center">
            <h5>
              <FontAwesomeIcon icon={faPizzaSlice} /> Ingredientes
            </h5>
            <p className="card-text">{props.ingredients.join(",")}</p>
          </div>
          <hr />
          <h6 className="card-title text-center fs-5">
            <strong>Precio:</strong> ${props.price.toLocaleString()}
          </h6>
          <div className="Text">
            <button type="button" class="btn btn-outline-secondary btn-sm">
              Ver más <FontAwesomeIcon icon={faEye} />
            </button>
            <button type="button" class="btn btn-dark btn-sm">
              <FontAwesomeIcon icon={faCartShopping} /> Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;