import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="fixed flex flex-col top-4 lg:top-8 ml-4 lg:ml-8 text-white tracking-widest uppercase">
            <Link to="/" className="bg-teal-500 mb-2 px-4 py-2 rounded-ee-xl hover:bg-teal-700 transition-colors duration-200">Illustration</Link>
            <Link to="/kinderbuecher" className="bg-teal-500 mb-2 px-4 py-2 rounded-ee-xl hover:bg-teal-700 transition-colors duration-200">Kinderbücher</Link>
            <Link to="/ueber-mich"className="bg-teal-500 mb-2 px-4 py-2 rounded-ee-xl hover:bg-teal-700 transition-colors duration-200">Über mich</Link>
        </nav>
    )
}

export default Navigation;