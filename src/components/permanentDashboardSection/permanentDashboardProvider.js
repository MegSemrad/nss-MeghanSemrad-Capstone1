import React, { useState, createContext } from "react";

export const basePatientDetailsContext = createContext();

export const BasePatientDetailsProvider = (props) => {
    const [basePatientDetails, setBasePatientDetails] = useState([])

    const getBasePatientDetails = () => {
        return fetch("http://localhost:8090/basePatientDetails")
        .then(res => res.json())
        .then(setBasePatientDetails)
    };


    const addBasePatientDetails = patientDetailsObj => {
        return fetch("http://localhost:8090/basePatientDetails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(patientDetailsObj)
        })
        .then(getBasePatientDetails)
    };

    return (
        <basePatientDetailsContext.Provider value={{
            basePatientDetails, getBasePatientDetails, addBasePatientDetails
        }}>
            {props.children}
        </basePatientDetailsContext.Provider>
    )
};