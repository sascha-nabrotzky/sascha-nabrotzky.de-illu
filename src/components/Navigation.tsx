import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="fixed flex flex-col top-4 lg:top-8 text-white tracking-widest uppercase z-20">
      <Link
        to="/"
        className="bg-pelorous-400 mb-2 px-4 py-2 rounded-ee-xl hover:bg-pharlap-600 transition-colors duration-200 shadow-default"
      >
        Charakterdesign
      </Link>
      <Link
        to="/kinderbuecher"
        className="bg-pelorous-400 mb-2 px-4 py-2 rounded-ee-xl hover:bg-pharlap-600 transition-colors duration-200 shadow-default"
      >
        Kinderbücher
      </Link>
      <Link
        to="/ueber-mich"
        className="bg-pelorous-400 mb-2 px-4 py-2 rounded-ee-xl hover:bg-pharlap-600 transition-colors duration-200 shadow-default"
      >
        Über mich
      </Link>
    </nav>
  );
}

export default Navigation;
