import { configureStore } from "@reduxjs/toolkit";
import FeaturesNavbar from "./slices/navbar";
import FeaturesAbout from "./slices/about"
import FeaturesTheme from "./slices/theme"

const store = configureStore({
  reducer: {
    navbar: FeaturesNavbar,
    about: FeaturesAbout,
    theme: FeaturesTheme
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
