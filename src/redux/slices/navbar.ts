import { createSlice } from "@reduxjs/toolkit"

interface stateNavbar {
    sidebar: boolean
}

const initialState: stateNavbar = {
    sidebar: false
}

const FeaturesNavbar = createSlice({
    name: "Navbar",
    initialState,
    reducers: {
        handleSidebar: (state) => {
            state.sidebar = true
        },

        handleOutSideBar: (state) => {
            state.sidebar = false
        }
    }
})
export const {handleSidebar, handleOutSideBar} = FeaturesNavbar.actions
export default FeaturesNavbar.reducer