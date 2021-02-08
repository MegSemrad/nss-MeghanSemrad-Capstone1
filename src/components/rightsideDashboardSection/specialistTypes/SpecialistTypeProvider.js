import React, { useState, createContext } from "react";



export const SpecialistTypeContext = createContext();



export const SpecialistTypeProvider = (props) => {
    const [specialistType, setSpecialistType] = useState([]);
    console.log("specialist?", specialistType) //returns an object
    const [specialistTypes, setSpecialistTypes] = useState([]); 


// this only returns all specialists regardless of userID but nothing else
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




    const deleteSpecialistTypeById = specialistTypeId => {
        return fetch(`http://localhost:8090/specialistTypes/${specialistTypeId}?_embed=questions`, {
            method: "DELETE"
        })
            .then(getSpecialistTypeByIdEmbeddedItems )
    };
  


    const updateSpecialistType = specialistTypeObject => {
      return fetch(`http://localhost:8090/specialistTypes/${specialistTypeObject.id}?_embed=appointmentsBySpecialist&_embed=questions`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(specialistTypeObject)
      })
      .then(getSpecialistTypeByIdEmbeddedItems )
    };



    return (
        <SpecialistTypeContext.Provider value={{
            specialistType, specialistTypes, setSpecialistType,  setSpecialistTypes,
            getSpecialistTypes, getSpecialistTypeByIdEmbeddedItems , addSpecialistType, 
            addQuestion, addAppointmentBySpecialist, deleteSpecialistTypeById,
            updateSpecialistType
        }}>
         {props.children}
        </SpecialistTypeContext.Provider>
    )
};
