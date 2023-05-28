import React from "react";
import { ReactComponent as Logo } from "../src/assets/images/logo_sn.svg";
import colorSplat from "./assets/images/circle.png";


const Header = () => {
    return (
        <header className="relative flex justify-center mt-48 mb-24 md:mt-16 md:mb-28">
            <Logo className="w-full max-w-md text-stone-200 z-10 pt-10" />
            <img className="absolute h-60 sm:h-64" src={colorSplat} alt="watercolor splat" />
        </header>
    )
}

export default Header;