import React, { useContext, useEffect, useState } from "react";
import { basePatientDetailsContext } from "./permanentDashboardProvider";
import { PatientDetailList } from "./patientDetails/PatientDetailList";
import { AlertList } from "./alerts/AlertList";
import { PreferredPharmacyList } from "./preferredPharmacies/PreferredPharmacyList";
import "./permanentDashboardSection.css";



export const PermanentDashboardSection = (props) => {
    const { getBasePatientDetails } = useContext(basePatientDetailsContext)
    const userId = parseInt(localStorage.getItem("app_user"))
    const [matchedUser, setMatchedUser] = useState([])

    /*
      - useEffect...
      - it is a function that takes 2 arguments (anonymous function and an 
        empty array into which we are passing the patient details retrieved by id)
      - more or less setting up an event listener
    */
    useEffect(() =>
        getBasePatientDetails()
        .then((details) => {
            const selectedUser = details.find(detail => detail.userId === userId)
            setMatchedUser(selectedUser)
        })
        , [])



    return (
        <section className="container--left">
            <PatientDetailList matchedUser={matchedUser} />
            <AlertList matchedUser={matchedUser} />
            <PreferredPharmacyList matchedUser={matchedUser} />
        </section>
    )
};