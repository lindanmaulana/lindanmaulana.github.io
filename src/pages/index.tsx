import { ReactNode } from "react"
import Navbar from "../components/navbar"

const Pages = (props: {children: ReactNode}) => {
    return (
        <div className="flex w-full h-screen">
            <Navbar />
            <div className="flex-1 overflow-y-auto no-scrollbar">
                {props.children}
            </div>
        </div>
    )
}

export default Pages