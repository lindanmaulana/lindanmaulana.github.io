import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface portfolioState {
  key: string;
  tech: string;
  buttonTech: number
}

const initialState = {
  key: "",
  tech: "",
  buttonTech: 0
};

const FeaturesPortfolio = createSlice({
  name: "Portfolio",
  initialState,
  reducers: {
    handleSelectPortfolio: (state, action: PayloadAction<portfolioState>) => {
      state.key = action.payload.key;

      if (state.tech) {
        if (state.tech === action.payload.tech) {
          state.tech = "";
        } else {
          state.tech = action.payload.tech;
        }
      } else {
        state.tech = action.payload.tech;
      }
    },
    handleClearPortfolio: (state) => {
      state.key = "";
      state.tech = "";
    },

    handleSetButtonTech: (state, action: PayloadAction<{id: number}>) => {
        state.buttonTech = Number(state.buttonTech === action.payload.id ? null : action.payload.id)
    }
  },
});

export const { handleClearPortfolio, handleSelectPortfolio, handleSetButtonTech } =
  FeaturesPortfolio.actions;
export default FeaturesPortfolio.reducer;
