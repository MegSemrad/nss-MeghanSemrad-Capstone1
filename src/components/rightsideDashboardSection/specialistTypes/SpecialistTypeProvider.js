import React, { useState, createContext } from "react";



export const SpecialistTypeContext = createContext();



export const SpecialistTypeProvider = (props) => {
    const [specialistType, setSpecialistType] = useState([]);
    const [specialistTypes, setSpecialistTypes] = useState([]); 
    const [questions, setQuestions] = useState([]);
    const [appointmentBySpecialist, setAppointmentbySpecialist] = useState([]);



    const getSpecialistTypes = () => {
        return fetch (`http://localhost:8090/specialistTypes/`)
        .then(response => response.json())
        .then(setSpecialistTypes)
    };
   

    const getSpecialistTypeByIdEmbeddedItems = (id) => {
        return fetch(`http://localhost:8090/specialistTypes/${id}?_embed=appointmentsBySpecialist&_embed=questions`)
        .then(res => res.json())
    };


    const addSpecialistType = specialistTypeObj => {
        return fetch("http://localhost:8090/specialistTypes/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(specialistTypeObj)
        })
        .then(res => res.json())
        .then((newSpecialistType) => { 
            console.log( "new specialit", newSpecialistType)  //returning newly created object that will have id 
            return newSpecialistType
        })
    };
    

    const updateSpecialistType = specialistTypeObject => {
        return fetch(`http://localhost:8090/specialistTypes/${specialistTypeObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(specialistTypeObject)
        })
        .then(getSpecialistTypes)
    };
    

    const deleteSpecialistTypeById = specialistTypeId => {
        return fetch(`http://localhost:8090/specialistTypes/${specialistTypeId}?_embed=questions`, {
            method: "DELETE"
        })
            .then(getSpecialistTypeByIdEmbeddedItems)
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
        .then(getSpecialistTypeByIdEmbeddedItems)
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





    const getAppointmentBySpecialist = () => {
        return fetch (`http://localhost:8090/appointmentsBySpecialist/`)
        .then(response => response.json())
        .then(setAppointmentbySpecialist)
    };


    const addAppointmentBySpecialist = appointmentObj => {
        return fetch("http://localhost:8090/appointmentsBySpecialist/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(appointmentObj)
        })
        .then(setSpecialistType)
    };
   

    const updateAppointmentBySpecialist = appointmentBySpecialistObject => {
      return fetch(`http://localhost:8090/appointmentsBySpecialist/${appointmentBySpecialistObject.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(appointmentBySpecialistObject)
      })
      .then(getAppointmentBySpecialist)
    };



    return (
        <SpecialistTypeContext.Provider value={{
            specialistType, specialistTypes, setSpecialistType,  setSpecialistTypes,
            getSpecialistTypes, getSpecialistTypeByIdEmbeddedItems , addSpecialistType, 
            addQuestion, addAppointmentBySpecialist, deleteSpecialistTypeById, updateQuestions, 
            updateSpecialistType, updateAppointmentBySpecialist, getQuestions, getAppointmentBySpecialist, 
            questions, setQuestions, appointmentBySpecialist, setAppointmentbySpecialist
        }}>
         {props.children}
        </SpecialistTypeContext.Provider>
    )
};