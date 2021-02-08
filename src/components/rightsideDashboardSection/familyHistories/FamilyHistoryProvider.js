import React, { useState, createContext } from "react";

export const familyHistoriesContext = createContext();

export const FamilyHistoryProvider = (props) => {
    const [familyHistory, setFamilyHistory] = useState([])
    const [familyHistories, setFamilyHistories] = useState([]) //if ever need all users' family histories

    const getFamilyHistories = () => {
        return fetch("http://localhost:8090/familyHistories?_expand=relation")
        .then(response => response.json())
        .then(setFamilyHistories)
    };


    const getFamilyHistoryById = (id) => {
        return fetch(`http://localhost:8090/familyHistories${id}?_expand=relation`) //this is grabbing by the familyHistoryId not userId 
        .then(response => response.json())
        .then((familyHistory) => {
            setFamilyHistory()
        })
    };


    const addFamilyHistory = (familyHistoryObject) => {
        return fetch("http://localhost:8090/familyHistories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(familyHistoryObject)
        })
        .then(getFamilyHistories) //should it be getFamilyHistories??? or singular
    };


    const updateFamilyHistory = (familyHistory) => {
        return fetch(`http://localhost:8088/animals/${familyHistory.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(familyHistory)
    })
        .then(getFamilyHistories)
    };


    const deleteFamilyHistory = (familyHistoryId) => {
        return fetch(`http://localhost:8090/familyHistories/${familyHistoryId}`, {
        method: "DELETE"
        })
        .then(getFamilyHistories)
    };


    return (
        <familyHistoriesContext.Provider value={{
            familyHistory, setFamilyHistory, familyHistories, setFamilyHistories,
            getFamilyHistories, getFamilyHistoryById, addFamilyHistory, updateFamilyHistory,
            deleteFamilyHistory
        }}>
            {props.children}
        </familyHistoriesContext.Provider>
    )
};