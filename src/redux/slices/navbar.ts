import { createSlice } from "@reduxjs/toolkit"

interface stateNavbar {
    sidebar: boolean
}

const initialState: stateNavbar = {
    sidebar: true
}

const FeaturesNavbar = createSlice({
    name: "Navbar",
    initialState,
    reducers: {
        handleSidebar: (state) => {
            state.sidebar = !state.sidebar
        }
    }
})
export const {handleSidebar} = FeaturesNavbar.actions
export default FeaturesNavbar.reducer