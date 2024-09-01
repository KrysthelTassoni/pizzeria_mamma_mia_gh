import React, { useEffect, useState } from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  const obtenerInformacion = async () => {
    try {
      const respuesta = await fetch('http://localhost:5000/api/pizzas/p001');
      const data = await respuesta.json();
      setPizza(data);
    } catch (error) {
      console.error('Error al obtener la pizza:', error);
    }
  };

  useEffect(() => {
    obtenerInformacion();
  }, []);

  if (!pizza) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6">
          <img src={pizza.img} className="img-fluid" alt={pizza.name} />
        </div>
        <div className="col-md-6">
          <h1>{pizza.name}</h1>
          <p>{pizza.desc}</p>
          <h4>
            <strong>Precio:</strong> ${pizza.price.toLocaleString()}
          </h4>
          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <button className="btn btn-dark mt-3">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
