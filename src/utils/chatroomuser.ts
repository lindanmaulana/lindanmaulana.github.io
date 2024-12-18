import axios, { AxiosError } from "axios"
import { chat } from "./types"
const BASEURL = import.meta.env.VITE_BASEURL


export const ServiceCreateChat = async (data: chat) => {
    try {
        const result = await axios.post(`${BASEURL}/chatroomuser`, data, {
            timeout: 5000
        })

        return result.data
    } catch (err) {
        if(err instanceof AxiosError && err.response?.data) {
            throw new Error(err.response.data.msg)
        } else {
            throw new Error("unexpected error")
        }
    }
}

export const ServiceGetAllChat = async () => {
    try {
        const result = await axios.get(`${BASEURL}/chatroomuser`)


        return result.data
    } catch (err) {
        if(err instanceof AxiosError && err.response?.data) {
            throw new Error(err.response.data.msg)
        } else {
            throw new Error("unexpected error")
        }
    }
}