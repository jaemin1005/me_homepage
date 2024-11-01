import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        custom_blue: "var(--custom-blue)",
        custom_navy: "var(--custom-navy)",
        custom_light_navy: "var(--custom-light-navy)",
        custom_cyan: "var(--custom-cyan)",
        custom_light_cyan: "var(--custom-light-cyan)",
        cistom_light_light_cyan: "var(--custom-light-light-cyan)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(184.3deg, rgba(25, 25, 25, 0) 3.5%, rgba(54, 78, 77, 0.2) 96.72%)",
        "custom-button-gradient":
          "linear-gradient(90.78deg, rgba(0, 0, 0, 0) 0.35%, rgba(199, 3, 3, 0.2) 98.3%)"
      },
    },
  },
  plugins: [],
};
export default config;
