import { createContext, useContext, useState } from "react";
import { useUser } from "./UserContext";

export const CartContext = createContext();

// Hook personalizado para usar el contexto del carrito
export const useCart = () => {
  return useContext(CartContext);
};

// Creamos el proveedor del contexto
export const CartProvider = ({ children }) => {
  const { token } = useUser();
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const checkout = async () => {
    if (!token) {
      throw new Error("Usuario no autenticado");
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/checkouts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ items: cart }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      // Limpiar el carrito después de una compra exitosa
      setCart([]);
      return { success: true };
    } catch (error) {
      console.error("Checkout error:", error);
      return { success: false };
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        getTotalPrice,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


