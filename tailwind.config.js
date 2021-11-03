module.exports = {
  purge: false,
  darkMode: "media",
  theme: {
    extend: {
      animation: ["motion-safe"],
    },
    textColor: {
      primary: "#0F61FF",
      secondary: "#1D2227",
      titles: "#FFFFFF",
      descriptions: "#F2F3F7",
      white: "#FFFFFF",
      gold: "#f1c232",
      red: "#E80101",
    },
    backgroundColor: {
      primary: "#263042",
      secondary: "#1D2227",
      buttonPrimary: "#0F61FF",
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
