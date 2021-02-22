import React, { useState, createContext } from "react";

export const supplementContext = createContext();

export const SupplementProvider = (props) => {
    const [supplements, setSupplements] = useState([]);

        const getSupplements = () => {
            return fetch("http://localhost:8090/supplements")
            .then(response => response.json())
            .then((fetchedSupplements) => {
                setSupplements(fetchedSupplements)
                return fetchedSupplements
            })
        };


    const addSupplement = (supplementObj) => {
        return fetch("http://localhost:8090/supplements", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(supplementObj)
        })
        .then(getSupplements)
    };


    return (
        <supplementContext.Provider value={{
            supplements, setSupplements, 
            getSupplements, addSupplement
        }}>
            {props.children}
        </supplementContext.Provider>
    )
};