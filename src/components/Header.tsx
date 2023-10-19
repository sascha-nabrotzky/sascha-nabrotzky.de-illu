import React from "react";
import Logo from "../assets/icons/logo_sn.svg?react";
import colorSplat from "../assets/images/circle.webp";

function Header() {
  return (
    <header className="relative flex justify-center items-center mt-48 mb-24 md:mt-20 md:mb-28">
      <Logo className="w-full max-w-md text-stone-800 z-10 max-sm:px-4" />
      <img
        className="absolute h-60 sm:h-64 opacity-80"
        src={colorSplat}
        alt="watercolor splat"
      />
    </header>
  );
}

export default Header;
