import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { useUser } from "../../context/UserContext";

const Cart = () => {
  const { cart, getTotalPrice, checkout, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const { token } = useUser(); 
  const [message, setMessage] = useState("");
  const total = getTotalPrice();

  // Función para manejar el checkout
  const handleCheckout = async () => {
    if (!token) {
      setMessage("Debes iniciar sesión para realizar una compra.");
      return;
    }

    try {
      // Llamar a la función checkout del contexto
      const response = await checkout();
      if (response.success) {
        setMessage("¡Compra realizada con éxito!");
      } else {
        setMessage("Hubo un error al procesar la compra. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al realizar la compra:", error);
      setMessage("Hubo un error al procesar la compra. Inténtalo de nuevo.");
    }
  };

  // useEffect para observar cambios en el carrito y el mensaje
  useEffect(() => {
    if (cart.length === 0 && message === "¡Compra realizada con éxito!") {
      console.log("Carrito vacío después de una compra exitosa");
    }
  }, [cart, message]);

  return (
    <div className="container">
      <h2 className="my-4">Tu Carrito</h2>
      {message && (
        <div className={`alert ${message.includes("éxito") ? "alert-success" : "alert-danger"} mt-3`}>
          {message}
        </div>
      )}
      {cart.length === 0 && message !== "¡Compra realizada con éxito!" ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src={item.img} alt={item.name} className="img-thumbnail" style={{ width: "50px", marginRight: "10px" }} />
                  <div>
                    <h6 className="my-0">{item.name}</h6>
                  </div>
                  <div className="d-flex align-items-center ml-2">
                    <button className="btn btn-secondary btn-sm" onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="btn btn-secondary btn-sm" onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>
                <span className="text-muted">
                  ${item.price} x {item.quantity}
                </span>
              </li>
            ))}
          </ul>
          <h4>Total: ${total}</h4>
          <button className="btn btn-primary" onClick={handleCheckout} disabled={cart.length === 0}>
            Pagar
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
