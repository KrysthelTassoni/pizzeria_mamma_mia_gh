// src/pages/home/Home.jsx

import React, { useEffect, useState } from 'react';
import Header from "../../components/header/Header";
import Gallery from "../../components/gallery/Gallery";
import { useCart } from "../../context/CartContext"; // Usamos el hook personalizado

const Home = () => {
  const [pizzas, setPizza] = useState([]);
  const { addToCart } = useCart(); // Usamos el hook para obtener addToCart

  const obtenerInformacion = async () => {
    const respuesta = await fetch("http://localhost:5000/api/pizzas");
    const data = await respuesta.json();
    setPizza(data);
  };

  useEffect(() => {
    obtenerInformacion();
  }, []);

  return (
    <div>
      <Header />
      <Gallery pizzas={pizzas} onAddToCart={addToCart} /> {/* Pasamos addToCart a Gallery */}
    </div>
  );
};

export default Home;


