import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <ul className="fixed top-1/2 ml-8 tracking-widest uppercase">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/photo">Fotografie</Link>
            </li>
        </ul>
    )
}

export default Navigation;