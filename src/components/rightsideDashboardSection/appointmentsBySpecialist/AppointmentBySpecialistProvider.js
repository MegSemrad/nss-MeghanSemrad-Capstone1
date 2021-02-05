import React, { useState, createContext } from "react";

export const AppointmentBySpecialistContext = createContext();


export const AppointmentBySpecialistProvider = (props) => {
    const [appointmentsBySpecialist, setAppointmentsBySpecialist] = useState([])

    const getAppointmentsBySpecialist = () => {
        return fetch ("http://localhost:8090/appointmentsBySpecialist?_expand=specialistType")
        .then(res => res.json())
        .then(setAppointmentsBySpecialist)
    }

    const addAppointmentBySpecialist = appointmentBySpeicalistObj => {
        return fetch("http://localhost:8090/appointmentsBySpecialist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(appointmentBySpeicalistObj)
        })
        .then(getAppointmentsBySpecialist)
    };


    const getAppointmentBySpecialistById= (id) => {
        return fetch(`http://localhost:8090/appointmentsBySpecialist/${id}?_expand=specialistType`)
            .then(res => res.json())
    };


    const deleteAppointmentBySpecialistById = appointmentBySpecialistId => {
        return fetch(`http://localhost:8090/appointmentsBySpecialist/${appointmentBySpecialistId}`, {
            method: "DELETE"
        })
            .then(getAppointmentsBySpecialist)
    };
  
    const updateAppointmentBySpecialist = appointmentBySpecialist => {
      return fetch(`http://localhost:8090/appointmentsBySpecialist/${appointmentBySpecialist.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(appointmentBySpecialist)
      })
      .then(getAppointmentsBySpecialist)
    };
    return (
        <AppointmentBySpecialistContext.Provider value={{
            appointmentsBySpecialist, getAppointmentsBySpecialist, setAppointmentsBySpecialist, 
            addAppointmentBySpecialist, getAppointmentBySpecialistById, deleteAppointmentBySpecialistById, 
            updateAppointmentBySpecialist
        }}>
         {props.children}
        </AppointmentBySpecialistContext.Provider>
    )
};