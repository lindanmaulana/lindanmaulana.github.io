import axios, { AxiosError } from "axios"
import { feedback } from "./types"
const BASEURL = import.meta.env.VITE_BASEURL

export const ServiceGetFeedbacks = async () => {
    try {
        const result = await axios.get(`${BASEURL}/feedback`)

        return result.data
    } catch (err) {
        if(err instanceof AxiosError && err.response?.data) {
            throw new Error(err.response.data.msg)
        } else {
            throw new Error("unexpected error")
        }
    }
}


export const ServiceCreateFeedbacks = async (data: feedback) => {
    try {
        const result = await axios.post(`${BASEURL}/feedback`, data)

        return result.data
    } catch (err) {
        if(err instanceof AxiosError && err.response?.data) {
            throw new Error(err.response.data.msg)
        } else {
            throw new Error("unexpected error")
        }
    }
}

// http//localhost:3000/api/v1/feedback