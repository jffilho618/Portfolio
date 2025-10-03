import { createContext, useContext } from "react";

interface WidthContext {
    width: number,
    setWidth: (width: number)  => void;
}

export const WidthContext = createContext<WidthContext>({} as WidthContext);

export const useWidth = () =>{
    return useContext(WidthContext);
}