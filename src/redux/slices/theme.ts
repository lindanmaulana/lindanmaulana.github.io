import { createSlice } from "@reduxjs/toolkit"

interface themeState {
    darkMode: boolean
}
const initialState: themeState = {
    darkMode: false
}


const FeaturesTheme = createSlice({
    name: "Theme",
    initialState,
    reducers: {
        handleMode: (state) => {
            state.darkMode = !state.darkMode
        }
    }
})

export const {handleMode} = FeaturesTheme.actions
export default FeaturesTheme.reducer