import React, { useContext, useState } from "react"
import { SpecialistTypeContext } from "./SpecialistTypeProvider";
import { useHistory, useParams } from 'react-router-dom';


export const AppointmentNoteForm = () => {
    const userId = parseInt(localStorage.getItem("app_user"))
    const { specialistTypeId } = useParams();
    const history = useHistory();
    
    
    const { addAppointmentBySpecialist } = useContext(SpecialistTypeContext)
  
  
    const [appointmentNote, setAppointmentNote] = useState({
      userId: 0,
      specialistTypeId: 0,
      appointmentNote: "",
      appointmentDate: ""
    }); 


    const handleControlledInputChange = (event) => {
        const newAppointmentNote = { ...appointmentNote }
        newAppointmentNote[event.target.id] = event.target.value
        setAppointmentNote(newAppointmentNote)
      }


    const handleSaveAppointmentNote = () => {
        addAppointmentBySpecialist({
            id: appointmentNote.id,
            userId: userId,
            specialistTypeId: parseInt(specialistTypeId),
            appointmentNote: appointmentNote.appointmentNote,
            appointmentDate: appointmentNote.appointmentDate
        })
        .then(() => history.push(`/SpecialistType/detail/${specialistTypeId}`))
    }

    return (
        <form className="SpecialistTypeForm rightSideChildCSS">
          <h2 className="SpecialistTypeForm__title">Appointment</h2>
            <fieldset>
              <div className="form-group">
                <label htmlFor="appointmentNote">Appointment Note: </label>
                <input type="text" id="appointmentNote" required autoFocus className="form-control"
                placeholder="Appointment Notes"
                onChange={handleControlledInputChange}
                value={appointmentNote.appointmentNote}/>
              </div>
              <div className="form-group">
                <label htmlFor="appointmentDate">Appointment Date: </label>
                <input type="date" id="appointmentDate" required autoFocus className="form-control"
                onChange={handleControlledInputChange}
                value={appointmentNote.appointmentDate}/>
              </div>
            </fieldset>

          <button id="app_button" className="btn btn-primary"
            onClick={event => {
              event.preventDefault() // Prevent browser from submitting the form and refreshing the page
              handleSaveAppointmentNote()
            }}>Save</button>
        </form>
      )

}