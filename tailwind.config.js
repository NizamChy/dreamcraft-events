/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        greatVibes: " 'Great Vibes', cursive",
        plexSerif: "'IBM Plex Serif'",
        robotoSlab: "'Roboto Slab', serif",
        scopeOne: "'Scope One'",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
