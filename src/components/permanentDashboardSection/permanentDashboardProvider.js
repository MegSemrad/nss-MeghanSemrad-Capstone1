import React, { useState, createContext } from "react";


export const basePatientDetailsContext = createContext();


export const BasePatientDetailsProvider = (props) => {
    const [basePatientDetails, setBasePatientDetails] = useState({
        name: "",
        birthday: "",
        conditions: "",
        allergies: "",
        other: "",
        emergencyContactName: "",
        emergencyContactRelation: "",
        emergencyContactPhoneNumber: "",
        preferredPharmacyName: "",
        preferredPharmacyAddress: "",
        preferredPharmacyPhoneNumber: "",
    }); 
    const [basePatientDetailList, setBasePatientDetailList] = useState([]); 


    const getBasePatientDetails = () => {
        return fetch("http://localhost:8090/basePatientDetails")
        .then(response => response.json())
        .then((details) => {
            setBasePatientDetailList(details)
            return details
        })
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
            basePatientDetails, setBasePatientDetails, 
            basePatientDetailList, setBasePatientDetailList, 
            getBasePatientDetails, addBasePatientDetails, updateBasePatientDetails
        }}>
            {props.children}
        </basePatientDetailsContext.Provider>
    )
};