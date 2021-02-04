import React, { useContext, useEffect, useState } from "react";
import { basePatientDetailsContext } from "../permanentDashboardProvider";
// import "./??.css";
import { useHistory, useParams } from 'react-router-dom';

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
                conditions: basePatientDetails.conditions,
                allergies: basePatientDetails.allergies,
            })
                .then(() => history.push(`/alerts/details/:basePatientDetailsId/${basePatientDetails.id}`))
        } else {
            addBasePatientDetails({
                userId: userId, //what to save the userId who is currently logged in on the new basePatientDetails object
                conditions: basePatientDetails.conditions,
                allergies: basePatientDetails.allergies,
            })
                .then(() => history.push("/landingpage"))
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
        <form className="AlertsForm">
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