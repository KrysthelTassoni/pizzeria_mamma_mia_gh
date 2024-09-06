import React from 'react';
import CardPizza from '../card/CardPizza';

const Gallery = ({ pizzas, onAddToCart }) => {
  return (
    <div className="row">
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="col-md-4 mb-4">
          <CardPizza pizza={pizza} onAddToCart={onAddToCart} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;


