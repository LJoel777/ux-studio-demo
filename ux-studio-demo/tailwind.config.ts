/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        grey: {
          100: "rgba(110, 102, 126, 0.2)",
          200: "rgba(59, 52, 73, 0.2)",
          300: "#B2ADBB",
          400: "#6E667E",
          500: "#F7F7F9",
          600: "#E1DFE5",
        },
        magenta: {
          100: "#FFF4F3",
          200: "rgba(255, 149, 134, 0.2)",
          300: "#FFD5D1",
          400: "#FF9586",
          500: "#E58578",
          600: "#E23D3D",
        },
        blue: {
          100: "#F6FAFF",
          200: "rgba(133, 188, 255, 0.4)",
          300: "#85BCFF",
          400: "#2E73D8",
          500: "#2967C1",
        },
        green: {
          100: "#A3DA57",
          200: "#92C34E",
          300: "#2FAC56",
        },
        white: "#FFFFFF",
        black: "#3B3449",
        orange: "#FFAB37",
        purple: "#987BB6",
      },
      fontSize: {
        "4xl": "30px", // h1
        "3xl": "26px", // h2
        "2xl": "20px", // h3
        xl: "16px", // h4
        lg: "14px", // h5
        base: "12px", // h6
        sm: "10px", // h7
        xs: "8px", // h8
      },
      fontFamily: {
        regular: ["var(--font-montserrat-regular)"],
        medium: ["var(--font-montserrat-medium)"],
        semibold: ["var(--font-montserrat-semiBold)"],
        bold: ["var(--font-montserrat-bold)"],
      },
    },
  },
  variants: {},
  plugins: [],
};
