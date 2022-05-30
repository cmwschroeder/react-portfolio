module.exports = {
  content: [
    "./src/index.js",
    "./src/App.js",
    "./src/components/Porfolio.js",
    "./src/components/NavBar.js",
    "./src/components/pages/About.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["luxury"]
  }
}
