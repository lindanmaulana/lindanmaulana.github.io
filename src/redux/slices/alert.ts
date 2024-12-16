import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface alertMessage {
    active: boolean
    message: string
    type: "success" | "error",
    transition: boolean
}
const initialState: alertMessage = {
    active: false,
    message: "",
    type: "error",
    transition: false
}

export const FeaturesAlertMessage = createSlice({
    name: "AlertMessage",
    initialState,
    reducers: {
        handleSetAlertMessage: (state, action: PayloadAction<alertMessage>) => {
            state.active = action.payload.active
            state.message = action.payload.message
            state.type = action.payload.type
            state.transition = action.payload.transition
        },

        handleClearAlertMessage: (state) => {
            state.active = false
            state.message= ""
            state.type = 'error'
            state.transition = false
        }
    }
})


export const {handleSetAlertMessage, handleClearAlertMessage} = FeaturesAlertMessage.actions
export default FeaturesAlertMessage.reducer