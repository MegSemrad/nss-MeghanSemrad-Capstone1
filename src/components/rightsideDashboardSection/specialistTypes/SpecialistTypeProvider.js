import React, { useState, createContext } from "react";



export const SpecialistTypeContext = createContext();



export const SpecialistTypeProvider = (props) => {
    const [specialistType, setSpecialistType] = useState([{
        speciality: "",
        questions: "",
        appointmentNote: "",
        appointmentDate: ""
    }]);
    console.log("specialist object or array?", specialistType) //returns an object
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
        // .then((specialist) => {
        //         console.log("specialist?", specialist) //specialist is an object
        //         setSpecialistType(specialist)
        //     })
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
