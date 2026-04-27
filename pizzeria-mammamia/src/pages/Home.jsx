// src/components/Home.jsx
import React from "react";
import { pizzas } from "../pizzas";
import CardPizza from "../components/CardPizza";

const Home = () => {
  return (
    <div className="home-container">
      <h1>🍕 Bienvenido a Pizzería Mamma Mía 🍕</h1>
      <div className="pizzas-grid">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
