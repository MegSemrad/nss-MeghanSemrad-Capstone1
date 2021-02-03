import React from "react";
import { PatientDetailList } from "./patientDetails/PatientDetailList";
import { AlertList } from "./alerts/AlertList";
import { PreferredPharmacyList } from "./preferredPharmacies/PreferredPharmacyList";

export const PermanentDashboardSection = (props) => {
    return (
        <>
        <PatientDetailList />
        {/* <AlertList />
        <PreferredPharmacyList /> */}
        </>
    )
}; 