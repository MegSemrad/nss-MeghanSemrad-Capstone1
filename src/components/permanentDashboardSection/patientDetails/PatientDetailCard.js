import React from "react";

export const PatientDetailCard = ({patientDetail}) => {
    return (
        <>
        <section>
            <section className="patientDetails, permanentDashboardSection">
                <h3 className="patientDetails__card__title">Patient Details</h3>
                <div className="patientDetails__name">{patientDetail.name}</div>
                <div className="patientDetails__name">{patientDetail.birthday}</div>
                <h5 className="patientDetails__emergency__contact">Emergency Contact</h5>
                    <div className="emergency__contact__name">{patientDetail.emergencyContactName}</div>
                    <div className="emergency__contact__relation">{patientDetail.emergencyContactRelation}</div>
                    <div className="emergency__contact__phone__number">{patientDetail.emergencyContactPhoneNumber}</div>
            </section>
        </section>
        </>
    )
}