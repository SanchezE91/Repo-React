import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { categories } from "../data/products";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/images.jfif" alt="Logo de la tienda" width={50} />
        <h1 className="logo">Sdy Herramientas</h1>
      </div>

      <ul className="navbar-menu">
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>

        {categories.map((cat) => (
          <li key={cat.id}>
            <NavLink to={`/category/${cat.id}`}>{cat.label}</NavLink>
          </li>
        ))}
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
