import React from "react";
import Header from "../header/Header";
import Gallery from "../gallery/Gallery";
import pizzas from "../../data/pizza"; 

const Home = () => {
  return (
    <div>
      <Header />
      <Gallery pizzas={pizzas} /> 
    </div>
  );
};

export default Home;
