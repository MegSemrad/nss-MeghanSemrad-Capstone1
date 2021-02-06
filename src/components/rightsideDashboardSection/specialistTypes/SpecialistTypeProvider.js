import React, { useState, createContext } from "react";



export const SpecialistTypeContext = createContext();



export const SpecialistTypeProvider = (props) => {
    const [specialistType, setSpecialistType] = useState([]);
    const [specialistTypes, setSpecialistTypes] = useState([]); 



    const getSpecialistTypes = () => {
        return fetch (`http://localhost:8090/specialistTypes/`)
        .then(response => response.json())
        .then(setSpecialistTypes)
    };
   

    const getSpecialistTypeByIdEmbeddedItems = (id) => {
        return fetch(`http://localhost:8090/specialistTypes/${id}?_embed=appointmentsBySpecialist&_embed=questions`)
            .then(res => res.json())
            .then((specialist) => {
                setSpecialistType(specialist)
            })
    };



    const addSpecialistType = specialistTypeObj => {
        return fetch("http://localhost:8090/specialistTypes?_embed=appointmentsBySpecialist&_embed=questions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(specialistTypeObj)
        })
        .then(getSpecialistTypeByIdEmbeddedItems )
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
            getSpecialistTypes, getSpecialistTypeByIdEmbeddedItems , addSpecialistType, deleteSpecialistTypeById,
            updateSpecialistType
        }}>
         {props.children}
        </SpecialistTypeContext.Provider>
    )
};
