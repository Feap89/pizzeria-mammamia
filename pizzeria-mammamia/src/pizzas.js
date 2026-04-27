// src/pizzas.js

export const pizzas = [
  {
    id: 1,
    name: "Margarita",
    price: 8000,
    ingredients: ["Tomate", "Mozzarella", "Albahaca"],
    img: "/img/margarita.jpg",
  },
  {
    id: 2,
    name: "Pepperoni",
    price: 9500,
    ingredients: ["Tomate", "Mozzarella", "Pepperoni"],
    img: "/img/pepperoni.jpg",
  },
  {
    id: 3,
    name: "Cuatro Quesos",
    price: 10000,
    ingredients: ["Mozzarella", "Parmesano", "Gorgonzola", "Queso Azul"],
    img: "/img/cuatroquesos.jpg",
  },
  {
    id: 4,
    name: "Vegetariana",
    price: 9000,
    ingredients: ["Tomate", "Mozzarella", "Pimientos", "Champiñones", "Aceitunas"],
    img: "/img/vegetariana.jpg",
  },
  {
    id: 5,
    name: "Hawaiana",
    price: 9500,
    ingredients: ["Tomate", "Mozzarella", "Jamón", "Piña"],
    img: "/img/hawaiana.jpg",
  },
  {
    id: 6,
    name: "Napolitana",
    price: 8500,
    ingredients: ["Tomate", "Mozzarella", "Anchoas", "Orégano"],
    img: "/img/napolitana.jpg",
  },
];

// Simulación de carrito inicial
export const pizzaCart = [
  {
    id: 2,
    name: "Pepperoni",
    price: 9500,
    img: "/img/pepperoni.jpg",
    quantity: 2,
  },
  {
    id: 5,
    name: "Hawaiana",
    price: 9500,
    img: "/img/hawaiana.jpg",
    quantity: 1,
  },
];
