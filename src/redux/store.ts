import { configureStore } from "@reduxjs/toolkit";
import FeaturesNavbar from "./slices/navbar";
import FeaturesAbout from "./slices/about"
const store = configureStore({
  reducer: {
    navbar: FeaturesNavbar,
    about: FeaturesAbout
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
