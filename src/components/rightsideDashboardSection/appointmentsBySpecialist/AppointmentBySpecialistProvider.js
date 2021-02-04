import React, { useState, createContext } from "react";

export const AppointmentBySpecialistContext = createContext();


export const AppointmentBySpecialistProvider = (props) => {
    const [appointmentsBySpecialist, setAppointmentsBySpecialist] = useState([])

    const getappointmentsBySpecialist = () => {
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
        .then(getappointmentsBySpecialist)
    };


    const getAppointmentBySpecialistById= (id) => {
        return fetch(`http://localhost:8090/appointmentsBySpecialist/${id}?_expand=specialistType`)
            .then(res => res.json())
    };

    return (
        <AppointmentBySpecialistContext.Provider value={{
            appointmentsBySpecialist, getappointmentsBySpecialist, setAppointmentsBySpecialist, addAppointmentBySpecialist, getAppointmentBySpecialistById
        }}>
         {props.children}
        </AppointmentBySpecialistContext.Provider>
    )
};