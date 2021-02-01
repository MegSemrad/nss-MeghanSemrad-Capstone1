import React from "react";
// import "./permanentDashboardSection.css"
import { PatientDetailList } from "./patientDetails/PatientDetailList"
import { AlertCard } from "./alerts/AlertCard"

export const PermanentDashboardSection = (props) => {
    return (
        <>
        <PatientDetailList />
        <AlertCard />
            {/* <section>
                <section className="permanentDashboardSection">Preferred Pharmacy function will be invoked here</section>
            </section>  */}
        </>
    )
}; 
