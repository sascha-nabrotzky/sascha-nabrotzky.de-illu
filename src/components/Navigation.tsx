import React from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

function Navigation() {
  return (
    <div className="fixed top-4 lg:top-8 z-20">
      <nav className="flex flex-col gap-2 text-white tracking-widest uppercase">
        <Link
          to="/"
          className="bg-pelorous-400 px-4 py-2 rounded-ee-xl hover:bg-pharlap-600 transition-colors duration-200 shadow-default"
        >
          Charakterdesign
        </Link>
        <Link
          to="/kinderbuecher"
          className="bg-pelorous-400 px-4 py-2 rounded-ee-xl hover:bg-pharlap-600 transition-colors duration-200 shadow-default"
        >
          Kinderbücher
        </Link>
        <Link
          to="/ueber-mich"
          className="bg-pelorous-400 px-4 py-2 rounded-ee-xl hover:bg-pharlap-600 transition-colors duration-200 shadow-default"
        >
          Über mich
        </Link>
      </nav>
      <LanguageSwitcher />
    </div>
  );
}

export default Navigation;
