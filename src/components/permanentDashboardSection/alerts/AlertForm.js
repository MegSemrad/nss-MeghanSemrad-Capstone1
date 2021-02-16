import React, { useContext, useEffect, useState } from "react";
import { basePatientDetailsContext } from "../permanentDashboardProvider";
import { useHistory } from 'react-router-dom';
import "../permanentDashboardSection.css"

export const AlertForm = () => {
    const { getBasePatientDetails, updateBasePatientDetails } = useContext(basePatientDetailsContext)
    const userId = parseInt(localStorage.getItem("app_user"))
    const history = useHistory();

    const [alertSection, setAlertSection] = useState({
        userId: 0,
        name: "",
        birthday: "",
        conditions: "",
        allergies: "",
        other: "",
        emergencyContactName: "",
        emergencyContactRelation: "",
        emergencyContactPhoneNumber: "",
        preferredPharmacyName: "",
        preferredPharmacyAddress: "",
        preferredPharmacyPhoneNumber: ""
    })


    const handleControlledInputChange = (event) => {
        const newAlerts = { ...alertSection }
        newAlerts[event.target.id] = event.target.value
        setAlertSection(newAlerts)
    }
 


    const handleClickSaveAlerts = () => {
            updateBasePatientDetails({
                id: alertSection.id,
                userId: userId,
                name: alertSection.name,
                birthday: alertSection.birthday,
                conditions: alertSection.conditions,
                allergies: alertSection.allergies,
                other: alertSection.other,
                emergencyContactName: alertSection.emergencyContactName,
                emergencyContactRelation: alertSection.emergencyContactRelation,
                emergencyContactPhoneNumber: alertSection.emergencyContactPhoneNumber,
                preferredPharmacyName: alertSection.preferredPharmacyName,
                preferredPharmacyAddress: alertSection.preferredPharmacyAddress,
                preferredPharmacyPhoneNumber: alertSection.preferredPharmacyPhoneNumber
            })
                .then(() => history.push("/home"))
    }




    useEffect(() => {
        getBasePatientDetails()
        .then((details) => {
            const SelectedAlertSection = details.find(detail => detail.userId === userId)
            setAlertSection(SelectedAlertSection)
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
                        value={alertSection.conditions} />
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
                        value={alertSection.allergies} />
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
                        value={alertSection.other} />
                </div>
            </fieldset>
            <button id="app_button" className="btn btn-primary"
                onClick={event => {
                    event.preventDefault()
                    handleClickSaveAlerts()
                }}>
                Save
            </button>
        </form>
    )
}