import React, { useContext, useEffect, useState } from "react";
import { SpecialistTypeContext } from "./SpecialistTypeProvider";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';


export const SpecialistTypeDetail = () => {
  const { getSpecialistTypeById, deleteSpecialistTypeById } = useContext(SpecialistTypeContext)

	const [specialistType, setSpecialistType] = useState({})

    const { specialistTypeId } = useParams();  

  useEffect(() => { 
    getSpecialistTypeById(specialistTypeId)
    .then((response) => {
        setSpecialistType(response)
    })
    }, [])

    const history = useHistory()

const handleRelease = () => {
    deleteSpecialistTypeById(specialistType.id)
      .then(() => {
        history.push("/SpecialistType") 
      })
  }

  return (
    <section className="specialistType">
      <h3 className="specialistType__name">{specialistType.speciality}</h3>
      <div className="specialistType__appointmentNote__and__date">Appointment Note: {specialistType.appointmentsBySpecialist?.appointmentNote} {specialistType.appointmentsBySpecialist?.appointmentDate}</div>
      <div className="specialistType__questions">Questions: {specialistType.questions}</div>
      <button onClick={handleRelease}>Delete</button>
      <button onClick={() => {
        history.push(`/SpecialistType/edit/${specialistType.id}`) 
        }}>Edit</button>
    </section>
  )

}