import React, { useEffect, useState } from 'react';
import Header from "../../components/header/Header";
import Gallery from "../../components/gallery/Gallery";
//import pizzas from "../../data/pizza"; 

const Home = () => {
  const [ pizzas, setPizza]= useState ([]);
  const obtenerInformacion= async () => {
    const respuesta= await fetch ("http://localhost:5000/api/pizzas")
    const data= await respuesta.json ();
    setPizza (data)
  };

  useEffect (()=>{
    obtenerInformacion ();
  }, [] ) 
  

  return (
    <div>
      <Header />
      <Gallery pizzas={pizzas} /> 
    </div>
  );
};

export default Home;
