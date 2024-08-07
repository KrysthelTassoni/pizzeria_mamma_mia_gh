import React from "react";
import CardPizza from "../card/CardPizza";

const Gallery = () => {
  return (
    <div>
      <div className="container">
        <div className="row my-4">
          <div className=" col-xs-12 col-md-4">
            <CardPizza
              name="Pizza Napolitana"
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              price={5950}
              image={"./img/napolitana.jpeg"}
            />
          </div>
          <div className=" col-xs-12 col-md-4">
            <CardPizza
              name="Pizza Española"
              ingredients={[
                "mozzarella",
                "gorgonzola",
                "parmesano",
                "provolone",
              ]}
              price={6950}
              image={"./img/espanola.jpg"}
            />
          </div>
          <div className=" col-xs-12 col-md-4">
            <CardPizza
              name="Pizza Pepperoni"
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              price={6950}
              image={"./img/pepperoni.webp"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;