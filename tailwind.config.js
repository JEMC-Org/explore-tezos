module.exports = {
  purge: [],
  //darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      animation: ["motion-safe"],
    },
    textColor: {
      primary: "#0F61FF",
      secondary: "#1D2227",
      titles: "#4A4E52",
      descriptions: "#787D82",
      white: "#FFFFFF",
      gold: "#f1c232",
    },
    backgroundColor: {
      primary: "#0F61FF",
      white: "#FFFFFF",
    },
    borderColor: {
      primary: "#0F61FF",
      white: "#FFFFFF",
      gold: "#ffc000",
    },
  },
  variants: {
    transitionDelay: ["responsive"],
    transitionDuration: ["responsive"],
    transitionProperty: ["responsive"],
    transitionTimingFunction: ["responsive"],
    textTransform: ["responsive"],
    transform: ["responsive"],
    transformOrigin: ["responsive"],
  },
  plugins: [],
};
