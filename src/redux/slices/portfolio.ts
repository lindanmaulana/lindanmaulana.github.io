import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface portfolioState {
    key: string
    tech: string
}

const initialState = {
    key: '',
    tech: ''
}

const FeaturesPortfolio = createSlice({
    name: "Portfolio",
    initialState,
    reducers: {
        handleSelectPortfolio: (state, action: PayloadAction<portfolioState>) => {
            state.key = action.payload.key
            state.tech = action.payload.tech
        },
        handleClearPortfolio: (state) => {
            state.key = ''
            state.tech = ""
        }
    }
})

export const {handleClearPortfolio, handleSelectPortfolio} = FeaturesPortfolio.actions
export default FeaturesPortfolio.reducer