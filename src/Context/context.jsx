import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const GlobalContext = createContext("Initial Value")


export default function GlobalContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer);
    return (
        <GlobalContext.Provider value={{ state, dispatch }} >
            {children}
        </GlobalContext.Provider>
    )
}

