/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "montserrat-light": ["Montserrat-Light"],
        "montserrat-medium": ["Montserrat-Medium"],
        "montserrat-bold": ["Montserrat-Bold"],
        "montserrat-regular": ["Montserrat-Regular"],
      },
      colors: {
        "dev-black": "#141313",
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
      },
    },
  },
  plugins: [],
};
