import React, { useState, createContext } from "react";



export const ProviderContext = createContext();



export const ProviderDataProvider = (props) => {
    const [provider, setProvider] = useState([]);
    const [providers, setProviders] = useState([]); 
    const [questions, setQuestions] = useState([]);
    const [appointmentByProvider, setAppointmentbyProvider] = useState([]);



    const getProviders = () => {
        return fetch (`http://localhost:8090/providers/`)
        .then(response => response.json())
        .then(setProviders)
    };
   

    const getProviderByIdEmbeddedItems = (id) => {
        return fetch(`http://localhost:8090/providers/${id}?_embed=appointmentsByProvider&_embed=questions`)
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
    

    const updateProvider = providerObject => {
        return fetch(`http://localhost:8090/providers/${providerObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(providerObject)
        })
        .then(getProviders)
    };
    

    const deleteProviderById = providerId => {
        return fetch(`http://localhost:8090/providers/${providerId}?_embed=questions`, {
            method: "DELETE"
        })
            .then(getProviderByIdEmbeddedItems)
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


    const updateQuestions = questionsObject => {
        return fetch(`http://localhost:8090/questions/${questionsObject.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(questionsObject)
        })
        .then(getQuestions)
      };





    const getAppointmentByProvider = () => {
        return fetch (`http://localhost:8090/appointmentsByProvider/`)
        .then(response => response.json())
        .then(setAppointmentbyProvider)
    };


    const addAppointmentByProvider = appointmentObj => {
        return fetch("http://localhost:8090/appointmentsByProvider/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(appointmentObj)
        })
        .then(setProvider)
    };
   

    const updateAppointmentByProvider = appointmentByProviderObject => {
      return fetch(`http://localhost:8090/appointmentsByProvider/${appointmentByProviderObject.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(appointmentByProviderObject)
      })
      .then(getAppointmentByProvider)
    };



    return (
        <ProviderContext.Provider value={{
            provider, providers, setProvider, setProviders,
            getProviders, getProviderByIdEmbeddedItems , addProvider, 
            addQuestion, addAppointmentByProvider, deleteProviderById, updateQuestions, 
            updateProvider, updateAppointmentByProvider, getQuestions, getAppointmentByProvider, 
            questions, setQuestions, appointmentByProvider, setAppointmentbyProvider
        }}>
         {props.children}
        </ProviderContext.Provider>
    )
};