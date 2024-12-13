import { configureStore } from "@reduxjs/toolkit";
import FeaturesNavbar from "./slices/navbar";
import FeaturesAbout from "./slices/about"
import FeaturesTheme from "./slices/theme"
import FeaturesPortfolio from "./slices/portfolio"

const store = configureStore({
  reducer: {
    navbar: FeaturesNavbar,
    about: FeaturesAbout,
    theme: FeaturesTheme,
    portfolio: FeaturesPortfolio
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
