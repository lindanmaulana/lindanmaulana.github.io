import { ReactNode } from "react"
import Navbar from "../components/navbar"

const Pages = (props: {children: ReactNode}) => {
    return (
        <div className="flex h-screen ">
            <Navbar />
            <div className="flex-1 overflow-y-auto">
                {props.children}
            </div>
        </div>
    )
}

export default Pages