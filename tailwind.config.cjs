/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html", 
        "./src/**/*.{js,jsx,ts,tsx}", 
        "./node_modules/flowbite/**/*.js",
        "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            'sans': ["Merriweather Sans"],
            'serif': ["Merriweather"]
        },
        extend: {
            colors: {
                terracotta: '#a57973',
            },
            backgroundImage: {
                dot: "radial-gradient(rgba(20, 20, 20, 0.6) 2px, transparent 2px)",
                // ~@ wird in vite.config für src gesetzt
                grungedot: "url('~@/assets/images/GrungeDot11.png')"
            },
            backgroundSize: {
                '10': '10px 10px',
            },
            gridTemplateColumns: {
                'default': 'minmax(2rem, 1fr) repeat(2, minmax(0, 30rem)) minmax( 2rem, 1fr)',
            },
        },
    },
    plugins: [
        require('flowbite/plugin'),
    ],
}
