import React from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <header>
      <nav className="h-[7vh] lg:h-[10vh] text-red-50 py-4 px-10 flex items-center justify-between bg-blue-900 z-40">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-3xl font-black text-white">Tienda Outlet</h1>
          </div>

          <ul className="hidden lg:flex items-center gap-6 z-50">
            <li>
              <Link
                to="/"
                className="text-[#ES8D27] hover:text-orange-400 transition-colors"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/products/Zapatillas"
                className="text-[#ES8D27] hover:text-orange-400 transition-colors"
              >
                Productos
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="text-[#ES8D27] hover:text-orange-400 transition-colors"
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-[#ES8D27] hover:text-orange-400 transition-colors"
              >
                Sobre Nosotros
              </Link>
            </li>
          </ul>

          <div className="flex gap-6 z-50">
            <Link to="/cart" className="relative">
              <span className="absolute -top-1 -right-11 w-5 h-5 rounded-full"></span>
            </Link>
            <CiShoppingCart className="text-5xl w-6 h-6  hover:text-orange-400" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
