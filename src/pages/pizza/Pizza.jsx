import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./pizza.css";

const Pizza = () => {
  const { id } = useParams(); // Obtiene el id desde la URL
  const [pizza, setPizza] = useState(null); // Estado para almacenar los datos de la pizza
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  useEffect(() => {
    const fetchPizza = async () => {
      const url = `${import.meta.env.VITE_API_URL}/pizzas/${id}`;
      console.log("Fetching URL:", url);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response data:", data);
        setPizza(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="pizza-card">
      {pizza && (
        <div className="pizza-details">
          <h2 className="pizza-name text-primary">{pizza.name}</h2>
          <p className="pizza-description">{pizza.desc}</p>
          <img src={pizza.img} alt={pizza.name} className="pizza-image" />
          <p className="pizza-price">Price: ${pizza.price.toLocaleString()}</p>
          <h4>Ingredients:</h4>
          <ul className="pizza-ingredients">
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Pizza;