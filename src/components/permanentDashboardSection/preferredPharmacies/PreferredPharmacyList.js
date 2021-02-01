import React, { useContext, useEffect } from "react";
import { basePatientDetailsContext } from "../permanentDashboardProvider";
import { PreferredPharmacyCard } from "./PreferredPharmacyCard";


export const PreferredPharmacyList = () => {
  const { basePatientDetails, getBasePatientDetails } = useContext(basePatientDetailsContext)


  useEffect(() => {
    getBasePatientDetails()
    }, [])


  return (
    <div className="preferredPharmacy">
        {basePatientDetails.map(basePatientDetail => {
        
            return <PreferredPharmacyCard key={basePatientDetail.id} //argument
            basePatientDetail={basePatientDetail} /> //argument
        })
        }
    </div>
  )
};
