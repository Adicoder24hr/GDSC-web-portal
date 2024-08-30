import Link from "next/link";
import { ReactNode } from "react";

interface props {
    children: ReactNode
    link?: string,
    onClick?: any 
    disabled?: boolean
}

export default function Button({children, link, onClick, disabled}: props){
    return (
        <button onClick={onClick} id="btn" disabled= {disabled}>
        <Link href={link || ""}>
            {children}
        </Link>
        </button>
    )
}