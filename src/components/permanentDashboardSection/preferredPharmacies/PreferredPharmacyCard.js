import React from "react";

export const PreferredPharmacyCard = ({basePatientDetail}) => {
    return (
        <>
            <section className="preferredPharmacy permanentDashboardSection">
                <h3 className="preferredPharmacy__card__title">Preferred Pharmacy</h3>
                <div className="preferredPharmacy__name">{basePatientDetail.preferredPharmacyName}</div>
                <div className="preferredPharmacy__address">{basePatientDetail.preferredPharmacyAddress}</div>
                <div className="preferredPharmacy__phone__number">{basePatientDetail.preferredPharmacyPhoneNumber}</div>
            </section>
        </>
    )
    };