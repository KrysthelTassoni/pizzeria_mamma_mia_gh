
// src/components/cart/Cart.jsx
import React, { useState } from "react";
import pizzaCart from "../../data/pizzaCart";


const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  // Función para aumentar la cantidad de una pizza
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
      )
    );
  };

  // Función para disminuir la cantidad de una pizza
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, quantity: pizza.quantity - 1 } : pizza
        )
        .filter((pizza) => pizza.quantity > 0)  // Filtrar después de mapear
    );
  };

  // Calcular el total del carrito
  const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0);

  return (
    <div className="container">
      <h2 className="mt-5">Tu Carrito</h2>
      <ul className="list-group">
        {cart.map((pizza) => (
          <li key={pizza.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <img src={pizza.img} alt={pizza.name} style={{ width: "50px", marginRight: "10px" }} />
              <span>{pizza.name}</span>
            </div>
            <div>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => decreaseQuantity(pizza.id)}
                
              >
                -
              </button>
              <span className="mx-2">{pizza.quantity}</span>
              <button
                className="btn btn-outline-secondary btn-sm me-5"
                onClick={() => increaseQuantity(pizza.id)}
              >
                +
              </button>
            
            <span>${(pizza.price * pizza.quantity).toLocaleString()}</span>
            </div>
          </li>
        ))}
      </ul>
      <hr />
      <div className="d-flex flex-column align-items-end justify-content-end">
      <h3>Total: ${total.toLocaleString()}</h3>
      <button className="btn btn-success btn-lg">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;

