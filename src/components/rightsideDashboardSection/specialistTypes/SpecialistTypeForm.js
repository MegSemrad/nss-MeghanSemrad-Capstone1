import React, { useContext, useState } from "react"
import { SpecialistTypeContext } from "./SpecialistTypeProvider";
import { useHistory } from 'react-router-dom';


export const SpecialistTypeForm = () => {
  const userId = parseInt(localStorage.getItem("app_user"))
  const history = useHistory();
  
  
  const { addSpecialistType } = useContext(SpecialistTypeContext)
  const {addQuestion} = useContext(SpecialistTypeContext)
  const { addAppointmentBySpecialist } = useContext(SpecialistTypeContext)


  const [specialistType, setSpecialistType] = useState({
    userId: 0,
    specialistTypeId: 0,
    speciality: "",
    specialistName: "",
    questions: "",
    appointmentNote: "",
    appointmentDate: ""
  }); 



  const handleControlledInputChange = (event) => {
    const newSpecialistType = { ...specialistType }
    newSpecialistType[event.target.id] = event.target.value
    setSpecialistType(newSpecialistType)
  }

      
  const handleSaveSpecialistType = () => {
      addSpecialistType({
        id: specialistType.id,
        userId: userId,
        speciality: specialistType.speciality,
        specialistName: specialistType.specialistName,
      })
      .then((newSpecialistType) => { //this is the object return after POST-ing to the database 
        addQuestion({
          id: specialistType.id,
          userId: userId,
          specialistTypeId: newSpecialistType.id,
          questions: specialistType.questions
        })
        addAppointmentBySpecialist({
          id: specialistType.id,
          userId: userId,
          specialistTypeId: newSpecialistType.id,
          appointmentDate: specialistType.appointmentDate,
          appointmentNote: specialistType.appointmentNote
        })
      })
      .then(() => history.push("/SpecialistType"))
}


    return (
      <form className="SpecialistTypeForm rightSideChildCSS">
        <h2 className="SpecialistTypeForm__title">Appointment</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="speciality">Speciality: </label>
            <input type="text" id="speciality" required autoFocus className="form-control"
            placeholder="Speciality"
            onChange={handleControlledInputChange}
            value={specialistType.speciality}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="specialistName">Specialist Name: </label>
            <input type="text" id="specialistName" required autoFocus className="form-control"
            placeholder="Specialist Name"
            onChange={handleControlledInputChange}
            value={specialistType.specialistName}/>
          </div>
        </fieldset>
        
        <section>
          <fieldset>
            <div className="form-group">
              <label htmlFor="appointmentNote">Appointment Note: </label>
              <input type="text" id="appointmentNote" required autoFocus className="form-control"
              placeholder="Appointment Notes"
              onChange={handleControlledInputChange}
              value={specialistType.appointmentsBySpecialist?.appointmentNote}/>
            </div>
            <div className="form-group">
              <label htmlFor="appointmentDate">Appointment Date: </label>
              <input type="date" id="appointmentDate" required autoFocus className="form-control"
              onChange={handleControlledInputChange}
              value={specialistType.appointmentsBySpecialist?.appointmentDate}/>
            </div>
          </fieldset>
        </section>


        <fieldset>
          <div className="form-group">
            <label htmlFor="questions">Questions: </label>
            <input type="text" id="questions" required autoFocus className="form-control"
            placeholder="Questions"
            onChange={handleControlledInputChange}
            value={specialistType.questions}/>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          id="app_button"
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveSpecialistType()
          }}>Save</button>
      </form>
    )
}
