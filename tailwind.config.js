/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ghost: ["ghostbumps"],
        ubuntu: ["Ubuntu"],
        alpha: ["Hanalei Fill"]
      },
      colors:{
        'pingo-alpha': {
          '50': '#eefaff',
          '100': '#d9f2ff',
          '200': '#bbe9ff',
          '300': '#8dddff',
          '400': '#57c7ff',
          '500': '#30abff',
          '600': '#0d87f6',
          '700': '#1275e3',
          '800': '#165eb7',
          '900': '#185090',
          '950': '#133258',
      },
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
