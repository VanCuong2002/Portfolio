/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "{node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "300px",
                sm: "375px",
                sml: "500px",
                md: "667px",
                mdl: "768px",
                lg: "960px",
                lgl: "1024px",
                xl: "1280px",
            },
            fontFamily: {
                bodyFont: ["Poppins", "sans-serif"],
                titleFont: ["Montserrat", "sans-serif"],
            },
            colors: {
                bodyColor: "#212428",
                lightText: "#c4cfde",
                boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
                designColor: "#ff014f",
                transparent: "transparent",
                current: "currentColor",
                white: "#ffffff",
                tahiti: {
                    100: "#cffafe",
                    200: "#a5f3fc",
                    300: "#67e8f9",
                    400: "#22d3ee",
                    500: "#06b6d4",
                    600: "#0891b2",
                    700: "#0e7490",
                    800: "#155e75",
                    900: "#164e63",
                },
                tahiti: {
                    light: "#67e8f9",
                    DEFAULT: "#06b6d4",
                    dark: "#0e7490",
                },
            },
            boxShadow: {
                shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
