import React from "react";

export const PermanentDashboardSection = ({ patientDetail }) => {
    return (
        <>
            <section className="patientDetails">
                <h3 className="patientDetails__card__title">Patient Details</h3>
                <div className="patientDetails__name">Meghan</div>
                <div className="patientDetails__name">09/08/1992</div>
                <h5 className="patientDetails__emergency__contact">Emergency Contact
                                    <div className="emergency__contact__name">Monica</div>
                    <div className="emergency__contact__relation">Mother</div>
                    <div className="emergency__contact__phone__number">000-000-0000</div>
                </h5>
            </section>
            <section>Alert function will be invoked here</section>
            <section>Preferred Pharmacy function will be invoked here</section>
        </>
    )
};
