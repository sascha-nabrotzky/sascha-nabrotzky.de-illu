import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="fixed top-4 2xl:top-1/2 ml-8 tracking-widest uppercase z-10">
            <div className="bg-gray-500 mb-2 px-1">
                <Link to="/">Illustration</Link>
            </div>
            <div className="bg-gray-500 mb-2 px-1">
                <Link to="/kinderbuecher">Kinderbücher</Link>
            </div>
            <div className="bg-gray-500 mb-2 px-1">
                <Link to="/ueber-mich">Über mich</Link>
            </div>
        </nav>
    )
}

export default Navigation;