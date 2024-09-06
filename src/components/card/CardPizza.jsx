import React from 'react';

const CardPizza = ({ pizza, onAddToCart }) => {
  return (
    <div className="card shadow-sm">
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{pizza.name}</h5>
          {/* <p className="card-text">{pizza.desc}</p> */}
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
            className="btn btn-primary w-50 "
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




