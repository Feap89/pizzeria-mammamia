// src/components/PizzaCard.jsx
function PizzaCard({ nombre, precio, imagen }) {
  return (
    <div className="pizza-card">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
    </div>
  );
}

export default PizzaCard;
