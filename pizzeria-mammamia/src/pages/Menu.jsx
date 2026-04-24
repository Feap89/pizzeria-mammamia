import PizzaCard from "../components/PizzaCard";
import margarita from "../assets/Pizza 01.png";
import pepperoni from "../assets/Pizza 2.png";
import vegetariana from "../assets/Pizza 3.png";

function Menu() {
  return (
    <div>
      <h2>Menú de Pizzas</h2>
      <PizzaCard nombre="Margarita" precio={8000} imagen={margarita} />
      <PizzaCard nombre="Pepperoni" precio={9500} imagen={pepperoni} />
      <PizzaCard nombre="Vegetariana" precio={9000} imagen={vegetariana} />
    </div>
  );
}

export default Menu;

<div className="menu">
  <PizzaCard nombre="Margarita" precio={8000} imagen={margarita} />
  <PizzaCard nombre="Pepperoni" precio={9500} imagen={pepperoni} />
  <PizzaCard nombre="Vegetariana" precio={9000} imagen={vegetariana} />
</div>

