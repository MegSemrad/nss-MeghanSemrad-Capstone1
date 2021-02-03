import React, { useContext, useEffect, useState } from "react";
import { basePatientDetailsContext } from "../permanentDashboardProvider";
// import "./??.css";
import { useHistory, useParams } from 'react-router-dom';

export const PreferredPharmacyForm = () => {
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
 


    const handleClickSavePreferredPharmacy = () => {
        setIsLoading(true);
        if (basePatientDetailsId) {
            updateBasePatientDetails({
                id: basePatientDetails.id,
                preferredPharmacyName: basePatientDetails.preferredPharmacyName,
                preferredPharmacyAddress: basePatientDetails.preferredPharmacyAddress,
                preferredPharmacyPhoneNumber: basePatientDetails.preferredPharmacyPhoneNumber
            })
                .then(() => history.push(`/preferredPharmacies/details/:basePatientDetailsId/${basePatientDetails.id}`))
        } else {
            addBasePatientDetails({
                userId: userId, //what to save the userId who is currently logged in on the new basePatientDetails object
                 preferredPharmacyName: basePatientDetails.preferredPharmacyName,
                preferredPharmacyAddress: basePatientDetails.preferredPharmacyAddress,
                preferredPharmacyPhoneNumber: basePatientDetails.preferredPharmacyPhoneNumber
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
        <form className="preferredPharmaciesForm">
            <h2 className="preferredPharmaciesForm__title">Preferred Pharmacy</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name"
                        onChange={handleControlledInputChange}
                        required autoFocus
                        className="form-control"
                        placeholder="Name"
                        value={basePatientDetails.preferredPharmacyName} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Address: </label>
                    <input type="text" id="address"
                        onChange={handleControlledInputChange}
                        required autoFocus
                        className="form-control"
                        placeholder="Address"
                        value={basePatientDetails.preferredPharmacyAddress} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number: </label>
                    <input type="text" id="phoneNu,ber"
                        onChange={handleControlledInputChange}
                        required autoFocus
                        className="form-control"
                        placeholder="Phone Number"
                        value={basePatientDetails.preferredPharmacyPhoneNumber} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    handleClickSavePreferredPharmacy()
                }}>
                {basePatientDetailsId ? "Save" : "Save Changes"}
            </button>
        </form>
    )
}