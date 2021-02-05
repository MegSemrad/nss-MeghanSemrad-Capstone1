import React, { useContext, useEffect, useState } from "react"
import { AppointmentBySpecialistContext } from "./AppointmentBySpecialistProvider";
import { useHistory, useParams } from 'react-router-dom';

export const AppointmentBySpecialistForm = () => {
    const { addAppointmentBySpecialist, getAppointmentsBySpecialist, getAppointmentBySpecialistById, updateAppointmentBySpecialist } = useContext(AppointmentBySpecialistContext)

  
    const [appointmentsBySpecialist, setAppointmentsBySpecialist] = useState({
        appointmentNote: "",
        speciality: "",
        appointmentNote: "",
        appointmentDate: "",
        questions: ""
    })

    
    const [isLoading, setIsLoading] = useState(true);

    
    const { appointmentBySpecialistId } = useParams();
	  const history = useHistory();

   
    const handleControlledInputChange = (event) => {
      const newAppointmentBySpecialist = { ...appointmentsBySpecialist }
      newAppointmentBySpecialist[event.target.id] = event.target.value
      setAppointmentsBySpecialist(newAppointmentBySpecialist)
    }

    const handleSaveAppointmentBySpecialist = () => {
        setIsLoading(true);
        if (appointmentBySpecialistId){
            updateAppointmentBySpecialist({
              id: appointmentsBySpecialist.id,
              userID: appointmentsBySpecialist.userId,
              speciality: appointmentsBySpecialist.specialistType?.speciality,
              questions: appointmentsBySpecialist.specialistType?.questions,
              specialistTypeId: appointmentsBySpecialist.specialistTypeId,
              appointmentDate: appointmentsBySpecialist.appointmentDate,
              appointmentNote: appointmentsBySpecialist.appointmentNote
          })
          .then(() => history.push(`/AppointmentBySpecialist/detail/${appointmentsBySpecialist.id}`))
        }else {
            addAppointmentBySpecialist({
                id: appointmentsBySpecialist.id,
                userID: appointmentsBySpecialist.userId,
                speciality: appointmentsBySpecialist.specialistType?.speciality,
                questions: appointmentsBySpecialist.specialistType?.questions,
                specialistTypeId: appointmentsBySpecialist.specialistTypeId,
                appointmentDate: appointmentsBySpecialist.appointmentDate,
                appointmentNote: appointmentsBySpecialist.appointmentNote
          })
          .then(() => history.push("/AppointmentBySpecialist"))
        }
      }

      useEffect(() => {
        getAppointmentsBySpecialist().then(() => {
            if (appointmentBySpecialistId) {
                getAppointmentBySpecialistById(appointmentBySpecialistId).then(() => {
                    setIsLoading(false)
                })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    return (
      <form className="appointmentBySpecialistForm rightSideChildCSS">
        <h2 className="appointmentBySpecialistForm__title">Appointment</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="speciality">Speciality: </label>
            <input type="text" id="speciality" required autoFocus className="form-control"
            placeholder="Speciality"
            onChange={handleControlledInputChange}
            value={appointmentsBySpecialist.specialistType?.speciality}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="appointmentNote">Appointment Note: </label>
            <input type="text" id="appointmentNote" required autoFocus className="form-control"
            placeholder="Appointment Notes"
            onChange={handleControlledInputChange}
            value={appointmentsBySpecialist.appointmentNote}/>
          </div>
          <div className="form-group">
            <label htmlFor="appointmentDate">Appointment Date: </label>
            <input type="date" id="appointmentDate" required autoFocus className="form-control"
            onChange={handleControlledInputChange}
            value={appointmentsBySpecialist.appointmentDate}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="questions">Questions: </label>
            <input type="text" id="questions" required autoFocus className="form-control"
            placeholder="Appointment Notes"
            onChange={handleControlledInputChange}
            value={appointmentsBySpecialist.specialistType?.questions}/>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveAppointmentBySpecialist()
          }}>
        {appointmentBySpecialistId? "Save Changes" : "Save"}</button>
      </form>
    )
}
