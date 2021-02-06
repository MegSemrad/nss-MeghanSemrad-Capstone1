// import React, { useContext, useEffect, useState } from "react";
// import { SpecialistTypeContext } from "./SpecialistTypeProvider";
// import { useParams } from "react-router-dom";
// import { useHistory } from 'react-router-dom';


// export const SpecialistTypeDetail = () => {
//   const { getSpecialistTypesByUserId, deleteSpecialistTypeById } = useContext(SpecialistTypeContext)

// 	const [specialistTypesByUserId, setSpecialistTypeByUserId] = useState({})

//     const { specialistTypeId } = useParams();  

//   useEffect(() => { 
//     getSpecialistTypesByUserId(specialistTypeId)
//     .then((response) => {
//         setSpecialistTypeByUserId(response)
//     })
//     }, [])

//     const history = useHistory()

// // const handleRelease = () => {
// //     deleteSpecialistTypeById(specialistType.id)
// //       .then(() => {
// //         history.push("/SpecialistType") 
// //       })
// //   }

//   return (
//     <section className="specialistType">
//       <h3 className="specialistType__name">{specialistTypesByUserId.specialistTypes[].speciality}</h3>
//       <div className="specialistType__appointmentNote__and__date">Appointment Note: {specialistTypesByUserId.appointmentsBySpecialist?.appointmentNote} {specialistTypesByUserId.appointmentsBySpecialist?.appointmentDate}</div>
//       <div className="specialistType__questions">Questions: {specialistTypesByUserId.questions?.questions}</div>
//       {/* <button onClick={handleRelease}>Delete</button> */}
//       <button onClick={() => {
//         history.push(`/SpecialistType/edit/${specialistTypesByUserId.id}`) 
//         }}>Edit</button>
//     </section>
//   )

// }