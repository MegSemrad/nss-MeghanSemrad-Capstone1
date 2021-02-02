import React, { useContext, useEffect, useState } from "react";
import { basePatientDetailsContext } from "../permanentDashboardProvider";
// import "./??.css";
import { useHistory } from 'react-router-dom';

export const PatientDetailForm = () => {
    const { addBasePatientDetails, getBasePatientDetails } = useContext(basePatientDetailsContext)

    const [basePatientDetails, setBasePatientDetails] = useState({
      name: "",
      birthday: "",
      emergencyContactName: "",
      emergencyContactRelation: "",
      emergencyContactPhoneNumber: ""
    });

    const history = useHistory();

   
    useEffect(() => {
        getBasePatientDetails()
    }, [])

  
    const handleControlledInputChange = (event) => {
      const newPatientDetails = { ...basePatientDetails }
      let selectedVal = event.target.value
      if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
      }
      newPatientDetails[event.target.id] = selectedVal
      setBasePatientDetails(newPatientDetails)
    }

    const handleClickSavePatientDetails = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form
    //   const locationId = employee.locationId
    //   if (locationId === 0 ) {
    //     window.alert("Please select a location")
    //   } else {
        addBasePatientDetails(basePatientDetails)
        .then(() => history.push("/landingpage"))
      }
    // }

    return (
      <form className="patientDetailsForm">
          <h2 className="patientDetailsForm__title">Patient Information</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Patient name:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Patient name" value={basePatientDetails.name}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="locationId">Birthday: </label>
                  <input type="text" id="birthday" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Birthday" value={basePatientDetails.birthday}/>
              </div>
          </fieldset>
          <button className="btn btn-primary"
            onClick={handleClickSavePatientDetails}>
            Save
          </button>
      </form>
    )
}