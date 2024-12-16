/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        "montserrat-light": ["Montserrat-Light"],
        "montserrat-medium": ["Montserrat-Medium"],
        "montserrat-bold": ["Montserrat-Bold"],
        "montserrat-regular": ["Montserrat-Regular"],
        Geist: ["Geist"],
      },
      colors: {
        "dev-black": "#141313",
        "dev-black-gray": "#404040",
        "dev-gray": "#525252",
        "dev-blue-dark": "#110843",
        "dev-blue": "#2447F9",
        "dev-gray": "#E5E9F2",
        "color-html": "#E34F26",
        "color-css": "#1572B6",
        "color-js": "#F7DF1E",
        "color-tailwindcss": "#38BDF8",
        "color-react": "#61DAFB",
        "color-typescript": "#3178C6",
        "color-mongodb": "#47A248",
        "color-express": "#000000",
        "color-chakraui": "#38A169",
        "color-github": "#181717",
        "color-linkedin": "#0A66C2",
        "color-instagram": "#E1306C",
        "color-git": "#F05539",
        "color-nodejs": "#188C38"
      },
      scrollbarWidth: {
        none: "none",
      },
    },
  },
  plugins: [],
};
