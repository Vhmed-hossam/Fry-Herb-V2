const { heroui } = require("@heroui/react");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    darkMode: "class",
    extend: {
      colors: {
        primary: "#03EDA3",
        danger: "#FF5656",
        secondary: "#72FF56",
        black: "#001811",
        background: "#E5FDF6",
        white: "#F1FFEE",
        gray: "#7b828a",
      },
    },
  },

  plugins: [heroui()],
};
