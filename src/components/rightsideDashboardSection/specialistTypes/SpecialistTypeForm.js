// import React, { useContext, useEffect, useState } from "react"
// import { SpecialistTypeContext } from "./SpecialistTypeProvider";
// import { useHistory, useParams } from 'react-router-dom';

// export const SpecialistTypeForm = () => {
//     const { addSpecialistType, getSpecialistTypes, getSpecialistTypeById, updateSpecialistType } = useContext(SpecialistTypeContext)

  
//     const [specialistTypes, setSpecialistTypes] = useState({
//         speciality: "",
//         questions: "",
//         appointmentNote: "",
//         appointmentDate: ""
//     })

    
//     const [isLoading, setIsLoading] = useState(true);

    
//     const { specialistTypeId } = useParams();
// 	  const history = useHistory();

   
//     const handleControlledInputChange = (event) => {
//       const newspecialistType = { ...specialistTypes }
//       newspecialistType[event.target.id] = event.target.value
//       setSpecialistTypes(newspecialistType)
//     }

//     const handleSaveSpecialistType = () => {
//         setIsLoading(true);
//         if (specialistTypeId){
//             updateSpecialistType({
//               id: specialistTypes.id,
//               userID: specialistTypes.userId,
//               speciality: specialistTypes.speciality,
//               questions: specialistTypes.questions,
//               specialistTypeId: specialistTypes.specialistTypeId,
//               appointmentDate: specialistTypes.appointmentsBySpecialist?.appointmentDate,
//               appointmentNote: specialistTypes.appointmentsBySpecialist?.appointmentNote
//           })
//           .then(() => history.push(`/SpecialistType/detail/${specialistTypes.id}`))
//         }else {
//             addSpecialistType({
//                 id: specialistTypes.id,
//                 userID: specialistTypes.userId,
//                 speciality: specialistTypes.speciality,
//                 questions: specialistTypes.questions,
//                 specialistTypeId: specialistTypes.specialistTypeId,
//                 appointmentDate: specialistTypes.appointmentsBySpecialist?.appointmentDate,
//                 appointmentNote: specialistTypes.appointmentsBySpecialist?.appointmentNote
//           })
//           .then(() => history.push("/SpecialistType"))
//         }
//       }

//       useEffect(() => {
//         getSpecialistTypes().then(() => {
//             if (specialistTypeId) {
//                 getSpecialistTypeById(specialistTypeId).then(() => {
//                     setIsLoading(false)
//                 })
//             } else {
//                 setIsLoading(false)
//             }
//         })
//     }, [])

//     return (
//       <form className="SpecialistTypeForm rightSideChildCSS">
//         <h2 className="SpecialistTypeForm__title">Appointment</h2>
//         <fieldset>
//           <div className="form-group">
//             <label htmlFor="speciality">Speciality: </label>
//             <input type="text" id="speciality" required autoFocus className="form-control"
//             placeholder="Speciality"
//             onChange={handleControlledInputChange}
//             value={specialistTypes.speciality}/>
//           </div>
//         </fieldset>
//         <fieldset>
//           <div className="form-group">
//             <label htmlFor="appointmentNote">Appointment Note: </label>
//             <input type="text" id="appointmentNote" required autoFocus className="form-control"
//             placeholder="Appointment Notes"
//             onChange={handleControlledInputChange}
//             value={specialistTypes.appointmentsBySpecialist?.appointmentNote}/>
//           </div>
//           <div className="form-group">
//             <label htmlFor="appointmentDate">Appointment Date: </label>
//             <input type="date" id="appointmentDate" required autoFocus className="form-control"
//             onChange={handleControlledInputChange}
//             value={specialistTypes.appointmentsBySpecialist?.appointmentDate}/>
//           </div>
//         </fieldset>
//         <fieldset>
//           <div className="form-group">
//             <label htmlFor="questions">Questions: </label>
//             <input type="text" id="questions" required autoFocus className="form-control"
//             placeholder="Appointment Notes"
//             onChange={handleControlledInputChange}
//             value={specialistTypes.questions}/>
//           </div>
//         </fieldset>
//         <button className="btn btn-primary"
//           disabled={isLoading}
//           onClick={event => {
//             event.preventDefault() // Prevent browser from submitting the form and refreshing the page
//             handleSaveSpecialistType()
//           }}>
//         {specialistTypeId? "Save Changes" : "Save"}</button>
//       </form>
//     )
// }
