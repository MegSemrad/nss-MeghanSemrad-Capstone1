import React, { useState, createContext } from "react";

export const AlertContext = createContext();

export const AlertProvider = (props) => {
    const [alerts, setAlerts] = useState([])

    const getAlerts = () => {
        return fetch("http://localhost:8090/baseUserDetails") //expand or embed if either??
        .then(response => response.json())
        .then(setAlerts)
    };

    return (
        <AlertContext.Provider value={{
            alerts, getAlerts
        }}>
            {props.children}
        </AlertContext.Provider>
    )
};