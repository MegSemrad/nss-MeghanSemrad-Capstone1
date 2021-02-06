import React, { useContext, useEffect, useState } from "react";
import { basePatientDetailsContext } from "../permanentDashboardProvider";
// import "./??.css";
import { useHistory, useParams } from 'react-router-dom';
import "../permanentDashboardSection.css"

export const PatientDetailForm = () => {
    const { basePatientDetails, setBasePatientDetails, addBasePatientDetails, getBasePatientDetails, getBasePatientDetailsById, updateBasePatientDetails } = useContext(basePatientDetailsContext)
    const userId = parseInt(localStorage.getItem("app_user"))

    const [isLoading, setIsLoading] = useState(true);
    const { basePatientDetailsId } = useParams();  //collected from URL the id of the exact basePatientDetails object
    const history = useHistory();

 


    const handleControlledInputChange = (event) => {
        const newPatientDetails = { ...basePatientDetails }
        newPatientDetails[event.target.id] = event.target.value
        setBasePatientDetails(newPatientDetails)
    }
 


    const handleClickSavePatientDetails = () => {
        setIsLoading(true);
        if (basePatientDetailsId) {
            updateBasePatientDetails({
                id: basePatientDetails.id,
                name: basePatientDetails.name,
                birthday: basePatientDetails.birthday,
                conditions: basePatientDetails.conditions,
                allergies: basePatientDetails.allergies,
                other: basePatientDetails.other,
                emergencyContactName: basePatientDetails.emergencyContactName,
                emergencyContactRelation: basePatientDetails.emergencyContactRelation,
                emergencyContactPhoneNumber: basePatientDetails.emergencyContactPhoneNumber,
                preferredPharmacyName: basePatientDetails.preferredPharmacyName,
                preferredPharmacyAddress: basePatientDetails.preferredPharmacyAddress,
                preferredPharmacyPhoneNumber: basePatientDetails.preferredPharmacyPhoneNumber
            })
                .then(() => history.push("/"))
        } else {
            addBasePatientDetails({
                userId: userId, //what to save the userId who is currently logged in on the new basePatientDetails object
                name: basePatientDetails.name,
                birthday: basePatientDetails.birthday,
                conditions: basePatientDetails.conditions,
                allergies: basePatientDetails.allergies,
                other: basePatientDetails.other,
                emergencyContactName: basePatientDetails.emergencyContactName,
                emergencyContactRelation: basePatientDetails.emergencyContactRelation,
                emergencyContactPhoneNumber: basePatientDetails.emergencyContactPhoneNumber,
                preferredPharmacyName: basePatientDetails.preferredPharmacyName,
                preferredPharmacyAddress: basePatientDetails.preferredPharmacyAddress,
                preferredPharmacyPhoneNumber: basePatientDetails.preferredPharmacyPhoneNumber
            })
                .then(() => history.push("/"))
        }
    }






    useEffect(() => {
        getBasePatientDetails().then(() => {
            if (basePatientDetailsId) {
                getBasePatientDetailsById(basePatientDetailsId).then(() => {
                    setIsLoading(false)
                })
            } else {
                setIsLoading(false)
            }
        })
    }, [])








    return (
        <form className="patientDetailsForm rightSideChildCSS">
            <h2 className="patientDetailsForm__title">Patient Information</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Patient name:</label>
                    <input type="text" id="name"
                        onChange={handleControlledInputChange}
                        required autoFocus
                        className="form-control"
                        placeholder="Patient name"
                        value={basePatientDetails.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="birthday">Birthday: </label>
                    <input type="text" id="birthday"
                        onChange={handleControlledInputChange}
                        required autoFocus
                        className="form-control"
                        placeholder="Birthday"
                        value={basePatientDetails.birthday} />
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
                        value={basePatientDetails.emergencyContactName} />
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
                        value={basePatientDetails.emergencyContactRelation} />
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
                        value={basePatientDetails.emergencyContactPhoneNumber} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    handleClickSavePatientDetails()
                }}>
                {basePatientDetails.id ? "Save Changes" : "Save"}
            </button>
        </form>
    )
}