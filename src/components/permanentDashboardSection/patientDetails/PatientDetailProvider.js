import React, { useState, createContext } from "react";

export const PatientDetailContext = createContext();

export const PatientDetailProvider = (props) => {
    const [patientDetails, setPatientDetails] = useState([])

    const getPatientDetails = () => {
        return fetch("http://localhost:8090/baseUserDetails")   //expand or embed if either??
        .then(response => response.json())
        .then(setPatientDetails)
    };

    return (
        <PatientDetailContext.Provider value={{
            patientDetails, getPatientDetails
        }}>
            {props.children}
        </PatientDetailContext.Provider>
    )
};