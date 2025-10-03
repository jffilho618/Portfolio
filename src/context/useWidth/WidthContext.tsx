import { useEffect, useState, type ReactNode } from "react";
import { WidthContext } from "./useWidth";


export const WidthProvider = ({ children }: { children: ReactNode }) => {

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
        return () => {
            window.removeEventListener('resize', () => {
                setWidth(window.innerWidth)
            })
        }
    }, [])

    return(
        <WidthContext.Provider value={{ width, setWidth }} >
            {children}
        </WidthContext.Provider>
    )
}