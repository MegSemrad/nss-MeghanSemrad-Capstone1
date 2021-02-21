import React, { useContext, useEffect, useState } from "react";
import { basePatientDetailsContext } from "../permanentDashboardProvider";
import { useHistory } from 'react-router-dom';

export const PreferredPharmacyForm = () => {
    const { getBasePatientDetails, updateBasePatientDetails } = useContext(basePatientDetailsContext);
    const userId = parseInt(localStorage.getItem("app_user"));
    const history = useHistory();

 
    const [preferredPharmacySection, setPreferredPharmacySection] = useState({
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
        const newPreferredPharmacyDetails = { ...preferredPharmacySection }
        newPreferredPharmacyDetails[event.target.id] = event.target.value
        setPreferredPharmacySection(newPreferredPharmacyDetails)
    };
 


    const handleClickSavePreferredPharmacy = () => {
            updateBasePatientDetails({
                id: preferredPharmacySection.id,
                userId: userId,
                name: preferredPharmacySection.name,
                birthday: preferredPharmacySection.birthday,
                conditions: preferredPharmacySection.conditions,
                allergies: preferredPharmacySection.allergies,
                other: preferredPharmacySection.other,
                emergencyContactName: preferredPharmacySection.emergencyContactName,
                emergencyContactRelation: preferredPharmacySection.emergencyContactRelation,
                emergencyContactPhoneNumber: preferredPharmacySection.emergencyContactPhoneNumber,
                preferredPharmacyName: preferredPharmacySection.preferredPharmacyName,
                preferredPharmacyAddress: preferredPharmacySection.preferredPharmacyAddress,
                preferredPharmacyPhoneNumber: preferredPharmacySection.preferredPharmacyPhoneNumber
            })
                .then(() => history.push("/home"))
        };






        useEffect(() => {
            getBasePatientDetails()
            .then((details) => {
                const SelectedPreferredPharmacySection = details.find(detail => detail.userId === userId)
                setPreferredPharmacySection(SelectedPreferredPharmacySection)
            })
        }, []);








    return (
        <form className="preferredPharmaciesForm rightSideChildCSS">
            <h2 className="preferredPharmaciesForm__title">Preferred Pharmacy</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="preferredPharmacyName">Name:</label>
                    <input type="text" id="preferredPharmacyName"
                        onChange={handleControlledInputChange}
                        required autoFocus
                        className="form-control"
                        placeholder="Name"
                        value={preferredPharmacySection.preferredPharmacyName} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="preferredPharmacyAddress">Address: </label>
                    <input type="text" id="preferredPharmacyAddress"
                        onChange={handleControlledInputChange}
                        required autoFocus
                        className="form-control"
                        placeholder="Address"
                        value={preferredPharmacySection.preferredPharmacyAddress} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="preferredPharmacyPhoneNumber">Phone Number: </label>
                    <input type="text" id="preferredPharmacyPhoneNumber"
                        onChange={handleControlledInputChange}
                        required autoFocus
                        className="form-control"
                        placeholder="Phone Number"
                        value={preferredPharmacySection.preferredPharmacyPhoneNumber} />
                </div>
            </fieldset>
            <button id="app_button" className="btn btn-primary"
                onClick={event => {
                    event.preventDefault()
                    handleClickSavePreferredPharmacy()
                }}>
                Save
            </button>
        </form>
    )
};