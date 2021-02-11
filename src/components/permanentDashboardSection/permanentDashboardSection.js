import React from "react";
import { PatientDetailList } from "./patientDetails/PatientDetailList";
import { AlertList } from "./alerts/AlertList";
import { PreferredPharmacyList } from "./preferredPharmacies/PreferredPharmacyList";
import "./permanentDashboardSection.css"
export const PermanentDashboardSection = (props) => {
    return (
        <section className="container--left">
            <PatientDetailList className="leftSideChildCSS"/>
            <AlertList className="leftSideChildCSS"/>
            <PreferredPharmacyList className="leftSideChildCSS"/>
        </section>
    )
}; 