import React from "react";

export const PatientDetailCard = ({basePatientDetail}) => {
    return (
        <>
        <section>
            <section className="patientDetails, permanentDashboardSection">
                <h3 className="patientDetails__card__title">Patient Details</h3>
                <div className="patientDetails__name">{basePatientDetail.name}</div>
                <div className="patientDetails__name">{basePatientDetail.birthday}</div>
                <h5 className="patientDetails__emergency__contact">Emergency Contact</h5>
                    <div className="emergency__contact__name">{basePatientDetail.emergencyContactName}</div>
                    <div className="emergency__contact__relation">{basePatientDetail.emergencyContactRelation}</div>
                    <div className="emergency__contact__phone__number">{basePatientDetail.emergencyContactPhoneNumber}</div>
            </section>
        </section>
        </>
    )
};