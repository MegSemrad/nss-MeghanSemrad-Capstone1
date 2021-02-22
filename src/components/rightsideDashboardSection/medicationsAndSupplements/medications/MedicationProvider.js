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


    const deleteMedication = (medicationId) => {
        return fetch(`http://localhost:8090/medications/${medicationId}`, {
            method: "DELETE"
        })
            .then(getMedications)
    };


    return (
        <medicationContext.Provider value={{
            medications, setMedications, 
            getMedications, addMedication, deleteMedication
        }}>
            {props.children}
        </medicationContext.Provider>
    )
};