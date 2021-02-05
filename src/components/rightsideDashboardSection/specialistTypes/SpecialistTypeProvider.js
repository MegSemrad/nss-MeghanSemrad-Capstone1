import React, { useState, createContext } from "react";



export const SpecialistTypeContext = createContext();



export const SpecialistTypeProvider = (props) => {
    const [specialistTypes, setSpecialistTypes] = useState([])



    const getSpecialistTypes = () => {
        return fetch ("http://localhost:8090/specialistTypes?_embed=appointmentsBySpecialist")
        .then(response => response.json())
        .then(setSpecialistTypes)
    }
    


    const addSpecialistType = specialistTypeObj => {
        return fetch("http://localhost:8090/specialistTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(specialistTypeObj)
        })
        .then(getSpecialistTypes)
    };



    const getSpecialistTypeById = (id) => {
        return fetch(`http://localhost:8090/specialistTypes/${id}?_embed=appointmentsBySpecialist`)
            .then(res => res.json())
    };



    const deleteSpecialistTypeById = specialistTypeId => {
        return fetch(`http://localhost:8090/specialistTypes/${specialistTypeId}`, {
            method: "DELETE"
        })
            .then(getSpecialistTypes)
    };
  


    const updateSpecialistType = specialistType => {
      return fetch(`http://localhost:8090/specialistTypes/${specialistType.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(specialistType)
      })
      .then(getSpecialistTypes)
    };



    return (
        <SpecialistTypeContext.Provider value={{
            specialistTypes, setSpecialistTypes, getSpecialistTypes, addSpecialistType, 
            getSpecialistTypeById, deleteSpecialistTypeById, updateSpecialistType
        }}>
         {props.children}
        </SpecialistTypeContext.Provider>
    )
};
