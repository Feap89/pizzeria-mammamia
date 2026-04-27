// src/components/Cart.jsx
import React, { useState } from "react";
import { pizzaCart } from "../pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  // Función para aumentar cantidad
  const increaseQuantity = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
      )
    );
  };

  // Función para disminuir cantidad
  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, quantity: pizza.quantity - 1 } : pizza
        )
        .filter((pizza) => pizza.quantity > 0) // elimina si llega a 0
    );
  };

  // Calcular total
  const total = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>🛒 Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          {cart.map((pizza) => (
            <div key={pizza.id} className="cart-item">
              <img src={pizza.img} alt={pizza.name} className="cart-img" />
              <div className="cart-info">
                <h2>{pizza.name}</h2>
                <p>Precio: ${pizza.price}</p>
                <p>Cantidad: {pizza.quantity}</p>
                <div className="cart-buttons">
                  <button onClick={() => increaseQuantity(pizza.id)}>+</button>
                  <button onClick={() => decreaseQuantity(pizza.id)}>-</button>
                </div>
              </div>
            </div>
          ))}
          <h2>Total: ${total}</h2>
          <button className="btn-pagar">Pagar</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
