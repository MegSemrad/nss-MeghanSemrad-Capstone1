import React, { useContext, useEffect, useState } from "react"
import { SpecialistTypeContext } from "./SpecialistTypeProvider";
import { useHistory, useParams } from 'react-router-dom';

export const SpecialistTypeForm = () => {
    const {specialistTypes, addSpecialistType, getSpecialistTypes, getSpecialistTypeByIdEmbeddedItems, addQuestion, addAppointmentBySpecialist, updateSpecialistType } = useContext(SpecialistTypeContext)
    // const [fields, setFields] = useState([{ value: null }]);
  
    const [specialistType, setSpecialistType] = useState({
      userId: 0,
      specialistTypeId: 0,
      speciality: "",
      specialistName: "",
      questions: "",
      appointmentNote: "",
      appointmentDate: ""
    }) 
    const userId = parseInt(localStorage.getItem("app_user"))
    
    const [isLoading, setIsLoading] = useState(true);

    
    const { specialistTypeId } = useParams(); //recieved this specialistId from URL when user presses "Edit" button
	  const history = useHistory();



    //  below is the add another field stuff -- also line 7 above 
  //   // ______________________________________________________________
  //   function handleChange(i, event) {
  //     const values = [...fields];
  //     values[i].value = event.target.value;
  //     setFields(values);
  //   }
  
  //   function handleAdd() {
  //     const values = [...fields];
  //     values.push({ value: null });
  //     setFields(values);
  //   }
  
  //   function handleRemove(i) {
  //     const values = [...fields];
  //     values.splice(i, 1);
  //     setFields(values);
  //   }
  // // ______________________________________________________________
   
    const handleControlledInputChange = (event) => {
      const newspecialistType = { ...specialistType }
      newspecialistType[event.target.id] = event.target.value
      setSpecialistType(newspecialistType)
    }

       
    const handleSaveSpecialistType = () => {
      setIsLoading(true);
      if (specialistTypeId) {
        updateSpecialistType({
          id: specialistType.id,
          userId: userId,
          speciality: specialistType.speciality,
          specialistName: specialistType.specialistName,
          questions: specialistType.questions,
          specialistTypeId: specialistType.specialistTypeId,
          appointmentDate: specialistType.appointmentsBySpecialist?.appointmentDate,
          appointmentNote: specialistType.appointmentsBySpecialist?.appointmentNote
        })
        // updateQuestions({
        //   id: specialistType.id,
        //   userId:userId,
        //   specialistTypeId:
        //   questions:
        // })
        .then(() => history.push(`/SpecialistType/detail/${specialistType.id}`))
      }
      else {
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
    }

      useEffect(() => {
        getSpecialistTypes().then(() => {
            if (specialistTypeId) {
              getSpecialistTypeByIdEmbeddedItems(specialistTypeId).then(() => {
                    setIsLoading(false)
                })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

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
          <button>Add another</button>
        </section>



        {/* <button type="button" onClick={() => handleAdd()}>
          Add another
        </button>
          {fields.map((field, idx) => {
            return (
            <div key={`${field}-${idx}`}>
              
              <input
                type="text" 
                value={field.value} 
                placeholder="Enter text"
                onChange={e => handleChange(idx, e)}
              />
              <button type="button" onClick={() => handleRemove(idx)}>
                Cancel
              </button>
            </div>
        );
      })} */}



        <fieldset>
          <div className="form-group">
            <label htmlFor="questions">Questions: </label>
            <input type="text" id="questions" required autoFocus className="form-control"
            placeholder="Appointment Notes"
            onChange={handleControlledInputChange}
            value={specialistType.questions}/>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveSpecialistType()
          }}>
        {specialistTypeId? "Save Changes" : "Save"}</button>
      </form>
    )
}
