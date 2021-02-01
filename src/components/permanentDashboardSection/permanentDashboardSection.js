import React from "react";
import { PatientDetailList } from "./patientDetails/PatientDetailList";
import { AlertList } from "./alerts/AlertList";

export const PermanentDashboardSection = (props) => {
    return (
        <>
        <PatientDetailList />
        <AlertList />
        </>
    )
}; 