import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: "#BDD5E0",
                    100: "#92A8B3",
                    200: "#687E88",
                    300: "#415660",
                    400: "#1C313A",
                    500: "#D37B0F",
                    600: "#7A3200",
                },
            },
            fontFamily: {
                // sans: ["var(--font-sans)", ...fontFamily.sans],
            },
        },
    },
    plugins: [
        require("daisyui")
    ],

    daisyui: {
        themes: ["light"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: "dark", // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    },
} satisfies Config;
