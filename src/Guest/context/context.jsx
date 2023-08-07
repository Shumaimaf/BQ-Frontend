import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const GlobalContext = createContext();

const initialState = {
    role: '', // Set the initial role value here
};

export default function GlobalContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
}
