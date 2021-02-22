import React, { useState, createContext } from "react";


export const ProviderContext = createContext();


export const ProviderDataProvider = (props) => {
    const [provider, setProvider] = useState([]);
    const [providers, setProviders] = useState([]); 
    const [questions, setQuestions] = useState([]);


    const getProviders = () => {
        return fetch (`http://localhost:8090/providers/`)
        .then(response => response.json())
        .then(setProviders)
    };
   

    const getProviderByIdEmbeddedItems = (id) => {
        return fetch(`http://localhost:8090/providers/${id}?_embed=appointmentNotes&_embed=questions`)
        .then(res => res.json())
    };


    const addProvider = providerObj => {
        return fetch("http://localhost:8090/providers/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(providerObj)
        })
        .then(res => res.json())
        .then((newProvider) => {  
            return newProvider
        })
    };
    




    const getQuestions = () => {
        return fetch ("http://localhost:8090/questions/")
        .then(response => response.json())
        .then((questions) => {
            setQuestions(questions)
            return questions
        })
    };


    const addQuestion = questionObj => {
        return fetch("http://localhost:8090/questions/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(questionObj)
        })
        .then(getProviderByIdEmbeddedItems)
    };




    
    const addAppointmentNote = appointmentObj => {
        return fetch("http://localhost:8090/appointmentNotes/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(appointmentObj)
        })
        .then(setProvider)
    };
   




    return (
        <ProviderContext.Provider value={{
            provider, setProvider, 
            providers, setProviders,
            getProviders, getProviderByIdEmbeddedItems, addProvider, addAppointmentNote,

            questions, setQuestions, 
            getQuestions, addQuestion
        }}>
         {props.children}
        </ProviderContext.Provider>
    )
};