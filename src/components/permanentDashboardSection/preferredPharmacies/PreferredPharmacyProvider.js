import React, { useState, createContext } from "react";

export const PreferredPharmacyContext = createContext();

export const PreferredPharmacyProvider = (props) => {
    const [preferredPharmacies, setPreferredPharmacies] = useState([])

    const getPreferredPharmacies = () => {
        return fetch("http://localhost:8090/baseUserDetails") //expand or embed if either??
        .then(response => response.json())
        .then(setPreferredPharmacies)
    };

    return (
        <PreferredPharmacyContext.Provider value={{
            preferredPharmacies, setPreferredPharmacies
        }}>
            {props.children}
        </PreferredPharmacyContext.Provider>
    )
};