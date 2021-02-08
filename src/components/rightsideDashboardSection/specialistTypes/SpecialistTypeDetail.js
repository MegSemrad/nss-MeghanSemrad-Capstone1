import React, { useContext, useEffect, useState } from "react";
import { SpecialistTypeContext } from "./SpecialistTypeProvider";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';


export const SpecialistTypeDetail = () => {
  const { getSpecialistTypeByIdEmbeddedItems, deleteSpecialistTypeById } = useContext(SpecialistTypeContext)

  const [specialist, setSpecialist] = useState({})

    const { specialistTypeId } = useParams();  


  useEffect(() => { 
    getSpecialistTypeByIdEmbeddedItems(specialistTypeId)
    .then((response) => {
      setSpecialist(response)
        
    })
    }, [])

    const history = useHistory()

// const handleRelease = () => {
//     deleteSpecialistTypeById(specialistType.id)
//       .then(() => {
//         history.push("/SpecialistType") 
//       })
//   }


  
return (
    <section className="specialistType">
      <h3 className="specialistType__name">{specialist.speciality} ({specialist.specialistName})</h3>
      <div className="specialistType__appointmentNote__and__date">Appointment Note: {specialist.appointmentsBySpecialist?.map(note => {return note.appointmentNote})} {specialist.appointmentsBySpecialist?.map(date => {return date.appointmentDate})}</div>
      <div className="specialistType__questions">Questions: {specialist.questions?.map(question => {return question.questions})}</div>
      {/* <button onClick={handleRelease}>Delete</button> */}
      <button onClick={() => {
        history.push(`/SpecialistType/edit/${specialist.id}`) 
        }}>Edit</button>
    </section>
  )

}