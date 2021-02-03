import React, { useState, createContext } from "react";

export const basePatientDetailsContext = createContext();

export const BasePatientDetailsProvider = (props) => {
    const [basePatientDetails, setBasePatientDetails] = useState([])
    const [basePatientDetailList, setBasePatientDetailList] = useState([])

    const getBasePatientDetails = () => {
        return fetch("http://localhost:8090/basePatientDetails")
        .then(response => response.json())
        .then(setBasePatientDetailList)
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

    const getBasePatientDetailsById = (id) => {
        return fetch(`http://localhost:8090/basePatientDetails/${id}`)
        .then(response => response.json())
        .then(setBasePatientDetails)
    }
    
    
    const deleteBasePatientDetailsById = (id) => {
        return fetch(`http://localhost:8090/basePatientDetails/${id}`, {
            method: "DELETE"
        })
            .then(getBasePatientDetails)
    }


    const updateBasePatientDetails = (basePatientDetails) => {
        return fetch(`http://localhost:8090/basePatientDetails/${basePatientDetails.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(basePatientDetails)
        })
          .then(getBasePatientDetails)
      };
    return (
        <basePatientDetailsContext.Provider value={{
            basePatientDetails, basePatientDetailList, getBasePatientDetails, addBasePatientDetails, getBasePatientDetailsById, deleteBasePatientDetailsById, updateBasePatientDetails
        }}>
            {props.children}
        </basePatientDetailsContext.Provider>
    )
};