import React from "react";
import CardPizza from "../card/CardPizza";

const Gallery = ({ pizzas }) => {
  
  return (
    <div className="container">
      <div className="row my-4">
        {pizzas.map((pizza) => (
          <div className="col-md-4 mt-4" key={pizza.id}>
            <CardPizza
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
              image={pizza.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

