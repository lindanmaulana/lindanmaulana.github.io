import { createSlice } from "@reduxjs/toolkit"

interface stateNavbar {
    sidebar: boolean
    navbar: boolean
}

const initialState: stateNavbar = {
    sidebar: false,
    navbar: false
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
        },

        hanldeNavbarMobile: (state) => {
            state.navbar = false
        }
    }
})
export const {handleSidebar, handleOutSideBar, hanldeNavbarMobile} = FeaturesNavbar.actions
export default FeaturesNavbar.reducer