import React, { useState, createContext } from "react";

export const RelativesContext = createContext();

export const RelativeProvider = (props) => {
    const [relative, setRelative] = useState([])
    const [relatives, setRelatives] = useState([]) //if ever need all users' family histories
    const [familyHistories, setFamilyHistories] = useState([])


    const getRelatives = () => {
        return fetch("http://localhost:8090/relatives?_embed=familyHistories")
        .then(response => response.json())
        .then(setRelatives)
    };


    const getRelativeById = (id) => {
        return fetch(`http://localhost:8090/relatives/${id}?_embed=familyHistories`)
        .then(response => response.json())
        .then((relative) => {
            setRelative()
        })
    };


    const getFamilyHistories = () => {
        return fetch("http://localhost:8090/familyHistories?_expand=relative")
        .then(response => response.json())
        .then(setFamilyHistories)
    }

    const getFamilyHistory = (id) => {
        return fetch(`http://localhost:8090/familyHistories/${id}`)
        .then(response => response.json())
        .then(getRelatives) //???
    }

    const addRelative = (relativeObject) => {
        return fetch("http://localhost:8090/relatives", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(relativeObject)
        })
        .then(getRelatives) 
    };


    const updateRelative = (relative) => {
        return fetch(`http://localhost:8090/relatives/${relative.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(relative)
    })
        .then(getRelatives)
    };


    const deleteFamilyHistory = (familyHistoryId) => {
        return fetch(`http://localhost:8090/familyHistories/${familyHistoryId}`, {
        method: "DELETE"
        })
        .then(getRelatives)
    };


    return (
        <RelativesContext.Provider value={{
            relative, setRelative, relatives, setRelatives, getRelatives, 
            getRelativeById, addRelative, updateRelative, deleteFamilyHistory,
            getFamilyHistories, familyHistories, setFamilyHistories, getFamilyHistory
        }}>
            {props.children}
        </RelativesContext.Provider>
    )
};