import React, { useContext, useEffect, useState } from "react";
import { basePatientDetailsContext } from "../permanentDashboardProvider";
import { useHistory } from 'react-router-dom';

export const PatientDetailForm = () => {
    const { getBasePatientDetails, updateBasePatientDetails } = useContext(basePatientDetailsContext);
    const userId = parseInt(localStorage.getItem("app_user"));  
    const history = useHistory();

    const [patientDetailSection, setPatientDetailSection] = useState({
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
    });


    const handleControlledInputChange = (event) => {
        const newPatientDetails = { ...patientDetailSection }
        newPatientDetails[event.target.id] = event.target.value
        setPatientDetailSection(newPatientDetails)
    };
 


    const handleClickSavePatientDetails = () => {
            updateBasePatientDetails({
                id: patientDetailSection.id,
                userId: userId,
                name: patientDetailSection.name,
                birthday: patientDetailSection.birthday,
                conditions: patientDetailSection.conditions,
                allergies: patientDetailSection.allergies,
                other: patientDetailSection.other,
                emergencyContactName: patientDetailSection.emergencyContactName,
                emergencyContactRelation: patientDetailSection.emergencyContactRelation,
                emergencyContactPhoneNumber: patientDetailSection.emergencyContactPhoneNumber,
                preferredPharmacyName: patientDetailSection.preferredPharmacyName,
                preferredPharmacyAddress: patientDetailSection.preferredPharmacyAddress,
                preferredPharmacyPhoneNumber: patientDetailSection.preferredPharmacyPhoneNumber
            })
                .then(() => history.push("/home"))
    };






    useEffect(() => {
        getBasePatientDetails()
        .then((details) => {
            const SelectedPatientDetailSection = details.find(detail => detail.userId === userId)
            setPatientDetailSection(SelectedPatientDetailSection)
        })
    }, []);








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
                        value={patientDetailSection.name} />
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
                        value={patientDetailSection.birthday} />
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
                        value={patientDetailSection.emergencyContactName} />
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
                        value={patientDetailSection.emergencyContactRelation} />
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
                        value={patientDetailSection.emergencyContactPhoneNumber} />
                </div>
            </fieldset>
            <button id="app_button" className="btn btn-primary"
                onClick={event => {
                    event.preventDefault()
                    handleClickSavePatientDetails()
                }}>
                Save
            </button>
        </form>
    )
};