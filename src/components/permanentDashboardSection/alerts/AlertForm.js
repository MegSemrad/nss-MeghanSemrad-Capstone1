import React, { useContext, useEffect, useState } from "react";
import { basePatientDetailsContext } from "../permanentDashboardProvider";
// import "./??.css";
import { useHistory, useParams } from 'react-router-dom';
import "../permanentDashboardSection.css"

export const AlertForm = () => {
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
 


    const handleClickSaveAlerts = () => {
        setIsLoading(true);
        if (basePatientDetailsId) {
            updateBasePatientDetails({
                id: basePatientDetails.id,
                userId: userId,
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
                .then(() => history.push("/home"))
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
                .then(() => history.push("/home"))
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
        <form className="AlertsForm  ">
            <h2 className="AlertsForm__title">Alerts</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="conditions">Conditions:</label>
                    <input type="text" id="conditions"
                        onChange={handleControlledInputChange}
                        required autoFocus
                        className="form-control"
                        placeholder="Conditions"
                        value={basePatientDetails.conditions} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="allergies">Allergies: </label>
                    <input type="text" id="allergies"
                        onChange={handleControlledInputChange}
                        required autoFocus
                        className="form-control"
                        placeholder="Allergies"
                        value={basePatientDetails.allergies} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="other">Other: </label>
                    <input type="textarea" id="other"
                        onChange={handleControlledInputChange}
                        required autoFocus
                        className="form-control"
                        placeholder="Other"
                        value={basePatientDetails.other} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    handleClickSaveAlerts()
                }}>
                {basePatientDetails.id ? "Save Changes" : "Save"}
            </button>
        </form>
    )
}