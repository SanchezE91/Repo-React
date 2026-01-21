import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/images.jfif" alt="Logo de la tienda" width={50} />
        <h1 className="logo">Sdy Herramientas</h1>
      </div>
      <ul className="navbar-menu">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Ofertas</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
