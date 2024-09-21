import { Config } from "tailwindcss"
import { COLOR_CONFIG } from "./config/styles/tailwind-theme"

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: { ...COLOR_CONFIG },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            boxShadow: {
                eSokoShadow: "0 6px 8px -1px rgba(14, 99, 140, 0.1)",
            },
        },
    },
    plugins: [],
}
export default config
