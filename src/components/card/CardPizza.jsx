import React from 'react';
import { Link } from 'react-router-dom';

const CardPizza = ({ pizza, onAddToCart }) => {
  return (
    <div className="card shadow-sm">
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          {/* Link al nombre de la pizza */}
          <h5 className="card-title">
            <Link to={`/pizzas/${pizza.id}`} className="text-decoration-none">
              {pizza.name}
            </Link>
          </h5>
          <ul className="list-unstyled">
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>&#x2022; {ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="mt-3">
          <p className="card-text fw-bold">Precio: ${pizza.price.toLocaleString()}</p>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary w-50"
              onClick={() => onAddToCart(pizza)}
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;






