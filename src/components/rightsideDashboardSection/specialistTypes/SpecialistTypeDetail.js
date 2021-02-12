import React, { useContext, useEffect, useState } from "react";
import { SpecialistTypeContext } from "./SpecialistTypeProvider";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';


export const SpecialistTypeDetail = () => {
  const { getSpecialistTypeByIdEmbeddedItems } = useContext(SpecialistTypeContext)

  const [specialistType, setSpecialistType] = useState({})

    const { specialistTypeId } = useParams();  


  useEffect(() => { 
    console.log("object?", specialistTypeId)
    getSpecialistTypeByIdEmbeddedItems(specialistTypeId)
    .then((response) => {
      setSpecialistType(response)
    })
    }, [])

    const history = useHistory()


  
return (
    <section className="specialistType">
      <h3 className="specialistType__name">{specialistType.speciality} ({specialistType.specialistName})</h3>
      <h5>Appointment Notes: </h5>
      <div className="specialistType__appointmentNote__and__date">{specialistType.appointmentsBySpecialist?.map(note => {return <p>{note.appointmentDate} {note.appointmentNote}</p>})} </div>
      <button onClick={() => {
        history.push(`/AppointmentNote/create/${specialistType.id}`) 
        }}>Add</button>
      <h5>Questions:  </h5>
      <div className="specialistType__questions">{specialistType.questions?.map(question => {return question.questions})}</div>
      <button onClick={() => {
        history.push(`/Questions/edit/${specialistType.id}`) 
        }}>Edit</button>
    </section>
  )

}