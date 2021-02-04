import React, { useContext, useEffect, useState } from "react"
import { AppointmentBySpecialistContext } from "./AppointmentBySpecialistProvider";
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom';


export const AppointmentBySpecialistDetail = () => {
  const { getAppointmentBySpecialistById, deleteAppointmentBySpecialistById } = useContext(AppointmentBySpecialistContext)

	const [appointmentBySpecialist, setAppointmentsBySpecialist] = useState({})

    const {appointmentBySpecialistId} = useParams();  

  useEffect(() => { 
    getAppointmentBySpecialistById(appointmentBySpecialistId)
    .then((response) => {
        setAppointmentsBySpecialist(response)
    })
    }, [])

    const history = useHistory()

const handleRelease = () => {
    deleteAppointmentBySpecialistById(appointmentBySpecialist.id)
      .then(() => {
        history.push("/AppointmentBySpecialist") 
      })
  }

  return (
    <section className="appointmentBySpecialist">
      <h3 className="appointmentBySpecialist__name">{appointmentBySpecialist.specialistType?.speciality}</h3>
      <div className="appointmentBySpecialist__breed">Breed: {appointmentBySpecialist.appointmentNote}</div>
      <div className="appointmentBySpecialist__location">Location: {appointmentBySpecialist.location?.questions}</div>
      <button onClick={handleRelease}>Delete</button>
      <button onClick={() => {
        history.push(`/patientDetails/edit/${appointmentBySpecialist.id}`) 
        }}>Edit</button>
    </section>
  )

}