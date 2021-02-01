import React from "react";
import "./permanentDashboardSection.css"

export const PermanentDashboardSection = ({ patientDetail }) => {
    return (
        <>
            <section className="patientDetails, permanentDashboardSection">
                <h3 className="patientDetails__card__title">Patient Details</h3>
                <div className="patientDetails__name">{patientDetail.name}</div>
                <div className="patientDetails__name">09/08/1992</div>
                <h5 className="patientDetails__emergency__contact">Emergency Contact
                    <div className="emergency__contact__name">Monica</div>
                    <div className="emergency__contact__relation">Mother</div>
                    <div className="emergency__contact__phone__number">000-000-0000</div>
                </h5>
            </section>
            <section className="permanentDashboardSection">Alert function will be invoked here</section>
            <section className="permanentDashboardSection">Preferred Pharmacy function will be invoked here</section>
        </>
    )
};
