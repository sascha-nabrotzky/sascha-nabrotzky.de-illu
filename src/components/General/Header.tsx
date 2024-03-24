import React, { useState, useEffect, useMemo } from 'react';
import Logo from '../../assets/images/Logo.webp?preset=thumbnail&srcset';
import colorSplat from '../../assets/images/circle.webp?preset=thumbnail&srcset';

const Header = () => {
    const [animation, setAnimation] = useState(true);

    useEffect(() => {
        if (window.sessionStorage.getItem('logoAnimated') === null) {
            setAnimation(true);
            window.sessionStorage.setItem('logoAnimated', 'true');
        }
    }, [setAnimation]);

    useMemo(() => {
        if (window.sessionStorage.getItem('logoAnimated') !== null) {
            setAnimation(false);
        }
    }, [setAnimation]);

    return (
        <header className="relative flex justify-center items-center mt-24 mb-16 md:mt-36 md:mb-28">
            <img
                srcSet={Logo}
                alt="Logo von Sascha Nabrotzky"
                className={`w-full max-w-md z-10 max-sm:px-4 ${
                    animation
                        ? 'animate-slideUp opacity-0 translate-y-12 scale-150 rotate-6'
                        : ''
                }`}
            />
            <img
                className="absolute h-56 sm:h-60 opacity-80 translate-x-1/3 -translate-y-1/4"
                srcSet={colorSplat}
                alt="watercolor splat"
            />
        </header>
    );
};

export default Header;
