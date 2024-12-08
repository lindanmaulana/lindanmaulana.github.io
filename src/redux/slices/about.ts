import { createSlice } from "@reduxjs/toolkit"

interface stateAbout {
    goals: boolean
}

const initialState: stateAbout = {
    goals: false
}

const FeaturesAbout = createSlice({
    name: "About",
    initialState,
    reducers: {
        handleGoals: (state) => {
            state.goals = !state.goals
        }
    }
})

export const {handleGoals} = FeaturesAbout.actions
export default FeaturesAbout.reducer