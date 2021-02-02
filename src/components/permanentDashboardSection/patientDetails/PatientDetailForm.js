import React, { useContext, useEffect, useState } from "react";
import { basePatientDetailsContext } from "../permanentDashboardProvider";
// import "./??.css";
import { useHistory, useParams } from 'react-router-dom';

export const PatientDetailForm = () => {
    const { addBasePatientDetails, getBasePatientDetails, getBasePatientDetailsById, updateBasePatientDetails } = useContext(basePatientDetailsContext)

    const [basePatientDetails, setBasePatientDetails] = useState({
      name: "",
      birthday: "",
      emergencyContactName: "",
      emergencyContactRelation: "",
      emergencyContactPhoneNumber: ""
    });

    const [isLoading, setIsLoading] = useState(true);

    const { basePatientDetailsId } = useParams();
    const history = useHistory();

   
    
    
    const handleControlledInputChange = (event) => {
        const newPatientDetails = { ...basePatientDetails }
            newPatientDetails[event.target.id] = event.target.value
            setBasePatientDetails(newPatientDetails)
        }
        
        
        
        const handleClickSavePatientDetails = () => {
                    setIsLoading(true);
                    if (basePatientDetailsId){
                        updateBasePatientDetails({
                            name: basePatientDetails.name,
                            birthday: basePatientDetails.birthday,
                            emergencyContactName: basePatientDetails.emergencyContactName,
                            emergencyContactRelation: basePatientDetails.emergencyContactRelation,
                            emergencyContactPhoneNumber: basePatientDetails.emergencyContactPhoneNumber,
                           
                        })
                        .then(() => history.push(`/patientDetails/detail/${basePatientDetails.id}`))
                    }else {
                        addBasePatientDetails({
                            name: basePatientDetails.name,
                            breed: basePatientDetails.breed,
                            emergencyContactName: basePatientDetails.emergencyContactName,
                            emergencyContactRelation: basePatientDetails.emergencyContactRelation,
                            emergencyContactPhoneNumber: basePatientDetails.emergencyContactPhoneNumber
                        })
                        .then(() => history.push("/landingpage"))
                    }
                }
            
         

      useEffect(() => {
        getBasePatientDetails().then(() => {
          if (basePatientDetailsId) {
            getBasePatientDetailsById(basePatientDetailsId)
            .then(basePatientDetails => {
                setBasePatientDetails(basePatientDetails)
                setIsLoading(false)
            })
          } else {
            setIsLoading(false)
          }
          })
        }, [])








    return (
      <form className="patientDetailsForm">
          <h2 className="patientDetailsForm__title">Patient Information</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Patient name:</label>
                  <input type="text" id="name" 
                    onChange={handleControlledInputChange} 
                    required autoFocus 
                    className="form-control" 
                    placeholder="Patient name" 
                    value={basePatientDetails.name}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="locationId">Birthday: </label>
                  <input type="text" id="birthday" 
                    onChange={handleControlledInputChange} 
                    required autoFocus 
                    className="form-control" 
                    placeholder="Birthday" 
                    value={basePatientDetails.birthday}/>
              </div>
          </fieldset>
          <h4 className="patientDetailsForm__emergencyContact__title">Emergency Contact</h4>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="emergencyContactNameId">Name: </label>
                  <input type="text" id="emergencyContactName" 
                    onChange={handleControlledInputChange} 
                    required autoFocus 
                    className="form-control" 
                    placeholder="Name" 
                    value={basePatientDetails.emergencyContactName}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="emergencyContactRelationId">Relation: </label>
                  <input type="text" id="emergencyContactRelation" 
                    onChange={handleControlledInputChange} 
                    required autoFocus 
                    className="form-control" 
                    placeholder="Relation" 
                    value={basePatientDetails.emergencyContactRelation}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="emergencyContactPhoneNumberId">Phone Number: </label>
                  <input type="text" id="emergencyContactPhoneNumber" 
                    onChange={handleControlledInputChange} 
                    required autoFocus 
                    className="form-control" 
                    placeholder="Phone Number" 
                    value={basePatientDetails.emergencyContactPhoneNumber}/>
              </div>
          </fieldset>
          <button className="btn btn-primary"
          disabled={isLoading}
            onClick={event => {
                event.preventDefault()
                handleClickSavePatientDetails()
            }}>
            {basePatientDetailsId ? "Save" : "Save Changes"}
          </button>
      </form>
    )
        }