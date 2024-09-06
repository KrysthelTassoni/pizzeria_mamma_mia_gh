
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, getTotalPrice } =
    useContext(CartContext);

  // Calcular el total del carrito
  const total = getTotalPrice();

  return (
    <div className="container">
      <h2 className="mt-5">Tu Carrito</h2>
      {cart.length === 0 ? (
        <p>No tienes productos en el carrito.</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((pizza) => (
              <li
                key={pizza.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={pizza.img}
                    alt={pizza.name}
                    style={{ width: "50px", marginRight: "10px" }}
                  />
                  <span>{pizza.name}</span>
                </div>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => decreaseQuantity(pizza.id)}
                  >
                    -
                  </button>
                  <span className="mx-2">{pizza.quantity}</span>
                  <button
                    className="btn btn-outline-secondary btn-sm me-3"
                    onClick={() => increaseQuantity(pizza.id)}
                  >
                    +
                  </button>
                  <span>
                    ${(
                      pizza.price * pizza.quantity
                    ).toLocaleString()}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <hr />
          <div className="d-flex flex-column align-items-end">
            <h3>Total: ${total.toLocaleString()}</h3>
            <button className="btn btn-success btn-lg mt-2">Pagar</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;


