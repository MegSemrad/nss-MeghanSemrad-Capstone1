import React from "react";

export const AlertCard = ({basePatientDetail}) => {
    return (
        <>
            <section className="alerts permanentDashboardSection">
                <h3 className="alerts__card__title">Alerts</h3>
                <div className="alerts__conditions">{basePatientDetail.conditions}</div>
                <div className="alerts__allergies">{basePatientDetail.allergies}</div>
            </section>
        </>
    )
    };