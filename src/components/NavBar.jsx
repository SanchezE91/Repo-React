import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images.jfif" alt="Logo" className="w-12 h-12 rounded-xl" />
          <h1 className="text-xl font-bold">Sdy Herramientas</h1>
        </Link>

        <ul className="hidden md:flex items-center gap-6 font-medium">
          <li>
            <Link to="/" className="hover:underline">
              Inicio
            </Link>
          </li>

          <li>
            <Link to="/category/herramientas" className="hover:underline">
              Herramientas
            </Link>
          </li>

          <li>
            <Link to="/category/seguridad" className="hover:underline">
              Seguridad
            </Link>
          </li>

          <li>
            <Link to="/category/accesorios" className="hover:underline">
              Accesorios
            </Link>
          </li>
        </ul>

        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;

