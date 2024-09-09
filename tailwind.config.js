const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  // content: ["./src/**/*.{html,js}"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundColor: {
      primary: "var(--color-bg)",
      highlight: "var(--color-bg-highlights)",
    },
    borderColor: {
      primary: "var(--color-border-primary)",
    },
    textColor: {
      body: "var(--color-text-body)",
      emphasis: "var(--color-text-emphasis)",
      link: "var(--color-text-link)",
      color1: "var(--color-border-primary)",
      color2: "var(--color-border-secondary)",
    },
    extend: {
      colors: {
        ...colors,
      }
    },
  },
  variants: {},
  // plugins: [],
  plugins: [require("daisyui")],
}
