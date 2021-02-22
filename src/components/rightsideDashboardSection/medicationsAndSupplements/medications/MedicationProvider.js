import React, { useState, createContext } from "react";

export const medicationContext = createContext();

export const MedicationProvider = (props) => {
    const [medications, setMedications] = useState([]);

        const getMedications = () => {
            return fetch("http://localhost:8090/medications")
            .then(response => response.json())
            .then((fetchedMedications) => {
                setMedications(fetchedMedications)
                return fetchedMedications
            })
        };


    const addMedication = (medicationObj) => {
        return fetch("http://localhost:8090/medications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(medicationObj)
        })
        .then(getMedications)
    };


    return (
        <medicationContext.Provider value={{
            medications, setMedications, 
            getMedications, addMedication
        }}>
            {props.children}
        </medicationContext.Provider>
    )
};