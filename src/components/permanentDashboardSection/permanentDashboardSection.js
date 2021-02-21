import React, { useContext, useEffect, useState } from "react";
import { basePatientDetailsContext } from "./permanentDashboardProvider";
import { PatientDetailList } from "./patientDetails/PatientDetailList";
import { AlertList } from "./alerts/AlertList";
import { PreferredPharmacyList } from "./preferredPharmacies/PreferredPharmacyList";


export const PermanentDashboardSection = (props) => {
    const { getBasePatientDetails } = useContext(basePatientDetailsContext);
    const userId = parseInt(localStorage.getItem("app_user"));
    const [matchedUser, setMatchedUser] = useState([]);

    
    useEffect(() =>
        getBasePatientDetails()
        .then((details) => {
            const selectedUser = details.find(detail => detail.userId === userId)
            setMatchedUser(selectedUser)
        })
        , []);


    return (
        <section className="container--left">
            <PatientDetailList matchedUser={matchedUser} />
            <AlertList matchedUser={matchedUser} />
            <PreferredPharmacyList matchedUser={matchedUser} />
        </section>
    )
};