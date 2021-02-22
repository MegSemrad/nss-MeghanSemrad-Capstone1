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


    return (
        <supplementContext.Provider value={{
            supplements, setSupplements, getSupplements
        }}>
            {props.children}
        </supplementContext.Provider>
    )
};