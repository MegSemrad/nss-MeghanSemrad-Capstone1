import React, { useState, createContext } from "react";


export const RelativesContext = createContext();


export const RelativeProvider = (props) => {
    const [relatives, setRelatives] = useState([]);
    const [familyHistories, setFamilyHistories] = useState([]);
    const [familyHistory, setFamilyHistory] = useState([]);


    const getRelatives = () => {
        return fetch("http://localhost:8090/relatives?_embed=familyHistories")
            .then(response => response.json())
            .then(setRelatives)
    };


    const getFamilyHistories = () => {
        return fetch("http://localhost:8090/familyHistories?_expand=relative")
            .then(response => response.json())
            .then(setFamilyHistories)
    };


    const getFamilyHistory = (id) => {
        return fetch(`http://localhost:8090/familyHistories/${id}`)
            .then(response => response.json())
            .then(setFamilyHistory)
    };


    const getFamilyHistoryById = (id) => {
        return fetch(`http://localhost:8090/familyHistories/${id}?_expand=relative`)
            .then(res => res.json())
    };


    const addFamilyHistory = (familyHistoryObject) => {
        return fetch("http://localhost:8090/familyHistories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(familyHistoryObject)
        })
            .then(getRelatives)
            .then(getFamilyHistories)
    };

    const updateFamilyHistory = (familyHistory) => {
        return fetch(`http://localhost:8090/familyHistories/${familyHistory.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(familyHistory)
        })
            .then(getRelatives)
            .then(getFamilyHistories)
    };


    const deleteFamilyHistory = (familyHistoryId) => {
        return fetch(`http://localhost:8090/familyHistories/${familyHistoryId}`, {
            method: "DELETE"
        })
            .then(getRelatives)
    };


    return (
        <RelativesContext.Provider value={{
            relatives, setRelatives, 
            familyHistories, setFamilyHistories,
            familyHistory, setFamilyHistory,
            getRelatives, deleteFamilyHistory,
            getFamilyHistories,  getFamilyHistory,
            addFamilyHistory, getFamilyHistoryById, updateFamilyHistory
        }}>
            {props.children}
        </RelativesContext.Provider>
    )
};