/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      "very-dark-magenta": "hsl(300, 43%, 22%)",
      "soft-pink": "hsl(333, 80%, 67%)",
      "dark-grayish-magenta": "hsl(303, 10%, 53%)",
      "light-grayish-magenta": "hsl(300, 24%, 96%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontSize: {
      sm: [".8125rem", "1.125rem"],
      md: [".9375rem", "1.375rem"],
      lg: ["2rem", "1"],
      xl: ["3rem", "1"],
    },
    backgroundSize: {
      "max-50%": "max(50%, 400px)",
    },
    extend: {
      fontFamily: {
        primary: "League Spartan, sans-serif",
      },
      backgroundPosition: {
        "left-top-right-bottom": "left top, right bottom",
      },
      backgroundImage: {
        pattern:
          "url('./images/bg-pattern-top-desktop.svg'),url('./images/bg-pattern-bottom-desktop.svg')",
      },
    },
  },
  plugins: [],
};
