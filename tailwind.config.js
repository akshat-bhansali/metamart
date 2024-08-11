/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gradientBorder :
          "linear-gradient(45deg, #7F00FF, #E100FF, #FF00F0, #E100FF, #7F00FF)",
      },
      animation: {
        slide: "slide 6s linear",
        bounce: "bounce 5s infinite",
        fadeIn: "fadeIn 1s ease-out",
        rotate: "rotate 3s linear infinite",
        gradientBorder : "gradientBorder 5s linear infinite",
        "spin-slow": "spin-slow 10s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(200%)" },
          "50%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-30px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "gradientBorder" : {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
      },
    },
  },
  plugins: [],
};
