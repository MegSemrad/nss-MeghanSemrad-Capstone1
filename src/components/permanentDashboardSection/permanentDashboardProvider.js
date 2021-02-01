import React, { useState, createContext } from "react";

export const basePatientDetailsContext = createContext();

export const BasePatientDetailsProvider = (props) => {
    const [basePatientDetails, setBasePatientDetails] = useState([])

    const getBasePatientDetails = () => {
        return fetch("http://localhost:8090/basePatientDetails")
        .then(res => res.json())
        .then(setBasePatientDetails)
    };

    return (
        <basePatientDetailsContext.Provider value={{
            basePatientDetails, getBasePatientDetails
        }}>
            {props.children}
        </basePatientDetailsContext.Provider>
    )
};