import React, { useContext, useState } from "react";
import { ProviderContext } from "./ProviderDataProvider";
import { useHistory } from 'react-router-dom';


export const ProviderForm = () => {
  const userId = parseInt(localStorage.getItem("app_user"))
  const history = useHistory();
  
  
  const { addProvider } = useContext(ProviderContext);
  const {addQuestion} = useContext(ProviderContext);
  const { addAppointmentByProvider } = useContext(ProviderContext);


  const [provider, setProvider] = useState({
    userId: 0,
    providerId: 0,
    speciality: "",
    providerName: "",
    questions: "",
    appointmentNote: "",
    appointmentDate: ""
  }); 



  const handleControlledInputChange = (event) => {
    const newProvider = { ...provider }
    newProvider[event.target.id] = event.target.value
    setProvider(newProvider)
  };

      
  const handleSaveProvider = () => {
      addProvider({
        id: provider.id,
        userId: userId,
        speciality: provider.speciality,
        providerName: provider.providerName,
      })
      .then((newProvider) => { //this is the object return after POST-ing to the database 
        addQuestion({
          id: provider.id,
          userId: userId,
          providerId: newProvider.id,
          questions: provider.questions
        })
        addAppointmentByProvider({
          id: provider.id,
          userId: userId,
          providerId: newProvider.id,
          appointmentDate: provider.appointmentDate,
          appointmentNote: provider.appointmentNote
        })
      })
      .then(() => history.push("/Providers"))
};


    return (
      <form className="ProviderForm rightSideChildCSS">
        <h2 className="ProviderForm__title">Appointment</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="speciality">Speciality: </label>
            <input type="text" id="speciality" required autoFocus className="form-control"
            placeholder="Speciality"
            onChange={handleControlledInputChange}
            value={provider.speciality}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="providerName">Provider Name: </label>
            <input type="text" id="providerName" required autoFocus className="form-control"
            placeholder="Provider Name"
            onChange={handleControlledInputChange}
            value={provider.providerName}/>
          </div>
        </fieldset>
        
        <section>
          <fieldset>
            <div className="form-group">
              <label htmlFor="appointmentNote">Appointment Note: </label>
              <input type="text" id="appointmentNote" required autoFocus className="form-control"
              placeholder="Appointment Notes"
              onChange={handleControlledInputChange}
              value={provider.appointmentsByProvider?.appointmentNote}/>
            </div>
            <div className="form-group">
              <label htmlFor="appointmentDate">Appointment Date: </label>
              <input type="date" id="appointmentDate" required autoFocus className="form-control"
              onChange={handleControlledInputChange}
              value={provider.appointmentsByProvider?.appointmentDate}/>
            </div>
          </fieldset>
        </section>


        <fieldset>
          <div className="form-group">
            <label htmlFor="questions">Questions: </label>
            <input type="text" id="questions" required autoFocus className="form-control"
            placeholder="Questions"
            onChange={handleControlledInputChange}
            value={provider.questions}/>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          id="app_button"
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveProvider()
          }}>Save</button>
      </form>
    )
};