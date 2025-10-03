// import { BiBorderRadius } from "react-icons/bi";
import { Config } from "tailwindcss";

const config: Config = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                color_primary: "#0b0e1c",
                color_secondary: "#DD5CC5"
            }
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                ".scrollbar-thin": {
                    scrollbarWidth: "thin",
                    scrollbarcolor: "#6d91d3 transparent",

                },
                ".scrollbar-webkit": {
                    "&::-webkit-scrollbar": {
                        width: "8px"
                    },
                    "&::-webkit-scrollbar-track": {
                        background: "red"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        background: "blue",
                        borderRadius: "4px",
                        border: "2px solid #6d91d3"
                    },
                }
            }
            addUtilities(newUtilities, ["responsive", "hover"]);
        }
    ],
}

export default config;