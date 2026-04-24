import PizzaCard from "../components/PizzaCard";
import margarita from "../assets/pizza01.png";
import pepperoni from "../assets/pizza02.png";
import vegetariana from "../assets/pizza03.png";

function Menu() {
  return (
    <div className="menu">
      <h2>Menú de Pizzas</h2>
      <PizzaCard nombre="Margarita" precio={8000} imagen={margarita} />
      <PizzaCard nombre="Pepperoni" precio={9500} imagen={pepperoni} />
      <PizzaCard nombre="Vegetariana" precio={9000} imagen={vegetariana} />
    </div>
  );
}

export default Menu;
