// src/components/CardPizza.jsx
import React from "react";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card-pizza">
      <img src={img} alt={name} className="pizza-img" />
      <h2>{name}</h2>
      <p>Precio: ${price}</p>

      <h4>Ingredientes:</h4>
      <ul>
        {ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>

      <button className="btn-comprar">Añadir al carrito</button>
    </div>
  );
};

export default CardPizza;
